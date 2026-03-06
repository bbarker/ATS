# Architecture and Style

Strive to write functional-style, maintainable code while keeping an eye on
performance.

## Staying updated

Use ./update-repos.sh before starting new work; if there are uncomitted
changes call it out so we can handle it.

## Rust

Follow standard Rust idioms, although prefer a functional style
where possible. Use `clippy` warnings as guidance.

Prefer `thiserror` for library-facing error types and `anyhow` for
CLI/application-level error handling. Avoid `unwrap()` and `expect()` in
library code; use `?` propagation instead. `unwrap()` is acceptable in tests.

Use newtypes when wrapping primitive types that are passed (or likely to be
passed) as arguments to functions with other arguments of the same primitive
type to avoid confusion.

Avoid single-character variable names; 2 characters is OK if the meaning is
obvious from context.

Avoid unsafe Rust at all costs unless absolutenly necessary; similarly for
todo!() macros and similar footgun.

## ATS3

ATS3 source files use `.dats` (dynamic) and `.sats` (static/signature)
extensions. Include files use `.hats`. When writing ATS3 template code
(e.g. for `cargo ats3 new`), keep it minimal and idiomatic.

Treat the following as ATS equivalents of Rust `unsafe` / `todo!` footguns;
avoid them unless absolutely necessary, and document invariants when used:

- Unsafe modules: `prelude/SATS/unsfx00.sats`,
  `prelude/SATS/unsafe.sats`, `srcgen1/prelude/SATS/unsafex.sats`
- Unsafe casts/pointer primitives: `fcast`, `castxy`/`castyx`, `ptrcast`,
  and `$UN.*ptr_*`
- Raw partial APIs (especially `*$raw`), e.g. `gseq_head$raw`,
  `gseq_get$at$raw`, `gasq_*$raw`
- FFI escape hatches outside explicit backend boundaries: `#extern`,
  `$extnam`, `$extval`
- Proof escape hatches in normal runtime code: `praxi` and unchecked
  assumptions

Also avoid shipping ATS code with todo-like placeholders:

- `TODO`/`FIXME`/`unimplemented` paths
- `assertloc(false)`, `abort()`, or `exit(1)` as fallback control flow
- Stub implementations that only `$raise UndefinedExn`/`SubscriptExn`
  where real behavior is expected

Prefer total APIs (`$opt` variants), explicit error handling, and checked
preconditions.

# General Reminders and Instructions

Be sure to add tests as you go to confirm functionality. When adding new
functionality, prefer editing existing functions and wiring into the existing
structure rather than creating modified copies.

If doing new work, add more granular lists of tasks as checkboxes under each
feature in the plan markdown file and check them off once
completed and tested.

The `cargo-ats3` tool lives in its own subdirectory/submodule. The ATS
development flake (`flake.nix`) imports it so that `nix develop` puts
`cargo-ats3` on `$PATH` alongside the ATS3 compilers.

# Important Notes

When working on `cargo-ats3` (Rust), use standard `cargo` commands:
- `cargo check` — fast type checking
- `cargo test` — run the test suite
- `cargo clippy` — lint
- `cargo run -- ats3 <subcommand>` — test the CLI locally

The ATS3 compilers (`xats2js`, `xats2py`) are expected on `$PATH` or
located via `$XATSHOME`. The Nix dev shell provides these automatically.
