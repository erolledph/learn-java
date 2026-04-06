# Java Learning Hub - Documentation

## Overview

Java Learning Hub is an interactive web-based platform for learning Java programming. It combines a code editor, AI-powered tutoring via Groq, and a structured curriculum with **direct Java execution in the browser**.

## Key Features

### ☕ Direct Java Execution
- Java code runs directly in your browser
- Uses Judge0 CE API (ce.judge0.com)
- No Java installation required!
- Fast and reliable execution

### 🤖 AI Tutor (Byte)
- Powered by Groq API (Llama 3.3 70B model)
- Context-aware responses based on current lesson
- Interactive teaching style with examples
- Helps debug code and explains concepts

### 💻 Code Editor
- CodeMirror editor with Dracula theme
- Java syntax highlighting
- Auto-indentation
- Line numbers
- Multiple font family options

### 📚 Learning Curriculum
- 53 comprehensive lessons
- 8 modules from basics to advanced
- Progress tracking with localStorage
- W3Schools-based content

### 🎨 Theme Support
- Dark theme (default)
- Light theme
- Night/Amber theme for easy reading

### 📱 Responsive Design
- Mobile-friendly layout
- Touch-friendly resize handles
- Works on all screen sizes

### ♿ Accessibility
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Focus indicators

### 🚀 PWA
- Service worker for offline support
- Web app manifest
- Installable on home screen

## Architecture

### Java Execution Flow

```
User clicks Run → Code sent to Judge0 API → Compiled & Executed → Output displayed
```

The app uses the Judge0 CE API for compilation and execution:
- Language ID: 62 (Java)
- Timeout: 10 seconds

### AI Tutor Integration

```
User sends message → Groq API → AI response → Displayed in chat
```

The AI tutor has context awareness:
- Knows current lesson
- Can see user's code
- Provides contextual help

## File Structure

```
├── index.html        # Main application
├── styles.css        # Styling with theme support
├── app.js           # Core application logic
├── groq-service.js   # Groq API integration
├── lessons.js       # 53 lesson curriculum
├── server.js        # Node.js static server
├── sw.js            # Service worker for offline
├── manifest.json    # PWA manifest
├── package.json     # Dependencies and scripts
├── AGENTS.md        # This documentation
└── README.md        # User guide
```

## API Configuration

### Groq API
- **Model**: `llama-3.3-70b-versatile`
- **Rate Limits**: 14,000 requests/day, 30 requests/minute
- **API Key**: Stored in localStorage (user provides)

### Java Compiler API
- **Primary**: Judge0 CE API (ce.judge0.com)
- **Language ID**: 62 (Java)

## State Management

```javascript
const state = {
    currentLesson: null,      // Active lesson object
    editor: null,             // CodeMirror instance
    isAITyping: false,       // AI typing state
    progress: {
        completedLessons: [],
        completedExercises: [],
        totalLessons: 55
    }
};
```

## Key Functions

### `runCode()`
Executes Java code using the online compiler API.

### `sendChatMessage()`
Sends user message to AI tutor and displays response.

### `loadLesson(lesson)`
Loads lesson content and updates editor with example code.

### `explainLessonWithAI(lesson)`
Sends lesson context to AI for explanation.

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Dependencies

- **CodeMirror 5.65.16** - Code editor
- **Google Fonts** - JetBrains Mono, Inter
- **Judge0 API** - Online Java compiler

## Development

### Adding New Lessons

Edit `lessons.js`:

```javascript
{
    id: "lesson-id",
    title: "Lesson Title",
    duration: "15 min",
    content: {
        description: "...",
        keyPoints: ["...", "..."]
    },
    example: `public class Main { }`,
    explanation: "..."
}
```

### Modifying AI Prompt

Edit `groq-service.js` system prompt for different teaching styles.

## License

MIT License - Use freely for learning!
