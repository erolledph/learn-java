## 2026-04-07 - Async Button Loading State Pattern
**Learning:** For async operations like code execution, simply changing text isn't enough; the button must be explicitly disabled to prevent multiple submissions, and visual feedback (opacity/cursor) is required for accessibility.
**Action:** Always add `:disabled` CSS states alongside JavaScript logic when implementing async loading buttons.

## 2026-04-07 - Async Input Loading State Pattern
**Learning:** For async operations like chat submissions, simply showing a typing indicator isn't enough; the textarea and send button must be explicitly disabled via JS and CSS to prevent multiple submissions and provide visual feedback for accessibility. Restoring `focus()` after the loading state is also critical to keep the user's workflow seamless.
**Action:** Always add `:disabled` CSS states, explicitly toggle the `disabled` property via JS, and re-apply `focus()` on inputs when implementing async submission patterns.
