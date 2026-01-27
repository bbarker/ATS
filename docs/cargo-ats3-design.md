# cargo-ats3: First-Class ATS3 Integration with Cargo

## Overview

This document describes the architecture for `cargo-ats3`, a Cargo subcommand
that makes ATS3 a first-class citizen in the Cargo ecosystem. The goal is to
provide ATS3 developers with the same experience Rust developers have: seamless
project management, dependency resolution, multi-target builds, and publishing.

## Design Principles

1. **ATS3-first**: ATS3 projects shouldn't require Rust knowledge
2. **Multi-backend**: Support JS, Python, and (future) C from single source
3. **Familiar UX**: Follow Cargo conventions where possible
4. **Ecosystem integration**: Publish to npm, PyPI, and dedicated ATS3 registry

## Project Structure

### Minimal Project

```
my-ats3-lib/
├── Ats3.toml
├── Ats3.lock
└── src/
    └── lib.dats
```

### Full-Featured Project

An example might look like:

```
my-ats3-lib/
├── Ats3.toml                 # ATS3 manifest (primary)
├── Ats3.lock                 # Dependency lockfile
├── Cargo.toml                # Optional: for Rust FFI interop
├── src/
│   ├── lib.dats              # Library root
│   ├── bin/
│   │   └── cli.dats          # Binary entry point
│   └── prelude.hats          # Include files
├── backends/
│   ├── js/
│   │   └── package.json      # Generated/customizable
│   └── python/
│       └── pyproject.toml    # Generated/customizable
├── target/
│   └── ats3/
│       ├── js/               # JS build output
│       ├── python/           # Python build output
│       └── c/                # C build output (future)
└── .gitignore
```

## Manifest Format: Ats3.toml

```toml
[package]
name = "my-ats3-lib"
version = "0.1.0"
edition = "2025"
authors = ["Alice <alice@example.com>"]
description = "A cool ATS3 library"
license = "MIT"
repository = "https://github.com/user/my-ats3-lib"

[dependencies]
prelude = "0.2.0"
collections = { version = "0.3.0", features = ["sorting"] }

# Backend configuration
[backends.js]
enabled = true
target = "node"               # or "browser", "both"
module-format = "esm"         # or "cjs"
generate-types = true         # Generate .d.ts
npm-scope = "@myorg"          # For scoped packages

[backends.python]
enabled = true
min-version = "3.8"
wheel = true

[backends.c]
enabled = false               # Future: C FFI backend

[dev-dependencies]
test-utils = "0.1.0"
```

### Why Separate from Cargo.toml?

- ATS3 projects can exist without any Rust
- Cleaner than `[package.metadata.ats3]` pollution
- Simpler tooling and parsing
- Hybrid projects can have both manifests

## Commands

### Project Management

```bash
# Create new project
cargo ats3 new <name> [--template lib|bin]
cargo ats3 init

# Examples
cargo ats3 new my-lib --template lib
cargo ats3 new my-cli --template bin
```

### Dependency Management

```bash
# Add/remove dependencies
cargo ats3 add <package> [--version <ver>]
cargo ats3 remove <package>

# Inspect dependencies
cargo ats3 tree
cargo ats3 fetch
cargo ats3 lock

# Examples
cargo ats3 add collections --version "^0.3"
cargo ats3 add my-lib --git https://github.com/user/my-lib
```

### Building

```bash
# Build for specific backend
cargo ats3 build [--backend <js|python|c>] [--release]

# Build all enabled backends
cargo ats3 build --all-backends

# Examples
cargo ats3 build --backend js --release
cargo ats3 build --backend python --wheel
```

### Testing & Development

```bash
cargo ats3 check                    # Type-check without building
cargo ats3 test [--backend <backend>]
cargo ats3 run <binary> [-- args]
```

### Publishing

```bash
# Publish to specific backend's ecosystem
cargo ats3 publish --backend js      # → npm
cargo ats3 publish --backend python  # → PyPI
cargo ats3 publish                   # → ats3-registry

# Publish everywhere
cargo ats3 publish --all-backends

# Package without publishing
cargo ats3 package [--backend <backend>]
```

### Registry Management

```bash
cargo ats3 login [--registry <registry>]
cargo ats3 search <query>
cargo ats3 whoami
```

## Multi-Backend Architecture

### Build Flow

```
┌─────────────────────────────────────┐
│        ATS3 Source (.dats)          │
└──────────────┬──────────────────────┘
               │
    ┌──────────┼──────────┐
    │          │          │
    ▼          ▼          ▼
 xats2js    xats2py    xats2c
    │          │          │
    ▼          ▼          ▼
   JS       Python       C
    │          │          │
    ▼          ▼          ▼
  npm        PyPI    crates.io
```

### JavaScript Backend

