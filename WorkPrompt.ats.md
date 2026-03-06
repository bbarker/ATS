# ATS Prompt

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

## Compiler Notes

The ATS3 compilers (`xats2js`, `xats2py`) are expected on `$PATH` or
located via `$XATSHOME`. The Nix dev shell provides these automatically.
