# cargo-ats3 Implementation Plan

Reference: [cargo-ats3-design.md](./cargo-ats3-design.md)

---

## Phase 0: Repository Setup

- [ ] Create `cargo-ats3` repo on GitHub (convention: binary named `cargo-ats3`,
      invoked as `cargo ats3`)
- [ ] Initialize with `cargo init --name cargo-ats3`
- [ ] Add initial `Cargo.toml` with core dependencies (clap, toml, serde, anyhow)
- [ ] Add `flake.nix` for Nix-based builds (see design doc for template)
- [ ] Add as git submodule in the ATS repo:
      `git submodule add https://github.com/bbarker/cargo-ats3 cargo-ats3`
- [ ] Wire into the ATS flake as a `path:./cargo-ats3` input so `nix develop`
      includes `cargo-ats3` on `$PATH`
- [ ] Set up CI (GitHub Actions: `cargo check`, `cargo test`, `cargo clippy`)

## Phase 1: Project Scaffolding & Manifest Parsing

Goal: `cargo ats3 new` and `cargo ats3 init` produce valid projects; the
manifest can be parsed and validated.

### 1a. CLI skeleton

- [ ] Set up `clap` derive-based CLI with top-level subcommands:
      `new`, `init`, `build`, `add`, `remove`, `check`, `test`, `run`,
      `publish`, `package`, `tree`, `fetch`, `lock`, `login`, `search`, `whoami`
- [ ] Stub each subcommand with argument parsing and `todo!()` body
- [ ] Implement `--version`, `--help`

### 1b. Ats3.toml parsing

- [ ] Define `Manifest` struct with serde for `[package]`, `[dependencies]`,
      `[dev-dependencies]`, `[backends.js]`, `[backends.python]`, `[backends.c]`
- [ ] Parse and validate `Ats3.toml` from the current directory (or `--manifest-path`)
- [ ] Error on missing required fields (`name`, `version`)
- [ ] Round-trip test: parse → serialize → parse yields same result

### 1c. `cargo ats3 new` / `cargo ats3 init`

- [ ] `new <name> [--template lib|bin]`: create directory, generate `Ats3.toml`,
      `src/lib.dats` or `src/bin/main.dats`, `.gitignore`, `git init`
- [ ] `init`: same as `new` but in the current directory
- [ ] Template for `lib.dats`:
      ```ats3
      #include "prelude/HATS/prelude_dats.hats"
      ```
- [ ] Template for `bin/main.dats`:
      ```ats3
      #include "prelude/HATS/prelude_dats.hats"
      #include "prelude/HATS/prelude_JS_dats.hats"

      val () = println("Hello from ATS3!")
      val () = console_log(the_print_store_flush())
      ```
- [ ] Integration test: `cargo ats3 new foo && ls foo/Ats3.toml` succeeds

## Phase 2: JS Backend Build

Goal: `cargo ats3 build --backend js` compiles ATS3 source to a
self-contained JS package in `target/ats3/js/`.

### 2a. Compiler invocation

