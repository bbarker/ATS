# Rust Prompt

Follow standard Rust idioms, although prefer a functional style where possible.
Use `clippy` warnings as guidance.

Prefer `thiserror` for library-facing error types and `anyhow` for
CLI/application-level error handling.

Avoid `unwrap()` and `expect()` in library code; use `?` propagation instead.
`unwrap()` is acceptable in tests.

Use newtypes when wrapping primitive types that are passed (or likely to be
passed) as arguments to functions with other arguments of the same primitive
type to avoid confusion.

Avoid single-character variable names; 2 characters is OK if the meaning is
obvious from context.

Avoid unsafe Rust at all costs unless absolutely necessary; similarly for
`todo!()` macros and similar footguns.

## cargo-ats3 Notes

The `cargo-ats3` tool lives in its own subdirectory/submodule. The ATS
development flake (`flake.nix`) imports it so that `nix develop` puts
`cargo-ats3` on `$PATH` alongside the ATS3 compilers.

When working on `cargo-ats3` (Rust), use standard `cargo` commands:

- `cargo check` — fast type checking
- `cargo test` — run the test suite
- `cargo clippy` — lint
- `cargo run -- ats3 <subcommand>` — test the CLI locally
