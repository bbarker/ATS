---
name: ats-review
description: Anki-style spaced review of ATS3 learning notes. Quizzes the user on previously saved notes from docs/notes/.
user-invocable: true
disable-model-invocation: true
allowed-tools: Glob, Read
---

# ATS3 Review Session

You are running an Anki-style review session for ATS3 learning notes.

## Setup

1. Read all `.md` files in `docs/notes/` using Glob and Read.
2. If no notes exist, tell the user there's nothing to review yet and
   suggest `/ats:note` to save some.
3. Parse each note file. Notes have this structure:
   - A `# Title` heading
   - A `## Topic` line with tags/category
   - A `## Question` section (what to quiz)
   - A `## Answer` section (the expected answer)
   - Optionally a `## Example` section with code
   - A `## Difficulty` line: `beginner`, `intermediate`, or `advanced`

## Review Loop

1. Select a note at random (or, if `$ARGUMENTS` is provided, filter to notes
   whose title or topic matches that argument).
2. Show the user the **Question** only. Do NOT show the answer yet.
3. Wait for the user to attempt an answer.
4. After the user responds, reveal the **Answer** and **Example** (if any).
5. Rate their response:
   - **Correct**: They got the key concept right (phrasing doesn't need to match exactly).
   - **Partial**: They had the right idea but missed important details.
   - **Missed**: They didn't know or got it wrong.
6. Give a brief explanation of what they got right or wrong, referencing the
   note's answer and example.
7. Ask if they want another question or want to stop.

## Style

- Be encouraging but honest about mistakes.
- When the user gets something wrong, explain *why* the correct answer is
  what it is — don't just state it.
- If the user's answer reveals a deeper misunderstanding, briefly address it.
- Keep the tone conversational, like a study partner.

## Arguments

- No arguments: review all notes randomly.
- `$ARGUMENTS` provided: filter to notes matching that topic/keyword.
  E.g. `/ats:review pattern matching` reviews only pattern-matching notes.
