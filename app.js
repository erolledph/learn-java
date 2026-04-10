// ============================================
// Java Learning Hub - Main Application
// ============================================

// Just escape basic HTML - snippet already contains rendered HTML
function highlightJava(code) {
    return code;
}

// Global state
const state = {
    currentLesson: null,
    currentLessonIndex: -1,
    currentModule: null,
    currentModuleIndex: -1,
    currentExercise: null,
    editor: null,
    isAITyping: false,
    isTeachingMode: false,
    teachingStep: 0,
    progress: {
        completedLessons: [],
        completedExercises: [],
        totalLessons: 0,
        totalExercises: 0
    }
};

// DOM Elements
const elements = {
    codeEditor: null,
    lineNumbers: null,
    output: null,
    outputContent: null,
    sidebarLeft: null,
    sidebarRight: null,
    sidebarContent: null,
    sidebarTitle: null,
    chatMessages: null,
    chatInput: null,
    settingsModal: null,
    welcomeModal: null,
    lessonPanel: null,
    lessonContent: null,
    lessonTitle: null,
    progressFill: null,
    progressText: null,
    runCodeBtn: null
};

// Teaching curriculum - Step by step Java learning path
const teachingPath = [
    {
        topic: "Welcome",
        message: `Hi! I'm Byte, your Java tutor! ☕

I'll guide you through learning Java step by step. Let's start with the basics!

**What is Java?**
A popular programming language used in apps, websites, and games. Known for "Write Once, Run Anywhere".

**Our learning path:**
 1. Hello World
 2. Variables & Data Types
 3. Conditions (If/Else)
 4. Loops
 5. Methods
 6. Arrays
 7. Classes & Objects

Click **Run** to execute the code in the editor, then type "next" to continue!`
    },
    {
        topic: "Hello World",
        message: `Your first Java program is ready! 🎉

The code uses \`System.out.println()\` to print text.

**Try this:** Change "Hello, World!" to something else and click **Run**!

Key rules:
- Statements end with \`;\`
- Java is case-sensitive
- Class name must match filename`
    },
    {
        topic: "Variables",
        message: `Variables store data in your program. 📦

\`\`\`java
String name = "Java";   // Text
int age = 21;           // Whole numbers
double price = 19.99;   // Decimals
boolean isActive = true; // true or false
\`\`\`

**Syntax:** \`Type variableName = value;\`

Try modifying the variables in the editor!`
    },
    {
        topic: "Conditions",
        message: `**If/Else** lets programs make decisions! 🔀

\`\`\`java
int age = 18;
if (age >= 18) {
    System.out.println("You can vote!");
} else {
    System.out.println("Too young.");
}
\`\`\`

**Try:** Change \`age\` to 16 and see what happens!`
    },
    {
        topic: "Loops",
        message: `**Loops** repeat code automatically! 🔄

\`\`\`java
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}
\`\`\`

This prints 1, 2, 3, 4, 5 automatically!`
    },
    {
        topic: "Methods",
        message: `**Methods** are reusable blocks of code! 🧩

\`\`\`java
static void greet() {
    System.out.println("Hello!");
}

public static void main(String[] args) {
    greet();  // Call the method
}
\`\`\`

Methods help organize and reuse code!`
    },
    {
        topic: "Summary",
        message: `Congratulations! 🎉 You've completed the Java basics!

**What you've learned:**
✅ Hello World
✅ Variables & Data Types
✅ If/Else Conditions
✅ Loops
✅ Methods

**Next steps:**
- Explore lessons in the sidebar
- Ask me anything about Java!

Keep practicing! 🚀`
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', async () => {
    initializeElements();
    initializeEditor();
    initializeResizePanels();
    loadProgress();
    calculateTotalLessons();
    setupEventListeners();
    initTheme();
    loadThemeFromSettings();
    renderSidebar('lessons');
    updateProgressBar();
    
    // Ensure editor is properly sized after all initialization
    setTimeout(() => {
        if (state.editor) {
            state.editor.setSize("100%", "100%");
            state.editor.refresh();
        }
    }, 100);
    
    // Check if user has seen welcome before
    const hasSeenWelcome = localStorage.getItem('java_hub_welcomed');
    
    if (!hasSeenWelcome) {
        elements.welcomeModal?.classList.add('visible');
        
        const startBtn = document.getElementById('startLearning');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                elements.welcomeModal?.classList.remove('visible');
                localStorage.setItem('java_hub_welcomed', 'true');
                startGuidedLearning();
            });
        }
        
        const browseBtn = document.getElementById('browseLessons');
        if (browseBtn) {
            browseBtn.addEventListener('click', () => {
                elements.welcomeModal?.classList.remove('visible');
                localStorage.setItem('java_hub_welcomed', 'true');
                if (elements.sidebarLeft) elements.sidebarLeft.classList.add('open');
            });
        }
    } else if (!groqService.hasApiKey()) {
        addWelcomeMessage();
    }
    
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered:', registration.scope);
                })
                .catch((error) => {
                    console.log('SW registration failed:', error);
                });
        });
    }
});

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    showToast('An error occurred. Please refresh the page.', 'error');
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason);
    showToast('An error occurred. Please refresh the page.', 'error');
});

// Add welcome message to chat
function addWelcomeMessage() {
    addChatMessage(`Hi! I'm Byte, your Java tutor! ☕

I'll guide you through learning Java step by step. Let's start with the basics!

**What is Java?**
A popular programming language used in apps, websites, and games. Known for "Write Once, Run Anywhere".

**Our learning path:**
- Hello World
- Variables & Data Types
- Conditions (If/Else)
- Loops
- Methods
- Arrays
- Classes & Objects

Click **Run** to execute the code in the editor, then type "next" to continue!`, 'bot');
}

function openChatWindow() {
    const floatingChat = document.getElementById('floatingChat');
    const chatBadge = document.getElementById('chatBadge');
    const chatToggleBtn = document.getElementById('chatToggleBtn');

    if (floatingChat && !floatingChat.classList.contains('visible')) {
        floatingChat.classList.add('visible');
        if (chatBadge) chatBadge.classList.add('hidden');
        if (chatToggleBtn) chatToggleBtn.classList.add('hidden');
    }
    if (elements.chatInput) {
        elements.chatInput.focus();
    }
}

// Start guided learning mode
function startGuidedLearning() {
    state.isTeachingMode = true;
    state.teachingStep = 0;
    loadCodeForStep(0);
    elements.typingIndicator.classList.add('visible');
    
    setTimeout(() => {
        elements.typingIndicator.classList.remove('visible');
        addChatMessage(teachingPath[0].message, 'bot');
    }, 800);
}