**Build output:**
```
target/ats3/js/
├── package.json      # Generated from Ats3.toml
├── index.js          # Compiled code + runtime
├── index.d.ts        # TypeScript definitions
└── index.esm.js      # ES module version
```

**Generated package.json:**
```json
{
  "name": "@myorg/my-ats3-lib",
  "version": "0.1.0",
  "main": "index.js",
  "module": "index.esm.js",
  "types": "index.d.ts",
  "dependencies": {
    "@ats3/prelude": "^0.2.0"
  }
}
```

### Python Backend

**Build output:**
```
target/ats3/python/
├── my_ats3_lib/
│   ├── __init__.py
│   └── py.typed
├── pyproject.toml
└── dist/
    └── my_ats3_lib-0.1.0-py3-none-any.whl
```

### C Backend (Future)

**Build output:**
```
target/ats3/c/
├── include/
│   └── my_ats3_lib.h
├── lib/
│   ├── libmy_ats3_lib.a
│   └── libmy_ats3_lib.so
└── my_ats3_lib.pc     # pkg-config
```

## Registry Strategy

### Primary: ats3-registry

Central registry for ATS3 packages at `registry.ats-lang.org`.

**Index structure (sparse HTTP):**
```
registry.ats-lang.org/
├── index/
│   ├── co/ll/collections
│   └── pr/el/prelude
└── crates/
    └── collections/
        └── 0.3.0/
            ├── download.tar.gz
            └── metadata.json
```

**Configuration:**
```toml
# .cargo/config.toml
[registries.ats3]
index = "sparse+https://registry.ats-lang.org/index"
```

### Secondary Publishing

Packages can optionally dual-publish:
- **npm**: JS backend artifacts
- **PyPI**: Python wheels
- **crates.io**: Metadata + optional Rust FFI crate (`my-lib-sys`)

## Dependency Resolution

### Ats3.lock Format

```toml
# Auto-generated, version controlled

[[package]]
name = "collections"
version = "0.3.0"
source = "registry+https://registry.ats-lang.org"
checksum = "abc123..."
dependencies = ["prelude@0.2"]

[[package]]
name = "prelude"
version = "0.2.0"
source = "registry+https://registry.ats-lang.org"
checksum = "def456..."
```

### Resolution Algorithm

1. Parse `Ats3.toml` dependencies
2. Check local cache (`~/.cargo/ats3/cache/`)
3. Query ats3-registry
4. Resolve transitive dependencies (SemVer)
5. Write `Ats3.lock`
6. Download sources to `target/ats3/deps/`

## Rust Interop (Future)

When ATS3 supports C output, Rust interop becomes possible:

```toml
# Ats3.toml
[backends.c]
enabled = true
generate-bindings = true

# Cargo.toml (for Rust FFI consumer)
[dependencies]
my-ats3-lib-sys = "0.1.0"  # Auto-generated -sys crate
```

The C backend would:
1. Compile ATS3 → C via xats2c
2. Generate C headers (cbindgen-style)
3. Optionally create `*-sys` crate for crates.io
4. Enable `extern "C"` FFI from Rust

## Nix Integration

cargo-ats3 should live in its own repository with its own `flake.nix`. The ATS development flake can then import it as an input.

### cargo-ats3 Repository Structure

```
cargo-ats3/
├── flake.nix           # Standalone flake
├── flake.lock
├── Cargo.toml
├── Cargo.lock
├── src/
│   ├── main.rs
│   ├── manifest.rs     # Ats3.toml parsing
│   ├── resolve.rs      # Dependency resolution
│   ├── build/
│   │   ├── mod.rs
│   │   ├── js.rs       # JS backend
│   │   └── python.rs   # Python backend
│   ├── registry/
│   │   ├── mod.rs
│   │   └── client.rs
│   └── commands/
│       ├── mod.rs
│       ├── new.rs
│       ├── build.rs
│       ├── add.rs
│       └── publish.rs
└── tests/
```

### cargo-ats3/flake.nix

```nix
{
  description = "Cargo subcommand for ATS3 projects";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = { self, nixpkgs, flake-utils, rust-overlay }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ rust-overlay.overlays.default ];
        };
        rust = pkgs.rust-bin.stable.latest.default;
      in {
        packages.default = pkgs.rustPlatform.buildRustPackage {
          pname = "cargo-ats3";
          version = "0.1.0";
          src = ./.;
          cargoLock.lockFile = ./Cargo.lock;
        };

        devShells.default = pkgs.mkShell {
          buildInputs = [ rust pkgs.cargo-watch ];
        };
      }
    );
}
```

### Importing in ATS Flake

The main ATS development flake imports cargo-ats3 as a submodule or flake input:

