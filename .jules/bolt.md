## 2026-04-07 - Cache curriculum navigation indices
**Learning:** The application's global `state` in `app.js` tracked navigation context via `currentLesson` and `currentModule` but lacked their respective indices (`currentLessonIndex`, `currentModuleIndex`). This led to inefficient O(N) nested array lookups (e.g., `findIndex`) in `previousLesson`, `nextLesson`, and `updateNavigationButtons` across the entire `JAVA_CURRICULUM` on every navigation event.
**Action:** When tracking global state for nested list items, always cache their indices alongside the objects to enable O(1) state lookups and avoid redundant traversals.
## 2026-04-12 - Remove layout-thrashing manual DOM syntax highlighting
**Learning:** The application was manually applying syntax highlighting colors via DOM manipulation (`applySyntaxColors`) on every keystroke in CodeMirror, which caused massive layout thrashing and overrode the native CSS light/dark themes already defined in `styles.css`.
**Action:** Rely on native CSS classes (like `.cm-keyword`) provided by CodeMirror themes for syntax highlighting. Avoid redundant JS-based DOM styling loops attached to editor keystroke events.