// Load code template for each teaching step
function loadCodeForStep(step) {
    const codeTemplates = [
        `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        `public class Main {
    public static void main(String[] args) {
        String name = "Java";
        int version = 21;
        System.out.println("Learning " + name + " " + version);
    }
}`,
        `public class Main {
    public static void main(String[] args) {
        int age = 18;
        if (age >= 18) {
            System.out.println("You can vote!");
        } else {
            System.out.println("Too young.");
        }
    }
}`,
        `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`,
        `public class Main {
    
    static void greet() {
        System.out.println("Hello!");
    }
    
    public static void main(String[] args) {
        greet();
    }
}`,
        `// Congratulations!
public class Main {
    public static void main(String[] args) {
        System.out.println("You've learned Java basics!");
    }
}`
    ];
    
    if (state.editor && codeTemplates[step]) {
        state.editor.setValue(codeTemplates[step]);
    }
}

// Go to next teaching step
function nextTeachingStep() {
    if (state.teachingStep < teachingPath.length - 1) {
        state.teachingStep++;
        loadCodeForStep(state.teachingStep);
        addChatMessage(teachingPath[state.teachingStep].message, 'bot');
        updateTeachingProgress();
    }
}

// Update teaching progress in UI
function updateTeachingProgress() {
    const total = teachingPath.length;
    const current = state.teachingStep + 1;
    const progress = Math.round((current / total) * 100);
    
    if (elements.progressFill) {
        elements.progressFill.style.width = progress + '%';
    }
    if (elements.progressText) {
        elements.progressText.textContent = progress + '%';
    }
}

// Initialize DOM element references
function initializeElements() {
    elements.output = document.getElementById('output');
    elements.outputContent = document.getElementById('outputContent');
    elements.sidebarLeft = document.querySelector('.sidebar');
    elements.sidebarContent = document.getElementById('sidebarContent');
    elements.chatMessages = document.getElementById('chatMessages');
    elements.chatInput = document.getElementById('chatInput');
    elements.settingsModal = document.getElementById('settingsModal');
    elements.welcomeModal = document.getElementById('welcomeModal');
    elements.lessonPanel = document.querySelector('.lesson-panel');
    elements.lessonContent = document.getElementById('lessonContent');
    elements.progressFill = document.getElementById('progressFill');
    elements.progressText = document.getElementById('progressText');
    elements.aiStatus = document.querySelector('.ai-status-text');
    elements.typingIndicator = document.getElementById('typingIndicator');
    elements.runCodeBtn = document.getElementById('runCode');
}

// Initialize CodeMirror editor
function initializeEditor() {
    const editorElement = document.getElementById('codeMirrorEditor');
    
    state.editor = CodeMirror(editorElement, {
        value: getDefaultCode(),
        mode: 'text/x-java',
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        styleActiveLine: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: true,
        autofocus: true,
        gutters: ["CodeMirror-linenumbers"],
        viewportMargin: Infinity
    });
    
    // ⚡ Bolt Optimization: Removed manual applySyntaxColors()
    // Why: It was causing severe layout thrashing by querying and modifying
    // hundreds of DOM elements on every keystroke, overriding native CSS theming.
    // Impact: Typing performance restored, layout thrashing eliminated.
    
    // Set initial size
    state.editor.setSize("100%", "100%");
    state.editor.refresh();
    
    // Refresh editor when window resizes
    window.addEventListener('resize', function() {
        if (state.editor) {
            state.editor.setSize("100%", "100%");
            state.editor.refresh();
        }
    });
    
    // Use ResizeObserver for better resize detection
    if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(function(entries) {
            if (state.editor) {
                setTimeout(function() {
                    state.editor.setSize("100%", "100%");
                    state.editor.refresh();
                }, 0);
            }
        });
        // Observe both the editor element and its parent
        resizeObserver.observe(editorElement);
        resizeObserver.observe(editorElement.parentElement);
    }
    
    // Handle Tab key
    state.editor.setOption('extraKeys', {
        'Tab': function(cm) {
            if (cm.somethingSelected()) {
                cm.indentSelection('add');
            } else {
                var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
                cm.replaceSelection(spaces, 'end');
            }
        },
        'Ctrl-Enter': function(cm) {
            runCode();
        },
        'Ctrl-S': function(cm) {
            saveCode();
        }
    });
    
    // Load saved code
    loadSavedCode();
    
    const firstLesson = JAVA_CURRICULUM.modules[0]?.lessons[0];
    if (firstLesson && !getSavedCode()) {
        loadLesson(firstLesson);
    }
}

// Initialize resizable panels
function initializeResizePanels() {
    const resizerV = document.getElementById('resizeHandleV');
    const resizerH = document.getElementById('resizeHandleH');
    const lessonSection = document.getElementById('lessonSection');
    const editorPanel = document.getElementById('editorPanel');
    const outputPanel = document.getElementById('outputPanel');
    const editorSection = document.getElementById('editorSection');
    
    if (!resizerV || !resizerH || !lessonSection || !editorPanel || !editorSection) {
        console.error('Resize: Missing elements');
        return;
    }
    
    let currentResizer = null;
    let startPos = 0;
    let startSize = 0;
    let isMobile = window.innerWidth <= 768;
    
    // Check if mobile on resize
    window.addEventListener('resize', function() {
        isMobile = window.innerWidth <= 768;
    });
    
    // Load saved sizes
    const saved = localStorage.getItem('panel_sizes');
    if (saved) {
        try {
            const sizes = JSON.parse(saved);
            if (sizes.lessonWidth && !isMobile) lessonSection.style.width = sizes.lessonWidth + 'px';
            if (sizes.lessonHeight && isMobile) lessonSection.style.height = sizes.lessonHeight + 'px';
            if (sizes.outputHeight) {
                if (isMobile) {
                    outputPanel.style.height = sizes.outputHeight + 'px';
                } else {
                    outputPanel.style.flex = '0 0 ' + sizes.outputHeight + 'px';
                }
            }
        } catch (e) {}
    }
    
    // Start vertical resize (lesson vs editor) - mouse
    resizerV.addEventListener('mousedown', function(e) {
        e.preventDefault();
        currentResizer = 'v';
        startPos = e.clientX;
        startSize = isMobile ? lessonSection.offsetHeight : lessonSection.offsetWidth;
        document.body.style.cursor = isMobile ? 'row-resize' : 'col-resize';
        document.body.style.userSelect = 'none';
    });
    
    // Start vertical resize (lesson vs editor) - touch
    resizerV.addEventListener('touchstart', function(e) {
        e.preventDefault();
        currentResizer = 'v';
        const touch = e.touches[0];
        if (isMobile) {
            // For mobile, get position relative to content-area
            const containerRect = editorSection.parentElement.getBoundingClientRect();
            startPos = touch.clientY - containerRect.top;
            startSize = lessonSection.offsetHeight;
        } else {
            startPos = touch.clientX;
            startSize = lessonSection.offsetWidth;
        }
    }, { passive: false });
    
    // Start horizontal resize (editor vs output) - mouse
    resizerH.addEventListener('mousedown', function(e) {
        e.preventDefault();
        currentResizer = 'h';
        startPos = e.clientY;
        startSize = outputPanel.offsetHeight;
        document.body.style.cursor = 'row-resize';
        document.body.style.userSelect = 'none';
    });
    
    // Start horizontal resize (editor vs output) - touch
    resizerH.addEventListener('touchstart', function(e) {
        e.preventDefault();
        currentResizer = 'h';
        startPos = e.touches[0].clientY;
        startSize = outputPanel.offsetHeight;
    }, { passive: false });
    
    // Move handler (mouse)
    document.addEventListener('mousemove', function(e) {
        if (!currentResizer) return;
        handleResize(e.clientX, e.clientY);
    });
    
    // Move handler (touch)
    document.addEventListener('touchmove', function(e) {
        if (!currentResizer) return;
        e.preventDefault();
        handleResize(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    
    function handleResize(clientX, clientY) {
        if (currentResizer === 'v') {
            if (isMobile) {
                // Mobile: resize height (lesson vs editor stacked vertically)
                const containerRect = editorSection.parentElement.getBoundingClientRect();
                const currentPos = clientY - containerRect.top;
                const diff = currentPos - startPos;
                const newHeight = Math.max(80, Math.min(containerRect.height * 0.7, startSize + diff));
                lessonSection.style.height = newHeight + 'px';
            } else {
                // Desktop: resize width (lesson vs editor side by side)
                const containerWidth = editorSection.parentElement.offsetWidth;
                const diff = clientX - startPos;
                const newWidth = Math.max(180, Math.min(containerWidth * 0.5, startSize + diff));
                lessonSection.style.width = newWidth + 'px';
                lessonSection.style.height = '';
            }
        } else if (currentResizer === 'h') {
            const containerRect = editorSection.getBoundingClientRect();
            const minOutputHeight = 60;
            const maxOutputHeight = containerRect.height * 0.7;
            
            const diff = clientY - startPos;
            let newOutputHeight = startSize - diff;
            
            newOutputHeight = Math.max(minOutputHeight, Math.min(maxOutputHeight, newOutputHeight));
            
            // Use height directly for mobile, flex for desktop
            if (isMobile) {
                outputPanel.style.height = newOutputHeight + 'px';
            } else {
                outputPanel.style.flex = '0 0 ' + newOutputHeight + 'px';
            }
        }
        
        // Only refresh editor on mouse, not on every touchmove
        if (currentResizer === 'h' || !isMobile) {
            setTimeout(function() {
                if (state.editor) {
                    state.editor.refresh();
                }
            }, 10);
        }
    }
    
    // Stop handler (mouse)
    document.addEventListener('mouseup', function() {
        stopResize();
    });
    
    // Stop handler (touch)
    document.addEventListener('touchend', function() {
        stopResize();
    });
    
    function stopResize() {
        if (currentResizer) {
            const sizes = {
                lessonWidth: lessonSection.offsetWidth,
                outputHeight: outputPanel.offsetHeight
            };
            if (isMobile) {
                sizes.lessonHeight = lessonSection.offsetHeight;
                sizes.outputHeight = outputPanel.offsetHeight;
            }
            localStorage.setItem('panel_sizes', JSON.stringify(sizes));
            currentResizer = null;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    }
    
    // Clear saved sizes on window resize to allow responsive behavior
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            isMobile = window.innerWidth <= 768;
            if (window.innerWidth < 768) {
                outputPanel.style.flex = '';
                outputPanel.style.height = '';
                lessonSection.style.width = '';
                localStorage.removeItem('panel_sizes');
            }
        }, 250);
    });
    
    console.log('Resize initialized');
}

// Save code to localStorage
function saveCode() {
    const code = state.editor.getValue();
    const filename = state.currentLesson?.id || 'main';
    localStorage.setItem(`java_code_${filename}`, code);
    localStorage.setItem('java_code_current', code);
    showToast('Code saved! 💾', 'success');
}

// Load saved code
function loadSavedCode() {
    const savedCode = localStorage.getItem('java_code_current');
    if (savedCode) {
        state.editor.setValue(savedCode);
    }
}

function getSavedCode() {
    return localStorage.getItem('java_code_current');
}

// Get default code template
function getDefaultCode() {
    return `// Welcome to Java Learning Hub!
// Select a lesson from the sidebar to get started.

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
`;
}

// Load lesson content with AI interaction
function loadLesson(lesson) {
    if (!lesson) return;
    
    state.currentLesson = lesson;
    
    // ⚡ Bolt Optimization: Cache curriculum indices in global state
    // Why: Prevents redundant O(N) nested array lookups during navigation events
    // Impact: Changes navigation lookup time from O(N) to O(1)
    let foundModule = null;
    let foundModuleIndex = -1;
    let foundLessonIndex = -1;

    for (let m = 0; m < JAVA_CURRICULUM.modules.length; m++) {
        const module = JAVA_CURRICULUM.modules[m];
        const lIndex = module.lessons.findIndex(l => l.id === lesson.id);
        if (lIndex !== -1) {
            foundModule = module;
            foundModuleIndex = m;
            foundLessonIndex = lIndex;
            break;
        }
    }

    state.currentModule = foundModule;
    state.currentModuleIndex = foundModuleIndex;
    state.currentLessonIndex = foundLessonIndex;
    
    // Update header breadcrumb
    const headerModule = document.getElementById('headerModule');
    const headerLesson = document.getElementById('headerLesson');
    if (headerModule) {
        headerModule.textContent = state.currentModule?.title || 'Java Basics';
    }
    if (headerLesson) {
        headerLesson.textContent = lesson.title;
    }
    
    // Update editor with lesson example
    if (lesson.example) {
        state.editor.setValue(lesson.example);
    }
    
    // Update lesson panel with interactive content
    if (elements.lessonContent) {
        elements.lessonContent.innerHTML = renderInteractiveLesson(lesson);
    }
    
    // Update context for AI and clear chat history to save tokens
    groqService.setContext(`Currently learning: ${lesson.title}`);
    groqService.clearHistory();
    if (elements.contextValue) {
        elements.contextValue.textContent = lesson.title;
    }
    
    // Update sidebar active state
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.lessonId === lesson.id) {
            item.classList.add('active');
        }
    });
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Update complete button state
    updateCompleteButton();
    
    // Clear output
    elements.output.textContent = 'Ready to run Java code...';
    elements.output.className = '';
}

// Render interactive lesson content
function renderInteractiveLesson(lesson) {
    const content = lesson.content;
    let html = `
        <div class="lesson-interactive-header">
            <div class="lesson-badge">📚 ${lesson.duration || '15 min'}</div>
            <button class="ai-explain-btn" onclick="explainLessonWithAI(state.currentLesson)">
                🤖 Ask Byte to Explain
            </button>
        </div>
    `;
    
    function wrapInClass(code) {
        var lines = code.split('\n');
        var indented = lines.map(function(line) { return '    ' + line; }).join('\n');
        return 'public class Main {\n    public static void main(String[] args) {\n' + indented + '\n    }\n}';
    }
    
if (content.description) {
        var snippetCode = content.snippet ? wrapInClass(content.snippet) : '';
        html += '<div class="lesson-block description">' +
            '<h4>📖 What is ' + lesson.title + '?</h4>' +
            '<p>' + content.description + '</p>' +
            (content.snippet ? '<div class="code-window">' +
                '<div class="code-header">' +
                    '<span class="dot red"></span>' +
                    '<span class="dot yellow"></span>' +
                    '<span class="dot green"></span>' +
                '</div>' +
                '<pre><code>' + snippetCode + '</code></pre>' +
            '</div>' : '') +
        '</div>';
    }
    
    if (content.keyPoints) {
        html += `<div class="lesson-block key-points">
            <h4>🎯 Key Points</h4>
            <ul>
                ${content.keyPoints.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>`;
    }
    
    if (content.types || content.pillars) {
        const items = content.types || content.pillars;
        html += `<div class="lesson-block concepts">
            <h4>💡 Concepts</h4>
            <div class="concept-chips">
                ${items.map(item => {
                    const name = typeof item === 'string' ? item.split(' - ')[0] : item.name;
                    return `<span class="concept-chip" onclick="askAboutConcept('${name}')">${name}</span>`;
                }).join('')}
            </div>
        </div>`;
    }
    
    if (lesson.example) {
        html += `<div class="lesson-block code-example">
            <h4>💻 Code Example</h4>
            <p>The code below is already in the editor. Try running it!</p>
            <div class="example-actions">
                <button class="action-primary" onclick="runCode()">▶️ Run Code</button>
                <button class="action-secondary" onclick="askAIAboutCode(state.currentLesson.example)">🤖 Explain This Code</button>
            </div>
        </div>`;
    }
    
    if (lesson.explanation) {
        html += `<div class="lesson-block explanation">
            <h4>💬 Byte's Explanation</h4>
            <p>${lesson.explanation}</p>
            <button class="ai-more-btn" onclick="explainLessonWithAI(state.currentLesson)">
                🤖 Get More Details from Byte
            </button>
        </div>`;
    }
    
    // Interactive challenges
    html += `
        <div class="lesson-block practice">
            <h4>🎮 Practice Time!</h4>
            <p>Ready to try it yourself? Modify the code and run it!</p>
            <div class="practice-suggestions">
                <button class="practice-btn" onclick="suggestPractice('modify')">✏️ Suggest Modifications</button>
                <button class="practice-btn" onclick="suggestPractice('challenge')">🎯 Give Me a Challenge</button>
                <button class="practice-btn" onclick="suggestPractice('quiz')">📝 Quick Quiz</button>
            </div>
        </div>
    `;
    
    // Navigation
    html += `
        <div class="lesson-navigation">
            <button class="nav-btn" id="prevLessonBtn" onclick="previousLesson()">
                <span class="arrow">←</span>
                <span class="btn-text">Previous</span>
            </button>
            <button class="lesson-complete-btn outlined" id="markComplete" data-action="toggle-complete" onclick="toggleLessonComplete()">
                <span class="complete-icon">○</span>
                <span class="complete-text">Mark Complete</span>
            </button>
            <button class="nav-btn" id="nextLessonBtn" onclick="nextLesson()">
                <span class="btn-text">Next</span>
                <span class="arrow">→</span>
            </button>
        </div>
    `;
    
    return html;
}

// Helper to simulate a quick AI response without making an API call
function simulateQuickResponse(userPrompt, botResponse) {
    openChatWindow();
    addChatMessage(userPrompt, 'user');

    state.isAITyping = true;
    elements.typingIndicator.classList.add('visible');

    // Simulate slight delay for realism
    setTimeout(() => {
        state.isAITyping = false;
        elements.typingIndicator.classList.remove('visible');
        addChatMessage(botResponse, 'bot');
    }, 600);
}

// Ask AI to explain the lesson
function explainLessonWithAI(lesson) {
    if (state.isAITyping) return;
    
    const userPrompt = `Can you explain the concept of "${lesson.title}"?`;
    let response = `Here's a quick explanation of **${lesson.title}**: \n\n`;
    
    if (lesson.content && lesson.content.description) {
        response += `${lesson.content.description}\n\n`;
    }
    if (lesson.explanation) {
        response += `*${lesson.explanation}*\n\n`;
    }
    if (lesson.content && lesson.content.keyPoints) {
        response += `### Key points:\n`;
        response += lesson.content.keyPoints.map(p => `- ${p}`).join('\n');
    }
    if (!lesson.content?.description && !lesson.explanation) {
        response += "I'm sorry, I don't have a pre-generated explanation for this lesson. Try asking me a specific question in the chat!";
    }
    
    simulateQuickResponse(userPrompt, response);
}

// Ask AI about specific code
function askAIAboutCode(code) {
    if (state.isAITyping) return;
    
    const userPrompt = `Explain this code:\n\`\`\`java\n${code}\n\`\`\``;
    
    let response = `This code is from the **${state.currentLesson?.title || 'current'}** lesson example.\n\n`;

    if (state.currentLesson && state.currentLesson.explanation) {
        response += `Here is what this code does:\n\n${state.currentLesson.explanation}\n\n`;
    } else {
        response += `This code demonstrates the basic usage of the concepts covered in this lesson.
- Ensure you have a \`public class Main\`
- Execution starts in \`public static void main(String[] args)\`

Try modifying the values and clicking **Run Code** to see how the output changes!`;
    }

    simulateQuickResponse(userPrompt, response);
}

// Ask about a specific concept
function askAboutConcept(concept) {
    if (state.isAITyping) return;
    
    const userPrompt = `What does "${concept}" mean?`;
    let response = `**${concept}** is a key concept in Java.\n\n`;
    
    if (state.currentLesson && state.currentLesson.content && state.currentLesson.content.keyPoints) {
        // Try to find a key point that mentions this concept
        const relevantPoints = state.currentLesson.content.keyPoints.filter(p => p.toLowerCase().includes(concept.toLowerCase()));
        if (relevantPoints.length > 0) {
            response += `From our current lesson:\n`;
            response += relevantPoints.map(p => `- ${p}`).join('\n');
        } else {
            response += `It's related to the current topic of **${state.currentLesson.title}**. If you need a more detailed definition, feel free to ask me specifically in the chat!`;
        }
    } else {
        response += `This is related to our current topic. Try experimenting with the code to see how it works!`;
    }

    simulateQuickResponse(userPrompt, response);
}

// Suggest practice exercises
function suggestPractice(type) {
    if (state.isAITyping) return;
    
    let userPrompt = '';
    let response = '';
    
    switch(type) {
        case 'modify':
            userPrompt = `Suggest modifications for ${state.currentLesson?.title}`;
            response = `Here are 3 simple modifications you can try with the current example:
1. Change the variable names to something else (make sure to update them everywhere they are used!)
2. Change the values being assigned to the variables. What happens if you use a negative number or a different string?
3. Add a new \`System.out.println()\` statement to print out a combination of your variables.`;
            break;
        case 'challenge':
            userPrompt = `Give me a challenge for ${state.currentLesson?.title}`;
            response = `**Mini Challenge: ${state.currentLesson?.title}**\n\nTry to write a completely new program from scratch that uses the concepts from this lesson.
- Clear the editor completely.
- Write the basic class structure \`public class Main { public static void main(String[] args) { ... } }\`
- Implement something completely different than the example, but using the same concepts!`;
            break;
        case 'quiz':
            userPrompt = `Give me a quick quiz about ${state.currentLesson?.title}`;

            // Try to generate a quiz from key points
            if (state.currentLesson && state.currentLesson.content && state.currentLesson.content.keyPoints && state.currentLesson.content.keyPoints.length >= 2) {
                const kp1 = state.currentLesson.content.keyPoints[0];
                const kp2 = state.currentLesson.content.keyPoints[1];

                response = `**Quick Quiz: ${state.currentLesson.title}**\n\nBased on what we've learned, true or false?\n\n1. ${kp1}\n2. ${kp2}\n\n*Answers: Both are TRUE based on the lesson's key points!*`;
            } else {
                response = `**Quick Quiz: ${state.currentLesson?.title}**\n\n1. What is the main concept of this lesson?\n2. How do you implement it in code?\n3. What are the common mistakes to avoid?\n\n*Review the lesson description and key points to check your answers!*`;
            }
            break;
    }
    
    simulateQuickResponse(userPrompt, response);
}

// Navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevLesson');
    const nextBtn = document.getElementById('nextLesson');
    
    if (!prevBtn || !nextBtn) return;
    
    // ⚡ Bolt Optimization: Use cached indices for O(1) button state evaluation
    // Impact: Eliminates a full curriculum scan on every lesson load
    const currentModuleIndex = state.currentModuleIndex;
    const currentIndex = state.currentLessonIndex;

    const isFirstLesson = currentModuleIndex === 0 && currentIndex === 0;
    const isLastLesson = currentModuleIndex === JAVA_CURRICULUM.modules.length - 1 &&
                         state.currentModule &&
                         currentIndex === state.currentModule.lessons.length - 1;
    
    prevBtn.disabled = isFirstLesson;
    nextBtn.disabled = isLastLesson;
}

// Event Listeners
function setupEventListeners() {
    // Safe helper to add event listener only if element exists
    const safeAddEvent = (id, event, handler) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event, handler);
    };
    
    // Run code
    safeAddEvent('runCode', 'click', runCode);
    
    // Reset code
    safeAddEvent('resetCode', 'click', () => {
        if (state.currentLesson?.example) {
            state.editor.setValue(state.currentLesson.example);
        }
        if (elements.output) elements.output.textContent = 'Code reset to example.';
    });
    
    // Save code
    safeAddEvent('saveCode', 'click', saveCode);
    
    // Clear output
    safeAddEvent('clearOutput', 'click', () => {
        if (elements.output) {
            elements.output.textContent = 'Output cleared.';
            elements.output.className = '';
        }
    });
    
    // Floating Chat toggle
    safeAddEvent('chatToggleBtn', 'click', () => {
        const floatingChat = document.getElementById('floatingChat');
        const chatBadge = document.getElementById('chatBadge');
        const chatToggleBtn = document.getElementById('chatToggleBtn');
        if (floatingChat) {
            floatingChat.classList.toggle('visible');
            if (floatingChat.classList.contains('visible')) {
                if (chatBadge) chatBadge.classList.add('hidden');
                if (chatToggleBtn) chatToggleBtn.classList.add('hidden');
            }
        }
    });
    
    // Close Chat button
    safeAddEvent('closeChat', 'click', () => {
        const floatingChat = document.getElementById('floatingChat');
        const chatToggleBtn = document.getElementById('chatToggleBtn');
        if (floatingChat) {
            floatingChat.classList.remove('visible');
            if (chatToggleBtn) chatToggleBtn.classList.remove('hidden');
        }
    });
    
    // Mobile menu button
    safeAddEvent('mobileMenuBtn', 'click', () => {
        const sidebar = document.getElementById('sidebarLeft');
        const overlay = document.getElementById('sidebarOverlay');
        if (sidebar) {
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
        }
    });
    
    // Close sidebar when clicking overlay
    safeAddEvent('sidebarOverlay', 'click', () => {
        const sidebar = document.getElementById('sidebarLeft');
        const overlay = document.getElementById('sidebarOverlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
    });
    
    // Close sidebar when clicking lesson item on mobile
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('lesson-item')) {
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebarLeft');
                const overlay = document.getElementById('sidebarOverlay');
                if (sidebar) sidebar.classList.remove('open');
                if (overlay) overlay.classList.remove('active');
            }
        }
    });
    
    // Navigation buttons
    safeAddEvent('prevLesson', 'click', previousLesson);
    safeAddEvent('nextLesson', 'click', nextLesson);
    
    // Mark complete button with delegation
    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="toggle-complete"]')) {
            toggleLessonComplete();
        }
    });
    
    // Chat input
    safeAddEvent('sendMessage', 'click', sendChatMessage);
    if (elements.chatInput) {
        elements.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }
    
    // Quick action buttons (use delegation)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-btn')) {
            const question = e.target.dataset.question;
            openChatWindow();
            if (elements.chatInput) elements.chatInput.value = question;
            sendChatMessage();
        }
        if (e.target.classList.contains('suggestion-btn')) {
            const text = e.target.dataset.text;
            openChatWindow();
            if (elements.chatInput) elements.chatInput.value = text;
            sendChatMessage();
        }
    });
    
    // Settings
    safeAddEvent('openSettings', 'click', () => {
        if (elements.settingsModal) {
            elements.settingsModal.classList.add('visible');
            loadSettingsValues();
        }
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            if (elements.settingsModal) elements.settingsModal.classList.remove('visible');
            if (elements.welcomeModal) elements.welcomeModal.classList.remove('visible');
        });
    });
    
    safeAddEvent('saveApiKey', 'click', saveApiKey);
    safeAddEvent('welcomeSaveApiKey', 'click', saveApiKeyFromWelcome);
    safeAddEvent('skipApiKey', 'click', skipApiKey);
    
    // Modal click outside to close
    if (elements.settingsModal) {
        elements.settingsModal.addEventListener('click', (e) => {
            if (e.target === elements.settingsModal) {
                elements.settingsModal.classList.remove('visible');
            }
        });
    }
    
    // Settings changes
    safeAddEvent('saveAllSettings', 'click', saveAllSettings);
    
    // Mark lesson complete
    if (elements.lessonContent) {
        elements.lessonContent.addEventListener('click', (e) => {
            const completeButton = e.target.closest('[data-action="toggle-complete"], .complete-btn');
            if (completeButton) {
                toggleLessonComplete();
            }
        });
    }
}

