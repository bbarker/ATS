# Architecture and Style

Strive to write functional-style, maintainable code while keeping an eye on
performance.

## Staying updated

Use ./update-repos.sh before starting new work; if there are uncommitted
changes call it out so we can handle it.

## Prompt Routing

To reduce context pollution, load only the language prompt(s) relevant to
the task:

- Rust prompt: [WorkPrompt.rust.md](WorkPrompt.rust.md)
- ATS prompt: [WorkPrompt.ats.md](WorkPrompt.ats.md)

Routing rules:

- Load Rust prompt when touching `cargo-ats3/**`, `*.rs`, `Cargo.toml`, or
  `Cargo.lock`.
- Load ATS prompt when touching `ATS-Xanadu/**`, `ATS-Postiats/**`,
  `XATSHOME/**`, or `*.dats` / `*.sats` / `*.hats`.
- If both ecosystems are involved, load both prompts.

# General Reminders and Instructions

Be sure to add tests as you go to confirm functionality. When adding new
functionality, prefer editing existing functions and wiring into the existing
structure rather than creating modified copies.

If doing new work, add more granular lists of tasks as checkboxes under each
feature in the plan markdown file and check them off once
completed and tested.
