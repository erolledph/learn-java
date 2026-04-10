## 2026-04-07 - Async Button Loading State Pattern
**Learning:** For async operations like code execution, simply changing text isn't enough; the button must be explicitly disabled to prevent multiple submissions, and visual feedback (opacity/cursor) is required for accessibility.
**Action:** Always add `:disabled` CSS states alongside JavaScript logic when implementing async loading buttons.
## 2026-04-10 - Adding disabled states to chat input components
**Learning:** Implementing visual indicators (like disabled properties and low opacity) along with explicit focus handling during async AI API queries is a critical accessibility/UX step for conversational interfaces.
**Action:** Ensure all async conversational components (like inputs and send buttons) are disabled during processing and auto-refocused afterward to maintain seamless keyboard navigation.