// Render sidebar content
function renderSidebar(type) {
    if (type === 'lessons') {
        let html = '';
        
        JAVA_CURRICULUM.modules.forEach((module, moduleIndex) => {
            const isExpanded = moduleIndex === 0;
            
            html += `
                <div class="module-header ${isExpanded ? 'expanded' : ''}" data-module="${module.id}">
                    <span class="module-icon">${module.icon}</span>
                    <span class="module-title">${module.title}</span>
                    <span class="module-arrow">▶</span>
                </div>
                <div class="lesson-list">
            `;
            
            module.lessons.forEach(lesson => {
                const isCompleted = state.progress.completedLessons.includes(lesson.id);
                const isActive = state.currentLesson?.id === lesson.id;
                
                html += `
                    <div class="lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}" 
                         data-lesson-id="${lesson.id}" 
                         data-module-id="${module.id}">
                        <span class="lesson-status">${isCompleted ? '✓' : '○'}</span>
                        <span class="lesson-title">${lesson.title}</span>
                    </div>
                `;
            });
            
            html += '</div>';
        });
        
        elements.sidebarContent.innerHTML = html;
        
        // Add click handlers
        document.querySelectorAll('.module-header').forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('expanded');
            });
        });
        
        document.querySelectorAll('.lesson-item').forEach(item => {
            item.addEventListener('click', () => {
                const moduleId = item.dataset.moduleId;
                const lessonId = item.dataset.lessonId;
                const module = JAVA_CURRICULUM.modules.find(m => m.id === moduleId);
                const lesson = module?.lessons.find(l => l.id === lessonId);
                loadLesson(lesson);
            });
        });
        
    } else if (type === 'exercises') {
        const exercises = getExercises();
        let html = '';
        
        exercises.forEach(exercise => {
            const isCompleted = state.progress.completedExercises.includes(exercise.id);
            
            html += `
                <div class="exercise-item ${isCompleted ? 'completed' : ''}" 
                     data-exercise-id="${exercise.id}">
                    <span class="exercise-icon">💻</span>
                    <div class="exercise-info">
                        <span class="exercise-title">${exercise.title}</span>
                        <span class="exercise-difficulty ${exercise.difficulty}">${exercise.difficulty}</span>
                    </div>
                </div>
            `;
        });
        
        elements.sidebarContent.innerHTML = html;
        
        document.querySelectorAll('.exercise-item').forEach(item => {
            item.addEventListener('click', () => {
                const exerciseId = item.dataset.exerciseId;
                const exercise = exercises.find(e => e.id === exerciseId);
                loadExercise(exercise);
            });
        });
    }
}

