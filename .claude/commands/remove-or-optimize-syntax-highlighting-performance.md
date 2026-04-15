---
name: remove-or-optimize-syntax-highlighting-performance
description: Workflow command scaffold for remove-or-optimize-syntax-highlighting-performance in learn-java.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /remove-or-optimize-syntax-highlighting-performance

Use this workflow when working on **remove-or-optimize-syntax-highlighting-performance** in `learn-java`.

## Goal

Removes or optimizes manual DOM manipulation for syntax highlighting in the code editor to improve typing performance.

## Common Files

- `app.js`
- `.jules/bolt.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Remove or refactor manual DOM manipulation code in app.js related to syntax highlighting
- Update documentation markdown (e.g., .jules/bolt.md) to reflect the change
- Ensure CodeMirror or similar libraries handle syntax highlighting via CSS

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.