- [ ] Locate `xats2js` on `$PATH` or from `$XATSHOME`
- [ ] Invoke `xats2js` on the library/binary entry point `.dats` file
- [ ] Concatenate runtime files (from `$XATSHOME/xassets/JS/xats2js/runtime/`)
      with compiled output (matching the logic in the flake's `xats2js-build`)
- [ ] Write combined output to `target/ats3/js/index.js`

### 2b. Package generation

- [ ] Generate `target/ats3/js/package.json` from `Ats3.toml` metadata
      (name, version, description, license; npm-scope from `[backends.js]`)
- [ ] Support `module-format` config: generate `index.esm.js` for ESM
- [ ] Respect `[backends.js].target` (node vs browser) in package.json `main`/`module`

### 2c. Incremental rebuilds

- [ ] Track file modification times (or content hashes) for `.dats` source files
- [ ] Skip rebuild if output is newer than all sources
- [ ] `--force` flag to bypass

### 2d. `cargo ats3 run`

- [ ] For binary projects: `cargo ats3 run [-- args]` builds then invokes
      `node target/ats3/js/index.js [args]`
- [ ] Pass through exit code

### 2e. `cargo ats3 check`

- [ ] Invoke `xats2js` in type-check-only mode (if available), otherwise
      run a full build but discard the output

## Phase 3: Dependency Management (Local + Git)

Goal: `cargo ats3 add`, path dependencies, and git dependencies work.

### 3a. `cargo ats3 add` / `cargo ats3 remove`

- [ ] Use `toml_edit` to modify `Ats3.toml` in place (preserving formatting)
- [ ] `add <pkg> --version <ver>`: add to `[dependencies]`
- [ ] `add <pkg> --git <url>`: add git dependency
- [ ] `add <pkg> --path <path>`: add path dependency
- [ ] `add <pkg> --dev`: add to `[dev-dependencies]`
- [ ] `remove <pkg>`: remove from dependencies

### 3b. Path dependencies

- [ ] Resolve `path = "../my-lib"` entries in `[dependencies]`
- [ ] Include resolved sources on the ATS3 compiler's include path

### 3c. Git dependencies

- [ ] Clone git repos to `~/.cargo/ats3/git/`
- [ ] Support `branch`, `tag`, `rev` fields
- [ ] Cache cloned repos; fetch on `cargo ats3 fetch`

### 3d. `cargo ats3 tree`

- [ ] Display dependency tree (flat list is fine for MVP)

## Phase 4: Python Backend

Goal: `cargo ats3 build --backend python` compiles ATS3 source via `xats2py`
and produces a Python package.

- [ ] Locate `xats2py` on `$PATH`
- [ ] Invoke `xats2py` on entry-point `.dats` file
- [ ] Write output to `target/ats3/python/<package_name>/`
- [ ] Generate `__init__.py` that imports the compiled module
- [ ] Generate `py.typed` marker
- [ ] Generate `pyproject.toml` from `Ats3.toml` metadata
- [ ] Optional `--wheel` flag: build a wheel in `target/ats3/python/dist/`
      (reference `maturin` for wheel layout)
- [ ] `cargo ats3 run` for Python: invoke `python target/ats3/python/<pkg>/__init__.py`

## Phase 5: Lockfile & Registry Resolution

Goal: reproducible builds via `Ats3.lock` and resolution against a registry.

### 5a. Lockfile

- [ ] Define `Ats3.lock` TOML format (see design doc)
- [ ] Write lock after resolution; read lock to skip re-resolution
- [ ] `cargo ats3 lock` / `cargo ats3 fetch` commands

### 5b. Registry client

- [ ] Implement sparse HTTP registry client using `tame-index` crate
- [ ] Query package metadata from registry index
- [ ] Download + verify (SHA-256) package tarballs
- [ ] Cache in `~/.cargo/ats3/cache/`

### 5c. Dependency resolution

- [ ] Integrate `pubgrub` + `semver-pubgrub` for SAT-based resolution
- [ ] Resolve transitive dependencies
- [ ] Merge registry + git + path sources

### 5d. `cargo ats3 login` / `cargo ats3 whoami` / `cargo ats3 search`

- [ ] Credential storage using `cargo-credential` crate patterns
- [ ] Token-based auth against registry API
- [ ] `search <query>`: query registry API, display results

## Phase 6: Publishing

Goal: publish ATS3 packages to the ats3-registry, npm, and PyPI.

### 6a. `cargo ats3 package`

- [ ] Create `.tar.gz` of source package (using `tar` + `flate2`)
- [ ] Include `Ats3.toml`, `src/`, relevant metadata
- [ ] Compute checksum

### 6b. `cargo ats3 publish`

- [ ] `publish` (no flag): upload to ats3-registry
- [ ] `publish --backend js`: run JS build, then `npm publish` on
      `target/ats3/js/`
- [ ] `publish --backend python`: run Python build, then `twine upload`
      on the wheel
- [ ] `publish --all-backends`: all of the above
- [ ] Pre-publish validation: version not already published, required
      fields present

### 6c. Registry server (MVP)

- [ ] Static file layout for sparse HTTP index (can be hosted on
      GitHub Pages / S3 / Cloudflare R2)
- [ ] Upload API endpoint (or manual index update via CI)
- [ ] `config.json` with download URL template

## Phase 7: C Backend & Rust FFI

Goal: when `xats2c` is available, support C output and Rust interop.

**Note:** This phase can be pulled forward independently once `xats2c` lands.

- [ ] Locate `xats2c` on `$PATH`
- [ ] Invoke `xats2c`, write output to `target/ats3/c/`
- [ ] Generate C header from ATS3 public interface
- [ ] Generate `pkg-config` `.pc` file
- [ ] Build static/shared library (`gcc`/`cc`)
- [ ] Optional: generate `*-sys` Rust crate scaffold:
  - [ ] `build.rs` that compiles the C source via the `cc` crate
  - [ ] `lib.rs` with `extern "C"` bindings (via `bindgen` or hand-written)
  - [ ] `Cargo.toml` with `links = "my_ats3_lib"`

## Future / Out of Scope (for now)

These are tracked as open questions, not planned phases:

- **TypeScript `.d.ts` generation** from ATS3 type signatures
- **Workspace support** for monorepos (shared `Ats3.lock`, path deps between
  workspace members)
- **ATS3 edition mechanism** (per-package `edition` field in `Ats3.toml`)
- **Cross-backend test framework** (write tests in `.dats`, run on all backends)
- **Pre-compiled binary distribution** in the registry
- **IDE / LSP integration**
- **Host-language build plugins** (Vite plugin, setuptools hook) that delegate
  to `cargo ats3 build`