// Get exercises from lessons
function getExercises() {
    const exercises = [];
    
    JAVA_CURRICULUM.modules.forEach(module => {
        module.lessons.forEach((lesson, index) => {
            exercises.push({
                id: `exercise-${module.id}-${lesson.id}`,
                title: `${lesson.title} Practice`,
                difficulty: index < 3 ? 'easy' : index < 6 ? 'medium' : 'hard',
                lesson: lesson
            });
        });
    });
    
    return exercises;
}

// Load exercise
function loadExercise(exercise) {
    if (!exercise) return;
    
    state.currentExercise = exercise;
    
    // Generate exercise code
    const code = generateExerciseCode(exercise);
    state.editor.setValue(code);
    
    elements.lessonTitle.textContent = exercise.title;
    elements.lessonContent.innerHTML = `
        <h4>Practice Exercise</h4>
        <p>Complete the code to solve the exercise. The expected output is shown below.</p>
        <pre class="code-block">Expected Output:
${exercise.lesson.content.description || 'See the code comments for instructions.'}</pre>
        <button class="complete-btn" style="margin-top: 16px; padding: 8px 16px; background: var(--accent-success); color: white; border: none; border-radius: 4px; cursor: pointer;">
            Mark Complete ✓
        </button>
    `;
    
    groqService.setContext(`Working on exercise: ${exercise.title}`);
    elements.contextValue.textContent = exercise.title;
    
    elements.output.textContent = 'Run the code to check your solution!';
}

