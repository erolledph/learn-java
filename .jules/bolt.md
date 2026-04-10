## 2026-04-07 - Cache curriculum navigation indices
**Learning:** The application's global `state` in `app.js` tracked navigation context via `currentLesson` and `currentModule` but lacked their respective indices (`currentLessonIndex`, `currentModuleIndex`). This led to inefficient O(N) nested array lookups (e.g., `findIndex`) in `previousLesson`, `nextLesson`, and `updateNavigationButtons` across the entire `JAVA_CURRICULUM` on every navigation event.
**Action:** When tracking global state for nested list items, always cache their indices alongside the objects to enable O(1) state lookups and avoid redundant traversals.

## 2026-04-07 - CodeMirror manual DOM manipulation thrashing
**Learning:** The application attempted to apply syntax highlighting by running `querySelectorAll` across hundreds of CodeMirror elements to inject inline styles on every single keystroke (`change` event). This bypassed CodeMirror's built-in CSS styling mechanism and caused severe layout thrashing and high main thread blocking time.
**Action:** Always rely on native CSS classes provided by third-party editor libraries (like `.cm-keyword` in `styles.css`) for syntax highlighting instead of performing manual DOM manipulations on editor changes.