**Option A: Git Submodule (recommended for development)**
```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
    xatshome = { url = "github:githwxi/XATSHOME"; flake = false; };
    ats-xanadu = { url = "github:githwxi/ATS-Xanadu"; flake = false; };

    # Import cargo-ats3 from submodule
    cargo-ats3 = { url = "path:./cargo-ats3"; };
  };

  outputs = { self, nixpkgs, flake-utils, xatshome, ats-xanadu, cargo-ats3 }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            cargo-ats3.packages.${system}.default
            # ... xats2js, xats2py, etc.
          ];
        };
      }
    );
}
```

**Option B: GitHub Flake Input (for users)**
```nix
{
  inputs = {
    cargo-ats3 = { url = "github:ats-lang/cargo-ats3"; };
    # ...
  };
  # ...
}
```

### Development Workflow

```bash
# Clone with submodule
git clone --recursive https://github.com/user/ATS
cd ATS

# Or add submodule to existing repo
git submodule add https://github.com/ats-lang/cargo-ats3 cargo-ats3
git submodule update --init

# Enter dev shell (includes cargo-ats3)
nix develop

# Work on cargo-ats3 itself
cd cargo-ats3
nix develop  # cargo-ats3's own dev shell
cargo build
cargo test
```

## Implementation Roadmap

### Phase 1: JavaScript Backend (MVP)

- [ ] `cargo ats3 new` / `cargo ats3 init`
- [ ] `Ats3.toml` parsing
- [ ] `cargo ats3 build --backend js`
- [ ] Basic dependency resolution (local + git)
- [ ] `package.json` generation
- [ ] `cargo ats3 add`
- [ ] Nix flake integration

**Deliverable:** Complete JS workflow

### Phase 2: Python + Registry

- [ ] `cargo ats3 build --backend python`
- [ ] `pyproject.toml` / wheel generation
- [ ] `Ats3.lock` implementation
- [ ] ats3-registry HTTP implementation
- [ ] `cargo ats3 publish --backend js`
- [ ] `cargo ats3 login`

**Deliverable:** Multi-backend + central registry

### Phase 3: Publishing & Polish

- [ ] `cargo ats3 publish --backend python`
- [ ] `cargo ats3 publish --all-backends`
- [ ] TypeScript definition generation
- [ ] Improved error messages
- [ ] Documentation

**Deliverable:** Production-ready publishing

### Phase 4: C FFI & Advanced

- [ ] `cargo ats3 build --backend c`
- [ ] C header generation
- [ ] Rust FFI support (`*-sys` crates)
- [ ] Native compilation
- [ ] IDE/LSP integration

**Deliverable:** Full Rust interop

## Rust Crates for Implementation

cargo-ats3 will leverage existing Rust ecosystem crates wherever possible, including several crates published by the Cargo team itself.

### Official Cargo Crates (Directly Reusable)

These crates are published by the rust-lang/cargo project and designed for external use:

| Crate | Purpose | Reusability |
|-------|---------|-------------|
| `cargo-util-schemas` | Low-level schema types for TOML parsing, manifest validation | Excellent |
| `cargo-util` | Miscellaneous utilities (file ops, validation, progress bars) | Good |
| `cargo-platform` | Target platform representation and handling | Excellent |
| `cargo-credential` | Credential helper interface for private registries | Excellent |
| `home` | Cross-platform home directory detection (shared with rustup) | Excellent |

### Cargo-Compatible Third-Party Crates

| Crate | Purpose | Notes |
|-------|---------|-------|
| `cargo_metadata` | Parse `cargo metadata` JSON output | Recommended by Cargo docs, 126M+ downloads |
| `cargo_toml` | Parse/manipulate Cargo.toml files | Standalone, no cargo invocation needed |

### Core Dependencies

| Category | Crate | Purpose |
|----------|-------|---------|
| **Manifest Parsing** | `toml` + `serde` | Parse and serialize `Ats3.toml` |
| **Manifest Editing** | `toml_edit` | Preserve formatting when modifying manifests |
| **CLI Framework** | `clap` | Command-line argument parsing with derive macros |
| **Version Handling** | `semver` | Parse and compare semantic versions |
| **Dependency Resolution** | `pubgrub` | SAT-solver based resolution (being integrated into Cargo) |
| **Version Bridging** | `semver-pubgrub` | Bridge `semver` ranges to `pubgrub` constraints |

**Note:** `pubgrub` is actively being integrated into Cargo itself as a 2024 Rust Project Goal, making it the future standard for dependency resolution in the Cargo ecosystem.

### Registry & Network

| Category | Crate | Purpose |
|----------|-------|---------|
| **Registry Client** | `tame-index` | Interact with sparse HTTP registries (RFC 2141 compatible) |
| **Registry Fallback** | `crates-index` | Git-based registry access if needed |
| **HTTP Client** | `ureq` | Blocking HTTP client (simpler than async for CLI) |
| **Checksums** | `sha2` | SHA-256 checksums for package verification |

