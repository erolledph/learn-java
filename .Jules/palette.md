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
## 2026-04-17 - Radiogroup Accessibility Pattern
**Learning:** When using custom UI elements for mutually exclusive selection groups (like theme options), simply relying on visual classes (like `.active`) is not accessible. We must use `role="radiogroup"` on the container, `role="radio"` on the options, and dynamically update `aria-checked` to convey state changes to screen readers.
**Action:** Always wrap custom mutually exclusive selection buttons with a `role="radiogroup"` and apply `role="radio"` along with dynamic `aria-checked` states to individual options.
## 2026-04-17 - Adding tabindex="-1" to Skip-to-Content Targets
**Learning:** When implementing skip-to-content accessibility links, adding the ID target (like `id="main-content"`) to the main container is essential, but it is also best practice for screen reader compatibility to add `tabindex="-1"` to that target element so it programmatically receives focus when the link is activated.
**Action:** Always include `tabindex="-1"` alongside the ID on the target container when implementing skip links.
