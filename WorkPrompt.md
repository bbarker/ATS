# Architecture and Style

Strive to write functional-style, maintainable code while keeping an eye on
performance.

## Rust

Follow standard Rust idioms. Use `clippy` warnings as guidance.

Prefer `thiserror` for library-facing error types and `anyhow` for
CLI/application-level error handling. Avoid `unwrap()` and `expect()` in
library code; use `?` propagation instead. `unwrap()` is acceptable in tests.

Use newtypes when wrapping primitive types that are passed (or likely to be
passed) as arguments to functions with other arguments of the same primitive
type to avoid confusion.

Avoid single-character variable names; 2 characters is OK if the meaning is
obvious from context.

## ATS3

ATS3 source files use `.dats` (dynamic) and `.sats` (static/signature)
extensions. Include files use `.hats`. When writing ATS3 template code
(e.g. for `cargo ats3 new`), keep it minimal and idiomatic.

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
