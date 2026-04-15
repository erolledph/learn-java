---
name: add-or-improve-disabled-loading-state-ui
description: Workflow command scaffold for add-or-improve-disabled-loading-state-ui in learn-java.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-improve-disabled-loading-state-ui

Use this workflow when working on **add-or-improve-disabled-loading-state-ui** in `learn-java`.

## Goal

Adds or improves disabled and loading states for interactive UI elements (chat input, send button, run button, navigation buttons) to enhance UX and accessibility.

## Common Files

- `app.js`
- `styles.css`
- `.Jules/palette.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update JavaScript logic to disable/enable relevant buttons or inputs during async operations
- Modify or add CSS classes/selectors for disabled and loading visual states
- Optionally update documentation markdown (e.g., .Jules/palette.md) to describe the UI/UX change

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.