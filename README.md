# ☕ Java Learning Hub

Learn Java with an interactive AI tutor - **Java runs directly in your browser!**

## Quick Start

```bash
npm install
npm run dev
```

Then open **http://localhost:8080** in your browser.

## Features

### 🤖 AI Tutor (Byte)
- Powered by Groq API (Llama 3.3 70B model)
- Context-aware responses based on current lesson
- Explains Java concepts and helps debug code

### 💻 Run Java in Browser
- Click **▶️ Run** to execute Java code
- Uses Judge0 CE API for compilation
- No downloads or installations needed!

### 📚 53 Interactive Lessons
- 8 progressive modules (Basics → Advanced)
- W3Schools-based curriculum
- Progress tracking with localStorage

## Development

### Run the Server
```bash
npm run dev    # or: node server.js
```

The app runs at **http://localhost:8080**

### Project Structure
```
Java/
├── index.html          # Main application
├── styles.css          # Styling (Dracula theme, syntax highlighting)
├── app.js              # Core logic (lessons, chat, resize, CodeMirror)
├── lessons.js          # 53 lessons across 8 modules
├── groq-service.js     # Groq API integration
├── server.js           # Node.js static server
├── package.json        # Dependencies and scripts
├── AGENTS.md           # Agent documentation
└── java rerefence/     # W3Schools source materials (~489 HTML files)
```

## Architecture

### State Management
```javascript
const state = {
    currentLesson: null,      // Active lesson object
    editor: null,             // CodeMirror instance
    isAITyping: false,        // AI typing state
    progress: {
        completedLessons: [],
        totalLessons: 53
    }
};
```

### Key Functions
- `runCode()` - Executes Java via Judge0 API
- `sendChatMessage()` - Sends to Groq AI tutor
- `loadLesson(lesson)` - Loads lesson content
- `clearHistory()` - Clears chat on lesson switch

### API Configuration
- **Groq**: `llama-3.3-70b-versatile` model, 14k requests/day
- **Judge0**: `https://ce.judge0.com`, Language ID 62 (Java)

## Discoveries & History

1. **Direct file:// vs server** - Opening index.html directly causes CORS issues with CDN resources. Must use `npm run dev`
2. **Array mutation issue** - Using `arr = state.progress.completedLessons` local variable fixed the mark/unmark lesson completion bug
3. **Chat history accumulation** - Cleared chat history when switching lessons to reduce API token usage
4. **API key storage** - Uses localStorage, not hardcoded

## Accomplished

- ✅ 53 lessons across 8 modules based on W3Schools
- ✅ CodeMirror editor with Dracula-style syntax highlighting
- ✅ Groq API integration for AI tutoring
- ✅ Judge0 API for Java code execution
- ✅ Dark theme with colorful syntax colors
- ✅ Progress tracking with localStorage
- ✅ Settings modal for API key input
- ✅ Lesson navigation (prev/next buttons)

## Pending Tasks

- 🔧 Fix CodeMirror syntax highlighting - Keywords showing as plain white, only strings are green
- 🔧 Test lesson navigation end-to-end
- 🔧 Verify code execution with various Java programs

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl + Enter | Run code |
| Tab | Indent |
| Escape | Close modals |

## License

MIT License
