## 2026-04-07 - Async Button Loading State Pattern
**Learning:** For async operations like code execution, simply changing text isn't enough; the button must be explicitly disabled to prevent multiple submissions, and visual feedback (opacity/cursor) is required for accessibility.
**Action:** Always add `:disabled` CSS states alongside JavaScript logic when implementing async loading buttons.
