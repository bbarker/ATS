---
name: ats-note
description: Save what was just discussed as an ATS3 learning note in docs/notes/ for later review with /ats:review.
user-invocable: true
disable-model-invocation: true
allowed-tools: Read, Write, Glob
---

# Save ATS3 Learning Note

Create a new learning note based on what was just discussed in this
conversation. The note should be saved to `docs/notes/` in a format
suitable for review with `/ats:review`.

## Steps

1. Look at the recent conversation context to identify the ATS3 concept,
   technique, or insight that was discussed.
2. If `$ARGUMENTS` is provided, use it as a hint for what to capture
   (e.g. `/ats:note pattern matching` focuses the note on pattern matching).
3. Check existing files in `docs/notes/` with Glob to avoid duplicating
   a note that already covers the same concept. If a closely related note
   exists, ask the user whether to update it or create a new one.
4. Write the note file.

## File Naming

Use lowercase kebab-case based on the topic:
`docs/notes/<topic>.md`

Examples:
- `docs/notes/val-bindings.md`
- `docs/notes/pattern-matching-exhaustiveness.md`
- `docs/notes/xats2js-runtime.md`

## Note Format

Every note MUST follow this exact structure so `/ats:review` can parse it:

```markdown
# <Concise title>

## Topic
<one-line category or tags, e.g. "syntax, basics" or "dependent types, advanced">

## Difficulty
<beginner | intermediate | advanced>

## Question
<A clear, specific question that tests understanding of this concept.
 Should be answerable in a few sentences without looking anything up.>

## Answer
<The expected answer. Be precise but concise. Include the "why" not
 just the "what".>

## Example
<A short ATS3 code example demonstrating the concept. Include comments
 to highlight the key point. Omit this section if the concept is purely
 conceptual and code wouldn't help.>
```

## Guidelines

- Write questions that test *understanding*, not rote memorization.
  "What does X do?" is weaker than "Why would you use X instead of Y?"
  or "What happens if you omit X in this situation?"
- Keep examples minimal — just enough to illustrate the point.
- Difficulty should reflect how deep into ATS3 you need to be to
  understand the concept:
  - **beginner**: basic syntax, simple programs, core workflow
  - **intermediate**: type system features, backends, common patterns
  - **advanced**: dependent types, proofs, template metaprogramming
- After saving, confirm to the user what was saved and where.