// Generate exercise code
function generateExerciseCode(exercise) {
    const lesson = exercise.lesson;
    
    return `// Exercise: ${lesson.title}
// ${lesson.content.description || 'Complete the code below'}

public class Exercise {
    public static void main(String[] args) {
        // TODO: Complete the exercise
        
        // Your code here:
        
        
    }
}
`;
}

// Run Java code directly in browser
async function runCode() {
    let code = state.editor.getValue();
    
    // Fix Java class name - always use Main for the filename
    // Extract any public class name and replace with Main
    const classMatch = code.match(/public\s+class\s+(\w+)/);
    if (classMatch) {
        const originalClassName = classMatch[1];
        if (originalClassName !== 'Main') {
            // Replace the class name throughout the code
            const regex = new RegExp(`\\b${originalClassName}\\b`, 'g');
            code = code.replace(regex, 'Main');
        }
    } else {
        // If no public class, check for class declaration and add Main wrapper
        if (!code.includes('class Main')) {
            // Wrap in Main class if not present
            code = `public class Main {\n${code}\n}`;
        }
    }
    
    // Show loading state
    elements.output.textContent = 'Running...';
    elements.output.className = '';
    
    if (elements.runCodeBtn) {
        elements.runCodeBtn.disabled = true;
        const span = elements.runCodeBtn.querySelector('span');
        if (span) span.textContent = 'Running...';
    }

    try {
        // Try Judge0 CE API (primary)
        let result = await runJavaJudge0(code);
        displayJavaResult(result);
    } catch (error) {
        // Try Piston API as fallback
        try {
            let result = await runJavaPiston(code);
            displayJavaResult(result);
        } catch (error2) {
            // Try OneCompiler as final fallback
            try {
                let result = await runJavaOneCompiler(code);
                displayJavaResult(result);
            } catch (error3) {
                elements.output.textContent = 'Connection failed. Check your internet.';
                elements.output.className = 'error';
                showToast('Connection failed!', 'error');
            }
        }
    } finally {
        if (elements.runCodeBtn) {
            elements.runCodeBtn.disabled = false;
            const span = elements.runCodeBtn.querySelector('span');
            if (span) span.textContent = 'Run Code';
        }
    }
}

