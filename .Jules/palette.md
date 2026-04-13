## 2026-04-07 - Async Button Loading State Pattern
**Learning:** For async operations like code execution, simply changing text isn't enough; the button must be explicitly disabled to prevent multiple submissions, and visual feedback (opacity/cursor) is required for accessibility.
**Action:** Always add `:disabled` CSS states alongside JavaScript logic when implementing async loading buttons.

## 2026-04-09 - Focus Management in Async Workflows
**Learning:** When disabling inputs during async tasks, restoring focus `focus()` to the input after the task completes is critical for seamless keyboard navigation, otherwise users lose their context.
**Action:** Always include `element.focus()` in the finally or success block when re-enabling previously disabled inputs.
