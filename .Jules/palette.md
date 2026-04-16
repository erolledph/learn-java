## 2026-04-07 - Async Button Loading State Pattern
**Learning:** For async operations like code execution, simply changing text isn't enough; the button must be explicitly disabled to prevent multiple submissions, and visual feedback (opacity/cursor) is required for accessibility.
**Action:** Always add `:disabled` CSS states alongside JavaScript logic when implementing async loading buttons.
## 2026-04-10 - Adding disabled states to chat input components
**Learning:** Implementing visual indicators (like disabled properties and low opacity) along with explicit focus handling during async AI API queries is a critical accessibility/UX step for conversational interfaces.
**Action:** Ensure all async conversational components (like inputs and send buttons) are disabled during processing and auto-refocused afterward to maintain seamless keyboard navigation.
## 2024-05-15 - Chat UI Loading State Pattern
**Learning:** During asynchronous AI text generation, simply hiding the typing indicator is not enough. The associated chat input and send button must be explicitly disabled via JS and CSS to prevent multiple submissions, provide visual feedback, and maintain proper accessibility flow. Crucially, focus must be programmatically returned to the input element once the asynchronous operation finishes so users can continue typing smoothly.
**Action:** Always disable text inputs and submit buttons during chat API requests, use `:disabled` pseudo-class for visual styling, and restore focus (`element.focus()`) to the primary input after re-enabling.
## 2024-04-13 - Chat Input Disabled State Pattern
**Learning:** During async operations, ensuring elements like textareas and submit buttons are explicitly disabled enhances accessibility by providing clear visual feedback via `cursor: not-allowed` and reduced opacity, and restoring `focus()` immediately afterwards keeps keyboard navigation seamless.
**Action:** Always apply `:disabled` styles alongside element-level disabling and explicit refocusing for all async inputs to maintain smooth user experiences.
## 2026-04-16 - Custom Mutually Exclusive Button Groups Accessibility
**Learning:** When using custom UI elements (like buttons instead of `<input type="radio">`) for mutually exclusive selection groups (like a theme selector), screen readers need explicit ARIA roles to understand the relationship. Without these, options appear as disconnected buttons.
**Action:** Always wrap custom mutually exclusive options in a `role="radiogroup"` container (with an `aria-labelledby` linking to the group's label), and assign `role="radio"` with dynamically updated `aria-checked="true/false"` via JS for the individual options.