// Run Java using OneCompiler API
async function runJavaOneCompiler(code) {
    const response = await fetch('https://onecompiler.com/api/code/run', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            languageType: 'java',
            files: [{
                name: 'Main.java',
                content: code
            }],
            stdin: ''
        })
    });
    
    if (!response.ok) {
        throw new Error('OneCompiler API failed');
    }
    
    const result = await response.json();
    
    return {
        success: result.exitCode === 0,
        output: result.stdout || '',
        error: result.stderr || result.exception || ''
    };
}

// Run Java using JDoodle API
async function runJavaJDoodle(code) {
    // JDoodle requires API key, so we'll use their free embed
    // This is a fallback that won't work without key
    
    const response = await fetch('https://www.jdoodle.com/api/execute/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            language: 'java',
            versionIndex: '4',
            script: code,
            stdin: '',
            clientId: 'demo',
            clientSecret: 'demo'
        })
    });
    
    if (!response.ok) {
        throw new Error('JDoodle API failed');
    }
    
    const result = await response.json();
    
    return {
        success: result.output && !result.error,
        output: result.output || '',
        error: result.error || ''
    };
}

// Run Java using Judge0 CE API (free, open-source)
async function runJavaJudge0(code) {
    // Judge0 CE - free community edition API
    const API_URL = 'https://ce.judge0.com';
    const JAVA_LANGUAGE_ID = 62; // Java (OpenJDK)
    
    // First, create a submission
    const submitResponse = await fetch(`${API_URL}/submissions?base64_encoded=false&wait=true`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            source_code: code,
            language_id: JAVA_LANGUAGE_ID,
            stdin: ''
        })
    });
    
    if (!submitResponse.ok) {
        throw new Error('Judge0 API submission failed');
    }
    
    const result = await submitResponse.json();
    
    // Check if we got a valid response
    if (!result.token) {
        throw new Error('No submission token received');
    }
    
    // Extract output
    const stdout = result.stdout || '';
    const stderr = result.stderr || '';
    const compileOutput = result.compile_output || '';
    const status = result.status?.description || '';
    
    // Determine success based on status
    const successStatus = status.toLowerCase();
    const isSuccess = successStatus.includes('accepted') || successStatus.includes('finished');
    
    return {
        success: isSuccess,
        output: stdout,
        error: stderr || compileOutput || (isSuccess ? '' : `Status: ${status}`)
    };
}

// Run Java using Piston API (fallback option)
async function runJavaPiston(code) {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            language: 'java',
            version: '15',
            files: [{
                content: code
            }]
        })
    });
    
    if (!response.ok) {
        throw new Error('Piston API failed');
    }
    
    const result = await response.json();
    
    if (result.run) {
        return {
            success: result.run.code === 0,
            output: result.run.stdout || '',
            error: result.run.stderr || result.run.message || ''
        };
    }
    
    throw new Error('Invalid response from Piston');
}

// Display Java result
function displayJavaResult(result) {
    if (result.success && result.output) {
        elements.output.innerHTML = escapeHtml(result.output.trim());
        elements.output.className = '';
        showToast('Code executed successfully!', 'success');
        
    } else if (result.success && !result.output) {
        elements.output.innerHTML = '(No output)';
        elements.output.className = '';
        
    } else {
        elements.output.textContent = result.error || 'Unknown error';
        elements.output.className = 'error';
        showToast('Execution failed!', 'error');
    }
}

// Ask AI about the error
function askAIAboutError() {
    const errorEl = elements.output.querySelector('.error-output');
    const error = errorEl ? errorEl.textContent : 'Unknown error';
    
    const prompt = `I got this Java error. Can you help me fix it?

Error:
\`\`\`
${error}
\`\`\`

Here's my code:
\`\`\`java
${state.editor.getValue()}
\`\`\`

Please explain what went wrong and show me the corrected code.`;
    
    elements.chatInput.value = prompt;
    sendChatMessage();
}

// Ask AI about the output
function askAIAboutOutput() {
    const outputEl = elements.output.querySelector('.output-box pre');
    const output = outputEl ? outputEl.textContent : '';
    
    const prompt = `My Java code ran successfully! Here's the output:

\`\`\`
${output}
\`\`\`

Can you explain what this output means in simple terms?`;
    
    elements.chatInput.value = prompt;
    sendChatMessage();
}

// Escape HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Send chat message
async function sendChatMessage() {
    const message = elements.chatInput.value.trim();
    if (!message) return;
    if (state.isAITyping) return;
    
    // Add user message to chat
    addChatMessage(message, 'user');
    elements.chatInput.value = '';
    
    // Check for teaching mode navigation commands
    const lowerMsg = message.toLowerCase();
    if (state.isTeachingMode) {
        if (lowerMsg === 'yes' || lowerMsg === 'lets go' || lowerMsg === 'let\'s go' || lowerMsg === 'ready' || lowerMsg === 'start' || lowerMsg === 'go') {
            nextTeachingStep();
            return;
        }
        if (lowerMsg === 'next' || lowerMsg === 'continue' || lowerMsg === 'done' || lowerMsg === 'skip') {
            nextTeachingStep();
            return;
        }
        if (lowerMsg === 'back' || lowerMsg === 'previous') {
            if (state.teachingStep > 0) {
                state.teachingStep--;
                loadCodeForStep(state.teachingStep);
                addChatMessage(teachingPath[state.teachingStep].message, 'bot');
                updateTeachingProgress();
            }
            return;
        }
        if (lowerMsg === 'exit' || lowerMsg === 'stop' || lowerMsg === 'quit') {
            state.isTeachingMode = false;
            addChatMessage("You've exited guided learning mode. You can explore lessons from the sidebar or ask me anything about Java!", 'bot');
            return;
        }
    }
    
    // Show typing indicator
    state.isAITyping = true;
    elements.typingIndicator.classList.add('visible');
    
    try {
        // Add current code context
        const currentCode = state.editor.getValue();
        let fullMessage = message;
        
        // If user asks about code, include it
        if (message.toLowerCase().includes('code') || 
            message.toLowerCase().includes('this') ||
            message.toLowerCase().includes('error') ||
            message.toLowerCase().includes('debug')) {
            fullMessage = `${message}\n\nHere's my current code:\n\`\`\`java\n${currentCode}\n\`\`\``;
        }
        
        // Include current lesson context if any
        if (state.currentLesson) {
            fullMessage = `[Current Lesson: ${state.currentLesson.title}]\n\n${fullMessage}`;
        }
        
        // Send to Groq API
        const response = await groqService.sendMessage(fullMessage);
        
        // Hide typing indicator
        state.isAITyping = false;
        elements.typingIndicator.classList.remove('visible');
        
        if (response.error) {
            const errorMessage = `🤖 Oops! I couldn't get a response.\n\nPlease check your internet connection or API key, then try again.`;
            console.error('Groq service error:', response.message);
            addChatMessage(errorMessage, 'bot');
        } else {
            addChatMessage(response.message, 'bot');
        }
        
    } catch (error) {
        state.isAITyping = false;
        elements.typingIndicator.classList.remove('visible');
        addChatMessage(`😕 I couldn't connect to the AI right now. Please check your internet or your Groq API key and try again.\n\nGet a key: https://console.groq.com/keys`, 'bot');
    }
}

