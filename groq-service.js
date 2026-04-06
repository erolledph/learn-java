// ============================================
// Java Learning Hub - Groq AI Service
// ============================================

class GroqService {
    constructor() {
        this.apiKey = localStorage.getItem('groq_api_key') || '';
        this.model = 'llama-3.1-8b-instant';
        this.maxTokens = 4096;
        this.temperature = 0.7;
        this.baseUrl = 'https://api.groq.com/openai/v1';
        this.chatHistory = [];
        this.isConnected = this.hasApiKey();
        this.currentContext = '';
        
        this.systemPrompt = `You are "Byte", a friendly Java programming tutor. Be concise and encouraging. Focus only on Java programming. Use short code examples (10-15 lines). If asked about non-Java topics, redirect: "I'm focused on Java! What Java concept would you like to learn?"`;
    }
    
    setApiKey(key) {
        this.apiKey = key;
        localStorage.setItem('groq_api_key', key);
        this.isConnected = key.length > 0;
    }
    
    getApiKey() {
        return this.apiKey;
    }
    
    hasApiKey() {
        return this.apiKey && this.apiKey.length > 0;
    }
    
    setContext(context) {
        this.currentContext = context;
    }
    
    clearHistory() {
        this.chatHistory = [];
    }
    
    isJavaRelated(message) {
        const javaKeywords = [
            'java', 'class', 'method', 'variable', 'object', 'string', 'int', 'boolean',
            'public', 'private', 'static', 'void', 'main', 'array', 'loop', 'for', 'while',
            'if', 'else', 'switch', 'case', 'inheritance', 'polymorphism', 'encapsulation',
            'abstract', 'interface', 'package', 'import', 'exception', 'try', 'catch',
            'throw', 'throws', 'final', 'return', 'new', 'this', 'super', 'extends',
            'implements', 'abstract', 'interface', 'arraylist', 'hashmap', 'hashset',
            'linkedlist', 'iterator', 'lambda', 'stream', 'thread', 'synchronized',
            'println', 'scanner', 'jdk', 'jvm', 'compiler', 'oop', 'constructor',
            'overload', 'override', ' polymorphism', 'abstraction', 'jdk', 'jre',
            'bytecode', 'jar', 'javadoc', 'debug', 'runtime', 'compile', 'syntax'
        ];
        
        const lowerMessage = message.toLowerCase();
        
        for (const keyword of javaKeywords) {
            if (lowerMessage.includes(keyword)) {
                return true;
            }
        }
        
        return false;
    }
    
    getRedirectionMessage() {
        const redirections = [
            "I'm Byte, your Java tutor! 🧐 I specialize in teaching Java programming. What Java concept would you like to learn about?",
            
            "Java is my thing! 💻 I can help you understand Java concepts like variables, loops, classes, and more. What would you like to explore?",
            
            "My expertise is Java programming! 🎯 Whether it's data types, methods, or OOP concepts, I'm here to help. What Java topic interests you?",
            
            "I'm focused on teaching Java! ☕ Let me help you with Java syntax, collections, exception handling, or any other Java topic. What would you like to learn?",
            
            "As your Java tutor, I'm here to explain Java concepts! 🚀 From basic 'Hello World' to advanced topics like threading, just let me know what you need!"
        ];
        
        return redirections[Math.floor(Math.random() * redirections.length)];
    }
    
