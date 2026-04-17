```markdown
# learn-java Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches best practices and common workflows for contributing to the `learn-java` JavaScript codebase. While the project name suggests Java, the code is written in JavaScript and focuses on building interactive UI elements without a framework. You'll learn how to implement UI features, improve accessibility, optimize performance, and follow the project's coding conventions for maintainable and accessible web applications.

## Coding Conventions

- **File Naming:**  
  Use kebab-case for all filenames.  
  _Example:_  
  ```
  app.js
  styles.css
  code-editor.test.js
  ```

- **Import Style:**  
  Use relative imports for modules.  
  _Example:_  
  ```js
  import { highlightCode } from './utils.js';
  ```

- **Export Style:**  
  Use named exports.  
  _Example:_  
  ```js
  // In utils.js
  export function highlightCode() { ... }
  ```

- **Commit Messages:**  
  - Prefix with `feat` for new features, `perf` for performance improvements.
  - Freeform message after prefix.
  - Average length: ~66 characters.
  _Example:_  
  ```
  feat: add loading state to send button
  perf: optimize syntax highlighting for large files
  ```

## Workflows

### Add or Improve Disabled/Loading State UI
**Trigger:** When you want to prevent user actions during async operations and provide visual feedback.  
**Command:** `/add-disabled-loading-state`

1. Update JavaScript logic in `app.js` to disable/enable relevant buttons or inputs during async operations.
   ```js
   sendButton.disabled = true;
   sendButton.classList.add('loading');
   // ...async operation...
   sendButton.disabled = false;
   sendButton.classList.remove('loading');
   ```
2. Modify or add CSS classes/selectors in `styles.css` for disabled and loading visual states.
   ```css
   .loading {
     opacity: 0.6;
     pointer-events: none;
   }
   ```
3. Optionally update `.Jules/palette.md` to document the UI/UX change.

---

### Remove or Optimize Syntax Highlighting Performance
**Trigger:** When you want to improve editor performance by eliminating redundant or inefficient syntax highlighting logic.  
**Command:** `/optimize-syntax-highlighting`

1. Remove or refactor manual DOM manipulation code in `app.js` related to syntax highlighting.
   ```js
   // Before: manual DOM manipulation for highlighting
   // After: rely on CodeMirror or CSS-based highlighting
   ```
2. Update `.jules/bolt.md` to reflect the change.
3. Ensure syntax highlighting is handled by CodeMirror or similar libraries via CSS.

---

### Add ARIA Labels for Accessibility
**Trigger:** When you want to improve accessibility for interactive elements lacking descriptive labels.  
**Command:** `/add-aria-labels`

1. Edit `index.html` to add or update `aria-label` attributes on relevant buttons.
   ```html
   <button aria-label="Send message">
     <svg><!-- icon --></svg>
   </button>
   ```

---

### Feature or UI Enhancement with Coordinated JS/CSS/HTML
**Trigger:** When you want to add a new UI feature or significantly enhance an existing one.  
**Command:** `/add-ui-feature`

1. Update `app.js` to implement feature logic.
2. Update `styles.css` for related UI changes.
3. Optionally update `index.html` for markup changes.
   ```js
   // app.js
   export function addFeature() { ... }
   ```
   ```css
   /* styles.css */
   .new-feature { ... }
   ```
   ```html
   <!-- index.html -->
   <div class="new-feature"></div>
   ```

## Testing Patterns

- **Test File Naming:**  
  Test files use the pattern `*.test.*` (e.g., `app.test.js`).
- **Framework:**  
  The testing framework is unknown, but tests are colocated with source files or in the same directory.
- **Example:**  
  ```js
  // app.test.js
  import { highlightCode } from './app.js';

  test('highlightCode returns expected output', () => {
    // ...test logic...
  });
  ```

## Commands

| Command                       | Purpose                                                        |
|-------------------------------|----------------------------------------------------------------|
| /add-disabled-loading-state    | Add or improve disabled/loading UI states for async operations |
| /optimize-syntax-highlighting | Remove or optimize syntax highlighting for performance         |
| /add-aria-labels              | Add ARIA labels for accessibility                             |
| /add-ui-feature               | Implement a new feature or UI enhancement                     |
```
