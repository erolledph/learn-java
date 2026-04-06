# ☕ Java Learning Hub

Learn Java with an interactive AI tutor - **Java runs directly in your browser!**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/erolledph/learn-java)](https://github.com/erolledph/learn-java/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/erolledph/learn-java)](https://github.com/erolledph/learn-java/issues)

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
- Click **Run** to execute Java code
- Uses Judge0 CE API for compilation
- No downloads or installations needed!

### 📚 53 Interactive Lessons
- 8 progressive modules (Basics → Advanced)
- W3Schools-based curriculum
- Progress tracking with localStorage

### 🎨 Beautiful Themes
- **Dark** - Deep blue/purple tones
- **Light** - Clean white background
- **Night** - Warm amber for easy nighttime reading

### 📱 Mobile-Friendly
- Fully responsive design
- Touch-friendly resize handles
- Works on tablets and phones

### ♿ Accessible
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Focus indicators

### 🚀 PWA Ready
- Offline support (service worker)
- Install to home screen
- Fast loading

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
├── sw.js              # Service worker for offline support
├── manifest.json       # PWA manifest
├── package.json        # Dependencies and scripts
├── AGENTS.md           # Agent documentation
└── java rerefence/     # W3Schools source materials
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

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl + Enter | Run code |
| Tab | Indent |
| Escape | Close modals |

## License

MIT License - feel free to use for learning!

---

**Happy Learning!** ☕🚀