// Add message to chat with proper markdown formatting
function addChatMessage(content, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    // Format content with proper markdown
    const formattedContent = formatMarkdown(content);
    
    messageDiv.innerHTML = `
        <div class="message-content">
            ${formattedContent}
        </div>
    `;
    
    elements.chatMessages.appendChild(messageDiv);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    
    // Add click handlers for code copy buttons
    messageDiv.querySelectorAll('pre').forEach(pre => {
        pre.style.position = 'relative';
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '📋';
        copyBtn.title = 'Copy code';
        copyBtn.onclick = () => {
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            navigator.clipboard.writeText(code);
            copyBtn.innerHTML = '✓';
            setTimeout(() => copyBtn.innerHTML = '📋', 1500);
        };
        pre.appendChild(copyBtn);
    });
}

// Format markdown to HTML
function formatMarkdown(content) {
    if (!content) return '<p>No message</p>';
    
    // Escape HTML first
    let formatted = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    
    // Code blocks with language
    formatted = formatted.replace(/```java\n?([\s\S]*?)```/g, (match, code) => {
        return `<pre class="code-block"><code class="language-java">${code.trim()}</code></pre>`;
    });
    
    // Generic code blocks
    formatted = formatted.replace(/```\n?([\s\S]*?)```/g, (match, code) => {
        return `<pre class="code-block"><code>${code.trim()}</code></pre>`;
    });
    
    // Inline code
    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Bold
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    
    // Headers
    formatted = formatted.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    formatted = formatted.replace(/^## (.+)$/gm, '<h3>$1</h3>');
    formatted = formatted.replace(/^# (.+)$/gm, '<h2>$1</h2>');
    
    // Lists
    formatted = formatted.replace(/^- (.+)$/gm, '<li>$1</li>');
    formatted = formatted.replace(/(<li>[\s\S]*?<\/li>)(\n|$)/g, '<ul>$1</ul>');
    formatted = formatted.replace(/<\/ul>\s*<ul>/g, '');
    
    // Numbered lists
    formatted = formatted.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    
    // Paragraphs - split by double newlines
    const paragraphs = formatted.split(/\n\n+/);
    formatted = paragraphs.map(p => {
        p = p.trim();
        if (!p) return '';
        if (p.startsWith('<pre') || p.startsWith('<h') || p.startsWith('<ul')) {
            return p;
        }
        // Replace single newlines with <br> within paragraphs
        p = p.replace(/\n/g, '<br>');
        return `<p>${p}</p>`;
    }).join('');
    
    // Clean up empty paragraphs
    formatted = formatted.replace(/<p>\s*<\/p>/g, '');
    formatted = formatted.replace(/<p>(<h[234]>)/g, '$1');
    formatted = formatted.replace(/(<\/h[234]>)<\/p>/g, '$1');
    formatted = formatted.replace(/<p>(<pre)/g, '$1');
    formatted = formatted.replace(/(<\/pre>)<\/p>/g, '$1');
    formatted = formatted.replace(/<p>(<ul)/g, '$1');
    formatted = formatted.replace(/(<\/ul>)<\/p>/g, '$1');
    
    return formatted;
}

// Navigation
function previousLesson() {
    // ⚡ Bolt Optimization: O(1) retrieval using cached indices
    // Impact: Replaces O(N) lookup, making navigation instantly responsive
    if (state.currentLessonIndex === -1 || state.currentModuleIndex === -1) return;

    const currentModule = state.currentModule;
    const currentIndex = state.currentLessonIndex;
    const currentModuleIndex = state.currentModuleIndex;
    const allModules = JAVA_CURRICULUM.modules;
    
    if (currentIndex > 0) {
        loadLesson(currentModule.lessons[currentIndex - 1]);
        return;
    }
    
    const prevModule = allModules[currentModuleIndex - 1];
    if (prevModule) {
        const prevModuleHeader = document.querySelector(`.module-header[data-module-id="${prevModule.id}"]`);
        if (prevModuleHeader) {
            prevModuleHeader.classList.add('expanded');
        }
        loadLesson(prevModule.lessons[prevModule.lessons.length - 1]);
    }
}

function nextLesson() {
    // ⚡ Bolt Optimization: O(1) retrieval using cached indices
    // Impact: Replaces O(N) lookup, making navigation instantly responsive
    if (state.currentLessonIndex === -1 || state.currentModuleIndex === -1) return;

    const currentModule = state.currentModule;
    const currentIndex = state.currentLessonIndex;
    const currentModuleIndex = state.currentModuleIndex;
    const allModules = JAVA_CURRICULUM.modules;
    
    if (currentIndex < currentModule.lessons.length - 1) {
        loadLesson(currentModule.lessons[currentIndex + 1]);
        return;
    }
    
    const nextModule = allModules[currentModuleIndex + 1];
    if (nextModule) {
        const nextModuleHeader = document.querySelector(`[data-module-header-id="${nextModule.id}"]`);
        if (nextModuleHeader) {
            nextModuleHeader.classList.add('expanded');
        }
        const nextModuleInSidebar = document.querySelector(`.module-header[data-module-id="${nextModule.id}"]`);
        if (nextModuleInSidebar) {
            nextModuleInSidebar.classList.add('expanded');
        }
        loadLesson(nextModule.lessons[0]);
    } else {
        showToast('Congratulations! You completed all lessons!', 'success');
    }
}

// Toggle lesson completion
function toggleLessonComplete() {
    if (!state.currentLesson) return;
    
    const lessonId = state.currentLesson.id;
    const arr = [...state.progress.completedLessons];
    
    if (arr.includes(lessonId)) {
        const index = arr.indexOf(lessonId);
        arr.splice(index, 1);
    } else {
        arr.push(lessonId);
    }
    
    state.progress.completedLessons = arr;
    saveProgress();
    updateProgressBar();
    updateCompleteButton();
    renderSidebar('lessons');
}

// Update complete button state
function updateCompleteButton() {
    const btn = document.getElementById('markComplete');
    if (!btn || !state.currentLesson) return;
    
    const isCompleted = state.progress.completedLessons.includes(state.currentLesson.id);
    const icon = btn.querySelector('.complete-icon');
    const text = btn.querySelector('.complete-text');
    
    if (isCompleted) {
        btn.classList.add('completed');
        btn.classList.remove('outlined');
        icon.textContent = '✓';
        text.textContent = 'Completed';
    } else {
        btn.classList.remove('completed');
        btn.classList.add('outlined');
        icon.textContent = '○';
        text.textContent = 'Mark Complete';
    }
}

// Progress management
function calculateTotalLessons() {
    state.progress.totalLessons = JAVA_CURRICULUM.modules.reduce(
        (sum, module) => sum + module.lessons.length, 0
    );
    state.progress.totalExercises = getExercises().length;
}

function updateProgressBar() {
    const total = state.progress.totalLessons;
    const completed = state.progress.completedLessons.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    elements.progressFill.style.width = `${percentage}%`;
    elements.progressText.textContent = `${percentage}%`;
    
    const lessonProgressEl = document.getElementById('lessonProgress');
    if (lessonProgressEl) {
        lessonProgressEl.textContent = `Lesson ${completed + 1} of ${total}`;
    }
    const exerciseCountEl = document.getElementById('exerciseCount');
    if (exerciseCountEl) {
        exerciseCountEl.textContent = `${state.progress.completedExercises.length} Exercises Done`;
    }
}

function saveProgress() {
    const toSave = {
        completedLessons: state.progress.completedLessons,
        completedExercises: state.progress.completedExercises
    };
    localStorage.setItem('java_hub_progress', JSON.stringify(toSave));
}

function loadProgress() {
    const saved = localStorage.getItem('java_hub_progress');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.progress.completedLessons = parsed.completedLessons || [];
            state.progress.completedExercises = parsed.completedExercises || [];
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

function exportProgress() {
    const data = JSON.stringify(state.progress, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'java_hub_progress.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Progress exported!', 'success');
}

function importProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const text = await file.text();
            try {
                const data = JSON.parse(text);
                state.progress = { ...state.progress, ...data };
                saveProgress();
                updateProgressBar();
                renderSidebar('lessons');
                showToast('Progress imported!', 'success');
            } catch (err) {
                showToast('Invalid file format', 'error');
            }
        }
    };
    input.click();
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        state.progress = {
            completedLessons: [],
            completedExercises: [],
            totalLessons: state.progress.totalLessons,
            totalExercises: state.progress.totalExercises
        };
        saveProgress();
        updateProgressBar();
        renderSidebar('lessons');
        showToast('Progress reset', 'success');
    }
}