    async sendMessage(userMessage, onStream = null) {
        if (!this.hasApiKey()) {
            return {
                error: true,
                message: 'API key not configured. Please add your Groq API key in Settings.'
            };
        }
        
        if (!this.isJavaRelated(userMessage)) {
            return {
                error: false,
                message: this.getRedirectionMessage()
            };
        }
        
        this.chatHistory.push({
            role: 'user',
            content: userMessage
        });
        
        const contextMessage = this.currentContext 
            ? `Current lesson context: ${this.currentContext}\n\n`
            : '';
        
        const messages = [
            { role: 'system', content: this.systemPrompt },
            { role: 'system', content: contextMessage },
            ...this.chatHistory.slice(-4)
        ];
        
        try {
            const response = await fetch(`${this.baseUrl}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    max_tokens: this.maxTokens,
                    temperature: this.temperature,
                    stream: false
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `HTTP ${response.status}`);
            }
            
            const data = await response.json();
            const assistantMessage = data.choices[0]?.message?.content || '';
            
            this.chatHistory.push({
                role: 'assistant',
                content: assistantMessage
            });
            
            return {
                error: false,
                message: assistantMessage,
                usage: data.usage
            };
            
        } catch (error) {
            console.error('Groq API Error:', error);
            
            // Check for rate limit
            if (error.message.includes('Rate limit') || error.message.includes('rate limit')) {
                return {
                    error: true,
                    message: `⏳ Rate limit reached! You've used your daily token limit. 

Please wait a few minutes and try again, or:
- Get a free API key at https://console.groq.com/keys
- Upgrade to Dev Tier for more tokens

Meanwhile, you can still:
- Browse the lessons
- Practice with the code editor
- Learn from the examples!`
                };
            }
            
            return {
                error: true,
                message: `Error: ${error.message}. Please check your connection and try again.`
            };
        }
    }
    
    async sendMessageStream(userMessage, onChunk, onComplete, onError) {
        if (!this.hasApiKey()) {
            onError('API key not configured. Please add your Groq API key in Settings.');
            return;
        }
        
        if (!this.isJavaRelated(userMessage)) {
            const redirectMsg = this.getRedirectionMessage();
            onChunk(redirectMsg);
            onComplete(redirectMsg);
            return;
        }
        
        this.chatHistory.push({
            role: 'user',
            content: userMessage
        });
        
        const contextMessage = this.currentContext 
            ? `Current lesson context: ${this.currentContext}\n\n`
            : '';
        
        const messages = [
            { role: 'system', content: this.systemPrompt },
            { role: 'system', content: contextMessage },
            ...this.chatHistory.slice(-4)
        ];
        
        try {
            const response = await fetch(`${this.baseUrl}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    max_tokens: this.maxTokens,
                    temperature: this.temperature,
                    stream: true
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `HTTP ${response.status}`);
            }
            
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullContent = '';
            
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');
                
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') continue;
                        
                        try {
                            const parsed = JSON.parse(data);
                            const content = parsed.choices?.[0]?.delta?.content;
                            if (content) {
                                fullContent += content;
                                onChunk(content);
                            }
                        } catch (e) {
                            // Skip invalid JSON
                        }
                    }
                }
            }
            
            this.chatHistory.push({
                role: 'assistant',
                content: fullContent
            });
            
            onComplete(fullContent);
            
        } catch (error) {
            console.error('Groq API Error:', error);
            onError(error.message);
        }
    }
    
    getQuickResponses() {
        return {
            whatIsJava: `**Java is a powerful, object-oriented programming language** created by Sun Microsystems in 1995.

**Why Learn Java?**
- "Write Once, Run Anywhere" - runs on any device with JVM
- Used by billions of devices worldwide
- Popular for Android apps, enterprise software, and web applications
- Strong community and excellent learning resources

**Simple Java Example:**
\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
\`\`\`

Would you like to start with the basics?`,
            
            helloWorld: `**Your First Java Program:**

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

**Key Parts:**
- \`public class Main\` - Defines a class (filename must match)
- \`public static void main(String[] args)\` - Program entry point
- \`System.out.println()\` - Prints text to console

**Rules to Remember:**
- Java is case-sensitive
- Statements end with \`;\`
- Curly braces \`{}\` define blocks

Try running this in the editor! Want me to explain any part?`,
            
            variables: `**Variables** store data in your program:

\`\`\`java
int age = 25;              // Whole numbers
double price = 19.99;      // Decimals
String name = "Alice";     // Text (note the capital S)
boolean isActive = true;   // true or false
char grade = 'A';          // Single character
\`\`\`

**Naming Rules:**
- Start with letter, \`$\`, or \`_\`
- No spaces allowed
- Use camelCase: \`firstName\`, \`lastName\`

**Best Practice:** Use descriptive names!
- Good: \`int studentAge = 20;\`
- Bad: \`int x = 20;\`

Learn about data types next?`,
            
            dataTypes: `Java has **primitive** and **reference** types:

**Primitives (store simple values):**
\`\`\`java
int i = 100;           // 4 bytes, whole numbers
double d = 3.14;       // 8 bytes, decimals
boolean b = true;      // true or false
char c = 'A';          // 2 bytes, single character
\`\`\`

**Reference Types (point to objects):**
\`\`\`java
String name = "Hello";  // Text (not primitive!)
int[] numbers = {1,2,3}; // Arrays
\`\`\`

**Quick Guide:**
- \`int\` → Whole numbers (most common)
- \`double\` → Decimals
- \`String\` → Text
- \`boolean\` → True/false

Which type would you like to explore more?`,
            
            loops: `**Loops** repeat code in Java:

**For Loop (counted):**
\`\`\`java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
\`\`\`

**While Loop (condition-based):**
\`\`\`java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
\`\`\`

**For-Each (arrays):**
\`\`\`java
String[] fruits = {"Apple", "Banana"};
for (String fruit : fruits) {
    System.out.println(fruit);
}
\`\`\`

**Control:**
- \`break\` → Exit loop
- \`continue\` → Skip iteration

Which loop type interests you?`,
            
            classes: `**Classes** are blueprints for objects in Java:

\`\`\`java
public class Car {
    // Fields (attributes)
    String brand;
    int speed;
    
    // Constructor
    Car(String b, int s) {
        brand = b;
        speed = s;
    }
    
    // Method
    void drive() {
        System.out.println(brand + " is driving!");
    }
}
\`\`\`

**Creating an Object:**
\`\`\`java
Car myCar = new Car("Toyota", 100);
myCar.drive(); // Output: Toyota is driving!
\`\`\`

**Key Concepts:**
- Class = Blueprint
- Object = Instance of a class
- Methods = Actions the object can perform

Want to learn about inheritance or other OOP concepts?`
        };
    }
    
    async testConnection() {
        if (!this.hasApiKey()) {
            return { success: false, message: 'No API key' };
        }
        
        try {
            const response = await fetch(`${this.baseUrl}/models`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            
            if (response.ok) {
                this.isConnected = true;
                return { success: true, message: 'Connected successfully' };
            } else {
                this.isConnected = false;
                return { success: false, message: 'Invalid API key' };
            }
        } catch (error) {
            this.isConnected = false;
            return { success: false, message: error.message };
        }
    }
}

const groqService = new GroqService();