### Package Generation

| Category | Crate | Purpose |
|----------|-------|---------|
| **Archive Creation** | `tar` + `flate2` | Create `.tar.gz` packages |
| **Python Wheels** | Reference `maturin` | Wheel generation patterns for Python backend |
| **JSON** | `serde_json` | Generate `package.json` for JS backend |

### Utility

| Category | Crate | Purpose |
|----------|-------|---------|
| **Error Handling** | `anyhow` / `thiserror` | Ergonomic error handling |
| **Filesystem** | `walkdir` | Recursive directory traversal |
| **Process** | `std::process` | Invoke xats2js/xats2py compilers |
| **Paths** | `home` | Home directory (official Cargo crate) |

### Cargo Internals (Reference Only)

These are **not** published as standalone crates but serve as reference implementations:

| Module | Location | Use Case |
|--------|----------|----------|
| Dependency Resolver | `src/cargo/core/resolver/` | Understand resolution algorithms |
| Registry Sources | `src/cargo/sources/registry/` | Multi-registry architecture patterns |
| HTTP Registry | `src/cargo/sources/registry/http_remote.rs` | ETag/Last-Modified caching |

### Example Cargo.toml

```toml
[package]
name = "cargo-ats3"
version = "0.1.0"
edition = "2021"

[dependencies]
# CLI
clap = { version = "4", features = ["derive"] }

# Official Cargo crates
cargo-util-schemas = "0.7"
cargo-platform = "0.1"
home = "0.5"

# Manifest handling
toml = "0.8"
toml_edit = "0.22"
serde = { version = "1", features = ["derive"] }
serde_json = "1"

# Version resolution
semver = "1"
pubgrub = "0.2"
semver-pubgrub = "0.4"

# Registry
tame-index = "0.15"
ureq = "2"
sha2 = "0.10"

# Packaging
tar = "0.4"
flate2 = "1"

# Utility
anyhow = "1"
thiserror = "2"
walkdir = "2"
```

## Registry Architecture

### Reusing Rust Ecosystem Patterns

The ats3-registry can adopt Cargo's **sparse HTTP protocol** (RFC 2141), which is simpler to implement and operate than the original git-based approach.

**Key benefits:**
- Well-documented specification
- `tame-index` crate provides client implementation
- CDN-friendly (static files)
- No git dependency on client side

### Reference Implementations

| Project | Language | Notes |
|---------|----------|-------|
| **Meuse** | Clojure | Open-source Cargo registry server |
| **Kellnr** | Rust | Self-hosted registry with web UI |
| **Cloudsmith** | SaaS | Commercial, supports multiple package types |

For MVP, a static file server (S3, GitHub Pages, or Cloudflare R2) can serve the sparse index format without custom backend code.

### Index Format (Sparse HTTP)

```
registry.ats-lang.org/
├── config.json                    # Registry metadata
└── index/
    └── co/
        └── ll/
            └── collections        # Package metadata JSON
```

**config.json:**
```json
{
  "dl": "https://registry.ats-lang.org/crates/{crate}/{version}/download",
  "api": "https://registry.ats-lang.org/api/v1"
}
```

**Package metadata (collections):**
```json
{"name":"collections","vers":"0.3.0","deps":[{"name":"prelude","req":"^0.2"}],"cksum":"abc123..."}
```

## Comparison to Existing Tools

| Feature | cargo-pgrx | wasm-pack | maturin | cargo-ats3 |
|---------|-----------|-----------|---------|------------|
| Project scaffold | Yes | Yes | Yes | Yes |
| Multi-target | No | No | No | **Yes** |
| Custom manifest | No | No | No | **Yes** (Ats3.toml) |
| Registry | PostgreSQL | warg | PyPI | **ats3-registry** |
| npm publish | No | Yes | No | **Yes** |
| PyPI publish | No | No | Yes | **Yes** |

## Open Questions

1. **TypeScript types**: How to infer `.d.ts` from ATS3 signatures?
2. **Testing**: Cross-backend test framework?
3. **Workspaces**: Support for monorepos?
4. **Versioning**: ATS3 language edition strategy?
5. **Binary distribution**: Pre-compiled packages in registry?

## Success Criteria

An ATS3 developer should be able to:

1. Create a project in seconds: `cargo ats3 new my-lib`
2. Add dependencies naturally: `cargo ats3 add collections`
3. Build for any target: `cargo ats3 build --backend js`
4. Publish anywhere: `cargo ats3 publish --all-backends`
5. Share packages via registry
6. Integrate with Rust when C backend is available

The experience should feel as natural as using Cargo for Rust.