// Settings
function loadSettingsValues() {
    document.getElementById('groqApiKey').value = groqService.getApiKey() || '';
    document.getElementById('fontFamily').value = localStorage.getItem('editor_font_family') || 'JetBrains Mono';
    document.getElementById('fontSize').value = localStorage.getItem('editor_font_size') || '14';
    
    // Load theme selection
    const savedTheme = localStorage.getItem('app_theme') || 'dark';
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });
    
    // Apply saved settings to editor
    const savedFontFamily = localStorage.getItem('editor_font_family') || 'JetBrains Mono';
    const savedFontSize = localStorage.getItem('editor_font_size') || '14';
    
    document.documentElement.style.setProperty('--font-mono', `'${savedFontFamily}', monospace`);
    
    if (state.editor) {
        const editorElement = state.editor.getWrapperElement();
        if (editorElement) {
            editorElement.style.fontFamily = `'${savedFontFamily}', monospace`;
            editorElement.style.fontSize = savedFontSize + 'px';
        }
    }
}

function saveApiKey() {
    const key = document.getElementById('groqApiKey').value.trim();
    groqService.setApiKey(key);
    updateAIStatus();
    showToast(key ? 'API key saved!' : 'API key cleared', 'success');
    elements.settingsModal.classList.remove('visible');
}

function saveApiKeyFromWelcome() {
    const key = document.getElementById('welcomeApiKey').value.trim();
    if (key) {
        groqService.setApiKey(key);
        updateAIStatus();
    }
    elements.welcomeModal.classList.remove('visible');
    if (key) {
        showToast('API key saved! AI tutor is now active.', 'success');
    }
}

function skipApiKey() {
    elements.welcomeModal.classList.remove('visible');
}

function updateAIStatus() {
    if (groqService.hasApiKey()) {
        elements.aiStatus.textContent = 'Connected';
        elements.aiStatus.style.color = 'var(--accent-success)';
        const statusDot = document.querySelector('.status-dot');
        if (statusDot) statusDot.classList.remove('offline');
        const connectionStatus = document.getElementById('connectionStatus');
        if (connectionStatus) connectionStatus.innerHTML = 
            '<span class="status-dot online"></span> Groq Connected';
    } else {
        elements.aiStatus.textContent = 'Not Connected';
        elements.aiStatus.style.color = 'var(--text-muted)';
        const statusDot = document.querySelector('.status-dot');
        if (statusDot) statusDot.classList.add('offline');
        const connectionStatus = document.getElementById('connectionStatus');
        if (connectionStatus) connectionStatus.innerHTML = 
            '<span class="status-dot offline"></span> Groq Not Connected';
    }
}

function updateFontFamily() {
    const family = document.getElementById('fontFamily').value;
    localStorage.setItem('editor_font_family', family);
    if (state.editor) {
        state.editor.getWrapperElement().style.fontFamily = `'${family}', monospace`;
    }
    showToast('Font family updated!', 'success');
}

function updateFontSize() {
    const size = document.getElementById('fontSize').value;
    localStorage.setItem('editor_font_size', size);
    if (state.editor) {
        state.editor.getWrapperElement().style.fontSize = size + 'px';
    }
    showToast('Font size updated!', 'success');
}

function updateTabSize() {
    const size = document.getElementById('tabSize').value;
    localStorage.setItem('editor_tab_size', size);
    if (state.editor) {
        state.editor.setOption('tabSize', parseInt(size));
    }
    showToast('Tab size updated!', 'success');
}

function saveAllSettings() {
    const fontFamily = document.getElementById('fontFamily')?.value || 'JetBrains Mono';
    const fontSize = document.getElementById('fontSize')?.value || '14';
    
    localStorage.setItem('editor_font_family', fontFamily);
    localStorage.setItem('editor_font_size', fontSize);
    
    // Update CSS variable for fonts
    document.documentElement.style.setProperty('--font-mono', `'${fontFamily}', monospace`);
    
    // Apply font to CodeMirror directly
    if (state.editor) {
        const editorElement = state.editor.getWrapperElement();
        if (editorElement) {
            editorElement.style.fontFamily = `'${fontFamily}', monospace`;
            editorElement.style.fontSize = fontSize + 'px';
        }
        // Also set on the CodeMirror content area
        const contentElement = state.editor.getScrollerElement();
        if (contentElement) {
            contentElement.style.fontFamily = `'${fontFamily}', monospace`;
            contentElement.style.fontSize = fontSize + 'px';
        }
    }
    
    showToast('Settings saved!', 'success');
    if (elements.settingsModal) {
        elements.settingsModal.classList.remove('visible');
    }
}

// Welcome screen
function checkWelcomeScreen() {
    const hasSeenWelcome = localStorage.getItem('seen_welcome');
    if (!hasSeenWelcome) {
        elements.welcomeModal.classList.add('visible');
        localStorage.setItem('seen_welcome', 'true');
    }
    updateAIStatus();
}

// Toast notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<div class="toast-content">${message}</div>`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S to save
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCode();
    }
    
    // Ctrl/Cmd + Enter to run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        elements.settingsModal.classList.remove('visible');
        elements.welcomeModal.classList.remove('visible');
    }
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('app_theme') || 'dark';
    applyTheme(savedTheme);
    
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            applyTheme(theme);
            localStorage.setItem('app_theme', theme);
            
            document.querySelectorAll('.theme-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'night-theme');
    
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else if (theme === 'night') {
        document.body.classList.add('night-theme');
    }
    
    if (state.editor) {
        state.editor.refresh();
    }
}

function loadThemeFromSettings() {
    const savedTheme = localStorage.getItem('app_theme') || 'dark';
    
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });
    
    applyTheme(savedTheme);
}
