## 2026-04-07 - Async Button Loading State Pattern
**Learning:** For async operations like code execution, simply changing text isn't enough; the button must be explicitly disabled to prevent multiple submissions, and visual feedback (opacity/cursor) is required for accessibility.
**Action:** Always add `:disabled` CSS states alongside JavaScript logic when implementing async loading buttons.

## 2026-04-08 - Async Chat Input/Submit Disabling Pattern
**Learning:** During async chat operations (like waiting for an AI response), keeping the input and submit button enabled allows multiple submissions and can lead to focus state issues when the response returns. Users can be confused about whether their message was sent if they don't see a clear disabled state.
**Action:** Always disable both the text input area and the send button during async chat processing, update their visual disabled states (`cursor: not-allowed`, lowered opacity), and explicitly restore `focus()` to the input upon completion to maintain keyboard navigation flow.
