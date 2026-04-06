# Java Learning Hub - Documentation

## Overview

Java Learning Hub is an interactive web-based platform for learning Java programming. It combines a code editor, AI-powered tutoring via Groq, and a structured curriculum with **direct Java execution in the browser**.

## Key Features

### ☕ Direct Java Execution
- Java code runs directly in your browser
- Uses online compiler API (Judge0)
- No Java installation required!
- Fast and reliable execution

### 🤖 AI Tutor (Byte)
- Powered by Groq API (Llama 3.3 70B model)
- Context-aware responses based on current lesson
- Interactive teaching style with examples
- Helps debug code and explains concepts

### 💻 Code Editor
- Monaco-style CodeMirror editor
- Java syntax highlighting
- Auto-indentation
- Line numbers
- Keyboard shortcuts

### 📚 Learning Curriculum
- 55 comprehensive lessons
- 10 modules from basics to advanced
- Progress tracking
- Practice exercises

## Architecture

### Java Execution Flow

```
User clicks Run → Code sent to API → Compiled & Executed → Output displayed
```

The app uses the Judge0 API for compilation and execution:
- Language ID: 62 (Java)
- Timeout: 10 seconds
- Memory limit: 128MB

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
├── styles.css       # Dark theme styling
├── app.js           # Core application logic
├── groq-service.js  # Groq API integration
├── lessons.js       # 55 lesson curriculum
├── java-runner.js   # Optional local runner
├── AGENTS.md        # This documentation
└── README.md        # User guide
```

## API Configuration

### Groq API
- **Model**: `llama-3.3-70b-versatile`
- **Rate Limits**: 14,000 requests/day, 30 requests/minute
- **API Key**: Stored in localStorage

### Java Compiler API
- **Primary**: Judge0 API (api.judge0.com)
- **Fallback**: TIO.run API

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
