// ============================================
// Java Learning Hub - Comprehensive Lessons
// Based on W3Schools Java Tutorial
// ============================================

const JAVA_CURRICULUM = {
    modules: [
        // ==========================================
        // MODULE 1: GETTING STARTED
        // ==========================================
        {
            id: "getting-started",
            title: "Getting Started",
            icon: "🚀",
            lessons: [
                {
                    id: "intro",
                    title: "Introduction",
                    duration: "15 min",
                    content: {
                        description: "Java is a high-level, object-oriented programming language designed to be platform-independent. With Java, you can 'write once, run anywhere' on any device with a Java Virtual Machine (JVM).",
                        keyPoints: [
                            "Java is owned by Oracle and was created in 1995",
                            "Platform-independent through JVM (Java Virtual Machine)",
                            "Used in Android development, enterprise apps, web servers",
                            "Syntax is similar to C++ but simpler",
                            "Strong typing and garbage collection"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
                    explanation: "Every Java program must have a class with a main method. The main method is the entry point where the program starts execution."
                },
                {
                    id: "syntax",
                    title: "Java Syntax",
                    duration: "15 min",
                    content: {
                        description: "Java syntax defines the rules for writing Java programs. Each statement ends with a semicolon, and code blocks are defined by curly braces {}.",
                        keyPoints: [
                            "Java is case-sensitive",
                            "Class names should start with uppercase",
                            "The main method is required for program execution",
                            "Statements end with semicolons",
                            "Code blocks are enclosed in curly braces"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
        int x = 5;
        int y = 6;
        System.out.println(x + y);
    }
}`,
                    explanation: "The main method is the entry point. System.out.println() prints output. Variables are declared with a type (int) and name."
                },
                {
                    id: "output",
                    title: "Output",
                    duration: "10 min",
                    content: {
                        description: "Use System.out.println() to print text and values to the console. The println method adds a new line after printing.",
                        keyPoints: [
                            "System.out.println() prints and adds a new line",
                            "System.out.print() prints without new line",
                            "Use + to concatenate strings and variables",
                            "Numbers can be printed directly or as strings"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println("I am learning Java");
        System.out.println("Math: " + (5 + 5));
    }
}`,
                    explanation: "Use + to concatenate strings with calculations. The parentheses around (5 + 5) ensure the math is performed before conversion to string."
                },
                {
                    id: "comments",
                    title: "Comments",
                    duration: "10 min",
                    content: {
                        description: "Comments are used to explain code and are ignored by the compiler. Java supports single-line and multi-line comments.",
                        keyPoints: [
                            "// for single-line comments",
                            "/* */ for multi-line comments",
                            "Comments improve code readability",
                            "Use comments to temporarily disable code"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // This is a single-line comment
        System.out.println("Comments are ignored");
        
        /* This is a
           multi-line comment */
        System.out.println("Hello World");
    }
}`,
                    explanation: "Single-line comments start with //. Multi-line comments are enclosed between /* and */."
                }
            ]
        },
        // ==========================================
        // MODULE 2: VARIABLES & DATA TYPES
        // ==========================================
        {
            id: "variables-datatypes",
            title: "Variables & Data Types",
            icon: "📦",
            lessons: [
                {
                    id: "variables",
                    title: "Variables",
                    duration: "15 min",
                    content: {
                        description: "Variables are containers for storing data values. In Java, you must declare the type of a variable before using it.",
                        keyPoints: [
                            "Syntax: type variableName = value",
                            "Common types: int, double, String, boolean",
                            "Variables can be declared and assigned later",
                            "final keyword makes a variable constant"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        String name = "John";
        int age = 25;
        double gpa = 3.5;
        boolean isStudent = true;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Student: " + isStudent);
    }
}`,
                    explanation: "String stores text, int stores integers, double stores decimals, boolean stores true/false."
                },
                {
                    id: "print-variables",
                    title: "Print Variables",
                    duration: "10 min",
                    content: {
                        description: "You can print variables using System.out.println() with string concatenation.",
                        keyPoints: [
                            "Use + to concatenate text and variables",
                            "System.out.println(x) prints variable value",
                            "System.out.println(\"Text \" + x) combines text"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        String name = "John";
        int age = 25;
        
        System.out.println("Hello " + name);
        System.out.println("Age: " + age);
        
        int x = 10, y = 20;
        System.out.println(x + y);  // Prints 30
        System.out.println("x + y = " + (x + y));  // Prints "x + y = 30"
    }
}`,
                    explanation: "Without quotes around x + y, Java adds the numbers. With quotes, it concatenates as a string."
                },
                {
                    id: "multiple-variables",
                    title: "Declare Multiple Variables",
                    duration: "10 min",
                    content: {
                        description: "Java allows declaring multiple variables of the same type in one statement.",
                        keyPoints: [
                            "Declare multiple same-type variables: int x = 1, y = 2, z = 3",
                            "Can declare without initializing",
                            "Each variable needs its own value if initializing in one line"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        int x = 5, y = 10, z = 15;
        System.out.println(x + y + z);
        
        String name = "John", lastName = "Doe";
        System.out.println(name + " " + lastName);
    }
}`,
                    explanation: "Multiple variables of the same type can be declared and initialized in one line, separated by commas."
                },
                {
                    id: "identifiers",
                    title: "Identifiers",
                    duration: "10 min",
                    content: {
                        description: "Identifiers are names used for variables, classes, and methods. Java has rules for naming.",
                        keyPoints: [
                            "Must start with a letter or underscore",
                            "Cannot start with a number",
                            "Case-sensitive (age and Age are different)",
                            "Cannot use Java keywords",
                            "Use camelCase for variables, PascalCase for classes"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Valid identifiers
        int myVariable = 5;
        int _age = 25;
        int $price = 99;
        int camelCase = 1;
        
        // Invalid (would cause errors):
        // int 1variable = 5;    // starts with number
        // int my-var = 5;       // contains hyphen
        // int class = 5;        // is a keyword
        
        System.out.println("Valid identifiers used!");
    }
}`,
                    explanation: "Use meaningful names. Start with letters, underscore, or $. Avoid Java keywords like class, int, if."
                },
                {
                    id: "data-types",
                    title: "Data Types",
                    duration: "15 min",
                    content: {
                        description: "Java has two categories of data types: Primitive (byte, short, int, long, float, double, boolean, char) and Non-Primitive (String, Arrays, Classes).",
                        keyPoints: [
                            "Primitive types: byte (8-bit), short (16-bit), int (32-bit), long (64-bit)",
                            "Decimal types: float (32-bit), double (64-bit)",
                            "boolean: true or false",
                            "char: single character (16-bit Unicode)",
                            "Non-primitive: String, Arrays, Objects"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Numbers
        byte b = 100;
        short s = 5000;
        int i = 100000;
        long l = 15000000000L;
        float f = 5.99f;
        double d = 19.99;
        
        // Characters and booleans
        char grade = 'A';
        boolean isFun = true;
        
        // Non-primitive
        String name = "John";
        
        System.out.println("Byte: " + b);
        System.out.println("Float: " + f);
        System.out.println("Char: " + grade);
        System.out.println("Boolean: " + isFun);
    }
}`,
                    explanation: "Primitive types store actual values. Non-primitive (reference types) store references to objects."
                },
                {
                    id: "numbers",
                    title: "Numbers",
                    duration: "15 min",
                    content: {
                        description: "Java provides several types for storing numbers. int is most common for integers, double for decimals.",
                        keyPoints: [
                            "int for whole numbers (-2 billion to 2 billion)",
                            "long for very large numbers",
                            "double for decimal numbers (default for decimals)",
                            "float for decimals (add 'f' suffix)",
                            "Use BigDecimal for precise financial calculations"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Integers
        int i = 1000000;
        long bigNum = 15000000000L;
        
        // Decimals
        double price = 19.99;
        float tax = 0.08f;
        
        // Scientific numbers
        double exp = 35e3;  // 35 * 10^3 = 35000
        double exp2 = 12e-3; // 12 * 10^-3 = 0.012
        
        System.out.println("Price: " + price);
        System.out.println("Tax: " + tax);
        System.out.println("Scientific: " + exp);
    }
}`,
                    explanation: "Use double for decimals by default. Use float with 'f' suffix. Scientific notation uses 'e' for exponent."
                },
                {
                    id: "booleans",
                    title: "Booleans",
                    duration: "10 min",
                    content: {
                        description: "A boolean type can only have two values: true or false. It's commonly used in conditional statements.",
                        keyPoints: [
                            "boolean can only be true or false",
                            "Used in if-else statements",
                            "Default value is false",
                            "Often returned by comparison operators"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        boolean isJavaFun = true;
        boolean isFishTasty = false;
        
        System.out.println(isJavaFun);   // true
        System.out.println(isFishTasty); // false
        
        // Boolean in conditions
        int x = 10;
        int y = 9;
        System.out.println(x > y);  // true
        
        // if-else example
        if (isJavaFun) {
            System.out.println("Java is fun!");
        } else {
            System.out.println("Java is not fun.");
        }
    }
}`,
                    explanation: "Booleans are used for logical operations and conditions. Comparison operators return boolean values."
                },
                {
                    id: "characters",
                    title: "Characters",
                    duration: "10 min",
                    content: {
                        description: "The char data type is used to store a single character, enclosed in single quotes.",
                        keyPoints: [
                            "char stores single characters in single quotes",
                            "Uses single quotes: 'A', 'x', '!'",
                            "Uses Unicode encoding (supports all characters)",
                            "Can use escape sequences for special chars"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        char grade = 'A';
        char symbol = '!';
        char unicode = '\\u0041';  // Unicode for 'A'
        
        System.out.println("Grade: " + grade);
        System.out.println("Symbol: " + symbol);
        System.out.println("Unicode: " + unicode);
        
        // Escape sequences
        System.out.println("New\\nLine");   // New line
        System.out.println("Tab\\tHere");   // Tab
        System.out.println("Quote: \\\"");  // Quote
    }
}`,
                    explanation: "Use single quotes for char. Unicode escape is \\u followed by hex code. Common escapes: \\n (newline), \\t (tab), \\\" (quote)."
                },
                {
                    id: "non-primitive",
                    title: "Non-Primitive Types",
                    duration: "10 min",
                    content: {
                        description: "Non-primitive types (reference types) include String, Arrays, and Classes. They can be null and have methods.",
                        keyPoints: [
                            "String stores text (not primitive despite lowercase name)",
                            "Can be null (unlike primitives)",
                            "Have built-in methods",
                            "Arrays are also non-primitive"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // String methods
        String text = "Hello World";
        System.out.println(text.length());        // 11
        System.out.println(text.toUpperCase());  // HELLO WORLD
        System.out.println(text.toLowerCase());  // hello world
        System.out.println(text.indexOf("World")); // 6
        
        // Arrays
        String[] cars = {"Volvo", "BMW", "Ford"};
        System.out.println(cars[0]);  // Volvo
        
        // Can be null
        String name = null;
        System.out.println(name);  // null
    }
}`,
                    explanation: "Strings have useful methods like length(), toUpperCase(), indexOf(). Unlike primitives, reference types can be null."
                }
            ]
        },
        // ==========================================
        // MODULE 3: OPERATORS & CASTING
        // ==========================================
        {
            id: "operators-casting",
            title: "Operators & Casting",
            icon: "🔢",
            lessons: [
                {
                    id: "type-casting",
                    title: "Type Casting",
                    duration: "15 min",
                    content: {
                        description: "Type casting is converting one data type to another. Java supports widening (automatic) and narrowing (manual) casting.",
                        keyPoints: [
                            "Widening: smaller to larger (automatic) - int to double",
                            "Narrowing: larger to smaller (manual) - double to int",
                            "Syntax: (targetType) value",
                            "May lose precision when narrowing"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Widening (automatic)
        int myInt = 9;
        double myDouble = myInt;
        System.out.println(myInt);      // 9
        System.out.println(myDouble);   // 9.0
        
        // Narrowing (manual)
        double myDouble2 = 9.78;
        int myInt2 = (int) myDouble2;
        System.out.println(myDouble2);  // 9.78
        System.out.println(myInt2);     // 9
        
        // Type promotion in expressions
        double result = (5 + 3.0) * 2;
        System.out.println(result);  // 16.0
    }
}`,
                    explanation: "Automatic widening converts int to double. Manual narrowing (casting) is needed to convert double to int, truncating decimal."
                }
            ]
        },
        // ==========================================
        // MODULE 4: CONTROL FLOW
        // ==========================================
        {
            id: "control-flow",
            title: "Control Flow",
            icon: "🔀",
            lessons: [
                {
                    id: "operators",
                    title: "Operators",
                    duration: "15 min",
                    content: {
                        description: "Operators perform operations on variables and values. Java has arithmetic, assignment, comparison, logical, and bitwise operators.",
                        keyPoints: [
                            "Arithmetic: +, -, *, /, %, ++, --",
                            "Assignment: =, +=, -=, *=, /=",
                            "Comparison: ==, !=, >, <, >=, <=",
                            "Logical: &&, ||, !",
                            "Ternary: condition ? value1 : value2"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        int x = 10, y = 5;
        
        // Arithmetic
        System.out.println("Add: " + (x + y));   // 15
        System.out.println("Sub: " + (x - y));   // 5
        System.out.println("Mul: " + (x * y));   // 50
        System.out.println("Div: " + (x / y));   // 2
        System.out.println("Mod: " + (x % y));   // 0
        
        // Comparison
        System.out.println(x == y);  // false
        System.out.println(x > y);   // true
        
        // Logical
        System.out.println(x > 3 && y < 10);  // true
        System.out.println(x > 3 || y > 10);  // true
        System.out.println(!(x > 3));         // false
        
        // Ternary
        int age = 20;
        String result = (age >= 18) ? "Adult" : "Minor";
        System.out.println(result);  // Adult
    }
}`,
                    explanation: "Arithmetic operators perform math. Comparison returns boolean. Logical operators combine boolean values. Ternary is shorthand for if-else."
                },
                {
                    id: "strings",
                    title: "Strings",
                    duration: "15 min",
                    content: {
                        description: "Strings store text. Java provides many methods to manipulate strings, including length, concat, substring, indexOf, replace.",
                        keyPoints: [
                            "Use double quotes: String s = \"Hello\"",
                            "length() returns string length",
                            "toUpperCase() / toLowerCase() for case",
                            "indexOf() finds position of substring",
                            "substring() extracts part of string"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        String greeting = "Hello World";
        
        // Length and case
        System.out.println(greeting.length());        // 11
        System.out.println(greeting.toUpperCase());   // HELLO WORLD
        System.out.println(greeting.toLowerCase());   // hello world
        
        // Find and extract
        System.out.println(greeting.indexOf("World")); // 6
        System.out.println(greeting.substring(0, 5)); // Hello
        
        // Concatenation
        String firstName = "John";
        String lastName = "Doe";
        System.out.println(firstName + " " + lastName);
        System.out.println(firstName.concat(" ").concat(lastName));
        
        // Special characters
        System.out.println("Hello\\nWorld");  // New line
        System.out.println("Hello\\tWorld");  // Tab
    }
}`,
                    explanation: "Strings have many useful methods. Use + or concat() for joining strings. Escape sequences like \\n add special characters."
                },
                {
                    id: "math",
                    title: "Math",
                    duration: "15 min",
                    content: {
                        description: "The Math class has many useful methods for mathematical operations. It also provides constants like Math.PI and Math.E.",
                        keyPoints: [
                            "Math.max(a,b) and Math.min(a,b)",
                            "Math.sqrt(x) for square root",
                            "Math.abs(x) for absolute value",
                            "Math.random() returns 0.0 to 1.0",
                            "Math.round(x) rounds to nearest integer"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Max and min
        System.out.println(Math.max(5, 10));   // 10
        System.out.println(Math.min(5, 10));   // 5
        
        // Square root and absolute
        System.out.println(Math.sqrt(64));     // 8.0
        System.out.println(Math.abs(-4.7));    // 4.7
        
        // Random number (0.0 to 1.0)
        System.out.println(Math.random());     // varies
        
        // Random integer 0-9
        int random = (int)(Math.random() * 10);
        System.out.println(random);
        
        // Rounding
        System.out.println(Math.round(5.7));   // 6
        System.out.println(Math.floor(5.7));   // 5.0
        System.out.println(Math.ceil(5.2));    // 6.0
        
        // Powers
        System.out.println(Math.pow(2, 3));    // 8.0
    }
}`,
                    explanation: "Math class provides static methods for common math operations. Random gives 0.0-1.0, multiply for larger ranges."
                },
                {
                    id: "if-else",
                    title: "If-Else",
                    duration: "15 min",
                    content: {
                        description: "The if statement executes code based on a condition. else executes when condition is false. else if checks multiple conditions.",
                        keyPoints: [
                            "if(condition) { code }",
                            "else executes when if is false",
                            "else if checks another condition",
                            "Shorthand: (condition) ? val1 : val2"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        int score = 85;
        
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }
        
        // Shorthand
        String grade = (score >= 90) ? "A" : (score >= 80) ? "B" : "C or lower";
        System.out.println("Using shorthand: " + grade);
        
        // Nested if
        int age = 20;
        boolean hasLicense = true;
        if (age >= 18) {
            if (hasLicense) {
                System.out.println("Can drive");
            } else {
                System.out.println("Need a license");
            }
        } else {
            System.out.println("Too young");
        }
    }
}`,
                    explanation: "Conditions must evaluate to boolean. else if chains check multiple conditions. Ternary operator is shorthand for simple if-else."
                },
                {
                    id: "switch",
                    title: "Switch",
                    duration: "15 min",
                    content: {
                        description: "Switch statements select one of many code blocks to execute based on a variable's value.",
                        keyPoints: [
                            "switch(expression) compares to case values",
                            "case defines a possible value",
                            "break stops execution from falling through",
                            "default executes if no case matches"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        int day = 3;
        String dayName;
        
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
        }
        System.out.println(dayName);
        
        // Multiple cases (Java 14+)
        int month = 3;
        String season;
        switch (month) {
            case 12, 1, 2 -> season = "Winter";
            case 3, 4, 5 -> season = "Spring";
            case 6, 7, 8 -> season = "Summer";
            case 9, 10, 11 -> season = "Autumn";
            default -> season = "Invalid month";
        }
        System.out.println("Season: " + season);
    }
}`,
                    explanation: "Without break, execution falls through to next case. Default runs when no case matches. Java 14+ supports arrow syntax."
                },
                {
                    id: "while-loop",
                    title: "While Loop",
                    duration: "15 min",
                    content: {
                        description: "While loops repeat a block of code while a condition is true. The condition is checked before each iteration.",
                        keyPoints: [
                            "while(condition) { code }",
                            "Condition checked before each iteration",
                            "May never execute if condition starts false",
                            "do-while always executes at least once"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Basic while loop
        int i = 0;
        while (i < 5) {
            System.out.println("Count: " + i);
            i++;
        }
        
        // Sum numbers 1 to 10
        int sum = 0;
        int num = 1;
        while (num <= 10) {
            sum += num;
            num++;
        }
        System.out.println("Sum: " + sum);
        
        // do-while (executes at least once)
        int j = 0;
        do {
            System.out.println("Do-while: " + j);
            j++;
        } while (j < 3);
    }
}`,
                    explanation: "While loops continue until condition becomes false. Do-while checks condition after executing, so it runs at least once."
                },
                {
                    id: "for-loop",
                    title: "For Loop",
                    duration: "15 min",
                    content: {
                        description: "For loops repeat code a specific number of times. They have three parts: initialization, condition, and increment.",
                        keyPoints: [
                            "for(init; condition; increment) { code }",
                            "Common: for(int i=0; i<n; i++)",
                            "Initialization runs once at start",
                            "Increment runs after each iteration"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Basic for loop
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteration: " + i);
        }
        
        // Sum 1 to 100
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum 1-100: " + sum);
        
        // Loop with step
        for (int i = 0; i <= 10; i += 2) {
            System.out.print(i + " ");  // 0 2 4 6 8 10
        }
        
        // Nested loops (multiplication table)
        System.out.println("\\nMultiplication table:");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.println(i + " x " + j + " = " + (i * j));
            }
        }
    }
}`,
                    explanation: "For loops are ideal when you know iteration count. Nested loops create patterns like multiplication tables."
                },
                {
                    id: "foreach-loop",
                    title: "For-Each Loop",
                    duration: "10 min",
                    content: {
                        description: "For-each loop (enhanced for loop) iterates through arrays or collections without an index variable.",
                        keyPoints: [
                            "for(type var : array) { code }",
                            "Simpler syntax for arrays",
                            "Cannot modify array index",
                            "Cannot iterate backwards"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Cherry"};
        
        // For-each loop
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // With numbers
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);
    }
}`,
                    explanation: "For-each reads each element in order. Use when you don't need the index, just the values."
                },
                {
                    id: "break-continue",
                    title: "Break/Continue",
                    duration: "10 min",
                    content: {
                        description: "Break exits the loop entirely. Continue skips to the next iteration.",
                        keyPoints: [
                            "break exits the loop immediately",
                            "continue skips rest of current iteration",
                            "Can use with labels for nested loops",
                            "Common in search and filter scenarios"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Break example - find first even number
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                System.out.println("First even: " + i);
                break;
            }
        }
        
        // Continue example - skip even numbers
        System.out.println("Odd numbers:");
        for (int i = 1; i <= 5; i++) {
            if (i % 2 == 0) {
                continue;  // Skip even
            }
            System.out.println(i);
        }
        
        // Nested loop with label
        outer: for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    break outer;  // Break outer loop
                }
                System.out.println(i + "," + j);
            }
        }
    }
}`,
                    explanation: "Break stops the loop completely. Continue skips to next iteration. Labels let you break/continue outer loops."
                }
            ]
        },
        // ==========================================
        // MODULE 5: ARRAYS
        // ==========================================
        {
            id: "arrays",
            title: "Arrays",
            icon: "📋",
            lessons: [
                {
                    id: "arrays",
                    title: "Arrays",
                    duration: "15 min",
                    content: {
                        description: "Arrays store multiple values of the same type in a single variable. They have fixed size in Java.",
                        keyPoints: [
                            "type[] arrayName = new type[size]",
                            "type[] arrayName = {val1, val2, val3}",
                            "Access with index: array[0]",
                            "Length: array.length",
                            "Index starts at 0"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Declare and create array
        int[] numbers = new int[5];
        numbers[0] = 10;
        numbers[1] = 20;
        
        // Initialize with values
        String[] cars = {"Volvo", "BMW", "Ford"};
        
        // Access elements
        System.out.println(cars[0]);  // Volvo
        System.out.println(cars.length);  // 3
        
        // Change element
        cars[0] = "Honda";
        System.out.println(cars[0]);  // Honda
    }
}`,
                    explanation: "Arrays are fixed-size. Use new to create with size, or { } for immediate initialization. Length gives size, not last index."
                },
                {
                    id: "loop-arrays",
                    title: "Loop Arrays",
                    duration: "10 min",
                    content: {
                        description: "Use standard for loops or for-each to iterate through arrays.",
                        keyPoints: [
                            "Standard for: use array.length",
                            "For-each: for(type var : array)",
                            "Access both index and value with standard for"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Standard for loop
        System.out.println("Using for loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }
        
        // For-each loop
        System.out.println("\\nUsing for-each:");
        for (int num : numbers) {
            System.out.println(num);
        }
        
        // Find sum and average
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + (double)sum / numbers.length);
    }
}`,
                    explanation: "Standard for loop gives access to index. For-each is cleaner but hides the index."
                },
                {
                    id: "multi-arrays",
                    title: "Multi-Dimensional Arrays",
                    duration: "15 min",
                    content: {
                        description: "Multi-dimensional arrays are arrays of arrays. 2D arrays are most common, used for matrices and grids.",
                        keyPoints: [
                            "int[][] matrix = new int[3][3]",
                            "int[][] arr = {{1,2}, {3,4}, {5,6}}",
                            "Access: arr[row][col]",
                            "Useful for tables and grids"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // 2D array
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Access elements
        System.out.println(matrix[0][0]);  // 1
        System.out.println(matrix[1][2]);  // 6
        
        // Loop through 2D array
        System.out.println("\\nMatrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
                    explanation: "2D arrays are like tables with rows and columns. Outer array is rows, inner is columns."
                }
            ]
        },
        // ==========================================
        // MODULE 6: METHODS
        // ==========================================
        {
            id: "methods",
            title: "Methods",
            icon: "⚙️",
            lessons: [
                {
                    id: "methods",
                    title: "Methods",
                    duration: "15 min",
                    content: {
                        description: "Methods are blocks of code that perform specific tasks. They can be called by name and can return values.",
                        keyPoints: [
                            "Define: returnType methodName() { }",
                            "void if no return value",
                            "Call by: methodName()",
                            "Methods can be called multiple times"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        greet();  // Call method
        greet();  // Call again
        
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);
    }
    
    // No return value
    static void greet() {
        System.out.println("Hello, World!");
    }
    
    // Returns int
    static int add(int a, int b) {
        return a + b;
    }
}`,
                    explanation: "Methods group reusable code. static means it belongs to class, not instance. Return sends value back to caller."
                },
                {
                    id: "method-parameters",
                    title: "Method Parameters",
                    duration: "15 min",
                    content: {
                        description: "Methods can accept parameters (arguments) to work with different values. Parameters are declared in parentheses.",
                        keyPoints: [
                            "Parameters declared in method signature",
                            "Arguments passed when calling",
                            "Can have multiple parameters",
                            "return keyword sends value back"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        sayHello("John", 25);
        sayHello("Jane", 30);
        
        System.out.println(fullName("John", "Doe"));
        
        int sum = calculateSum(10, 20, 30);
        System.out.println("Sum: " + sum);
    }
    
    static void sayHello(String name, int age) {
        System.out.println("Hello " + name + ", age " + age);
    }
    
    static String fullName(String first, String last) {
        return first + " " + last;
    }
    
    static int calculateSum(int... numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
}`,
                    explanation: "Parameters receive values. Varargs (...numbers) allows variable number of arguments. Return sends result back."
                },
                {
                    id: "method-overloading",
                    title: "Method Overloading",
                    duration: "15 min",
                    content: {
                        description: "Method overloading allows multiple methods with the same name but different parameters.",
                        keyPoints: [
                            "Same name, different parameter list",
                            "Different types, different count, or different order",
                            "Compiler picks based on arguments",
                            "Return type alone doesn't distinguish"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        System.out.println(add(5, 3));      // int version
        System.out.println(add(5.5, 3.2));  // double version
        System.out.println(add(1, 2, 3));   // three params
    }
    
    static int add(int a, int b) {
        System.out.println("int version");
        return a + b;
    }
    
    static double add(double a, double b) {
        System.out.println("double version");
        return a + b;
    }
    
    static int add(int a, int b, int c) {
        System.out.println("three params");
        return a + b + c;
    }
}`,
                    explanation: "Overloading provides multiple ways to call a method. Compiler decides which version based on argument types."
                }
            ]
        },
        // ==========================================
        // MODULE 7: OOP
        // ==========================================
        {
            id: "oop",
            title: "Object-Oriented Programming",
            icon: "🏗️",
            lessons: [
                {
                    id: "oop-concepts",
                    title: "OOP Concepts",
                    duration: "20 min",
                    content: {
                        description: "Java is an Object-Oriented language based on classes. Key OOP concepts: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
                        keyPoints: [
                            "Classes are blueprints, objects are instances",
                            "Encapsulation: bundle data with methods, hide details",
                            "Inheritance: derive new classes from existing",
                            "Polymorphism: one name, many forms",
                            "Abstraction: hide complexity, show essentials"
                        ]
                    },
                    example: `// Class definition (blueprint)
class Car {
    // Fields (attributes)
    String brand;
    int speed;
    
    // Method (behavior)
    void drive() {
        System.out.println(brand + " is driving at " + speed + " mph");
    }
}

public class Main {
    public static void main(String[] args) {
        // Create object from class
        Car myCar = new Car();
        myCar.brand = "Toyota";
        myCar.speed = 60;
        myCar.drive();
    }
}`,
                    explanation: "Class defines template. new creates object instance. Fields hold data, methods define behavior."
                },
                {
                    id: "classes-objects",
                    title: "Classes & Objects",
                    duration: "15 min",
                    content: {
                        description: "Classes define the structure and behavior. Objects are instances of classes.",
                        keyPoints: [
                            "class keyword defines a class",
                            "new creates a new object instance",
                            "dot notation accesses fields/methods",
                            "Objects can call methods on themselves"
                        ]
                    },
                    example: `class Bicycle {
    // Fields
    String color;
    int speed;
    
    // Constructor
    Bicycle(String c, int s) {
        color = c;
        speed = s;
    }
    
    // Methods
    void speedUp(int increment) {
        speed += increment;
    }
    
    void printInfo() {
        System.out.println("Color: " + color + ", Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Bicycle bike1 = new Bicycle("Red", 0);
        Bicycle bike2 = new Bicycle("Blue", 5);
        
        bike1.speedUp(10);
        bike1.printInfo();  // Color: Red, Speed: 10
        bike2.printInfo();   // Color: Blue, Speed: 5
    }
}`,
                    explanation: "Constructor initializes new objects. Each object has its own field values. Methods operate on object state."
                },
                {
                    id: "class-methods",
                    title: "Class Methods",
                    duration: "15 min",
                    content: {
                        description: "Methods can be static (class methods) or instance methods. Static methods belong to the class, not objects.",
                        keyPoints: [
                            "static methods: belong to class, call with ClassName.method()",
                            "Instance methods: belong to object, call with obj.method()",
                            "Static can only access static members",
                            "main() is always static"
                        ]
                    },
                    example: `class Helper {
    // Static method
    static void sayHello() {
        System.out.println("Hello!");
    }
    
    // Instance method
    void sayBye() {
        System.out.println("Bye!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Call static method
        Helper.sayHello();
        
        // Create object for instance method
        Helper h = new Helper();
        h.sayBye();
    }
}`,
                    explanation: "Static methods don't need an object. Instance methods need an object to call."
                },
                {
                    id: "constructors",
                    title: "Constructors",
                    duration: "15 min",
                    content: {
                        description: "Constructors initialize new objects. They have the same name as the class and are called with new.",
                        keyPoints: [
                            "Same name as class",
                            "Called when object is created",
                            "Can have multiple (overloaded)",
                            "Default constructor if none defined",
                            "No return type"
                        ]
                    },
                    example: `class Student {
    String name;
    int age;
    
    // Default constructor
    Student() {
        name = "Unknown";
        age = 0;
    }
    
    // Parameterized constructor
    Student(String n, int a) {
        name = n;
        age = a;
    }
    
    void display() {
        System.out.println(name + " is " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student("John", 20);
        
        s1.display();  // Unknown is 0
        s2.display();  // John is 20
    }
}`,
                    explanation: "Constructors set up new objects. Without any constructor, Java provides default one. Multiple constructors allowed."
                },
                {
                    id: "modifiers",
                    title: "Modifiers",
                    duration: "15 min",
                    content: {
                        description: "Java has access modifiers (public, private, protected) and non-access modifiers (static, final, abstract).",
                        keyPoints: [
                            "public: accessible everywhere",
                            "private: accessible only in class",
                            "protected: accessible in package and subclasses",
                            "static: class-level, shared by objects",
                            "final: cannot be changed"
                        ]
                    },
                    example: `class MyClass {
    public String publicVar = "Public";
    private String privateVar = "Private";
    
    public void publicMethod() {
        System.out.println("Public method");
    }
    
    private void privateMethod() {
        System.out.println("Private method");
    }
    
    public String getPrivate() {
        return privateVar;  // Access private within class
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.publicVar);
        obj.publicMethod();
        System.out.println(obj.getPrivate());
        
        // obj.privateVar would cause error
    }
}`,
                    explanation: "Public members are accessible everywhere. Private members are hidden; use getters to access."
                },
                {
                    id: "encapsulation",
                    title: "Encapsulation",
                    duration: "15 min",
                    content: {
                        description: "Encapsulation bundles data and methods together, hiding internal details. Use private fields with public getters/setters.",
                        keyPoints: [
                            "Make fields private",
                            "Provide public getters/setters",
                            "Controls how data is accessed",
                            "Protects object integrity"
                        ]
                    },
                    example: `class Person {
    private String name;
    private int age;
    
    // Getter
    public String getName() {
        return name;
    }
    
    // Setter with validation
    public void setName(String n) {
        name = n;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int a) {
        if (a >= 0) {
            age = a;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("John");
        p.setAge(25);
        
        System.out.println(p.getName() + " is " + p.getAge());
        
        p.setAge(-5);  // Ignored due to validation
        System.out.println(p.getAge());  // Still 25
    }
}`,
                    explanation: "Encapsulation hides data behind methods. Setters can validate before changing values. Getters provide read access."
                },
                {
                    id: "inheritance",
                    title: "Inheritance",
                    duration: "20 min",
                    content: {
                        description: "Inheritance allows a class to inherit fields and methods from another class. The subclass extends the superclass.",
                        keyPoints: [
                            "extends keyword for inheritance",
                            "Subclass inherits non-private members",
                            "Can override inherited methods",
                            "super() calls parent constructor",
                            "Single inheritance only (no multiple)"
                        ]
                    },
                    example: `// Parent class
class Vehicle {
    protected String brand = "Ford";
    
    public void honk() {
        System.out.println("Tuut!");
    }
}

// Child class
class Car extends Vehicle {
    private String model = "Mustang";
    
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.honk();        // From parent
        System.out.println(myCar.brand + " " + myCar.model);
    }
}`,
                    explanation: "Child class inherits parent's fields and methods. protected allows subclass access. Use super() to call parent constructor."
                },
                {
                    id: "polymorphism",
                    title: "Polymorphism",
                    duration: "15 min",
                    content: {
                        description: "Polymorphism means 'many forms'. Method overriding allows a subclass to provide different implementation of inherited methods.",
                        keyPoints: [
                            "Same method name, different behavior",
                            "@Override annotation for overriding",
                            "Parent type can hold child objects",
                            "Runtime method resolution"
                        ]
                    },
                    example: `class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myDog = new Dog();  // Polymorphism
        Animal myCat = new Cat();
        
        myAnimal.sound();  // Some sound
        myDog.sound();     // Woof!
        myCat.sound();     // Meow!
    }
}`,
                    explanation: "Same method call produces different results based on actual object type. Parent reference can hold child objects."
                },
                {
                    id: "abstraction",
                    title: "Abstraction",
                    duration: "15 min",
                    content: {
                        description: "Abstract classes and interfaces hide implementation details, showing only essential features.",
                        keyPoints: [
                            "abstract class cannot be instantiated",
                            "abstract method has no body",
                            "Subclasses must implement abstract methods",
                            "Abstract classes can have concrete methods"
                        ]
                    },
                    example: `abstract class Animal {
    abstract void sound();  // Abstract method
    
    void sleep() {  // Concrete method
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();   // Woof!
        d.sleep();   // Sleeping...
        
        // Animal a = new Animal();  // Error!
    }
}`,
                    explanation: "Abstract methods define what, not how. Subclasses must implement them. Concrete methods can have default behavior."
                },
                {
                    id: "interface",
                    title: "Interface",
                    duration: "20 min",
                    content: {
                        description: "Interfaces define contracts that classes must implement. They contain abstract methods (and default/static in Java 8+).",
                        keyPoints: [
                            "interface keyword defines interface",
                            "implements keyword to use interface",
                            "All methods are abstract by default",
                            "A class can implement multiple interfaces",
                            "Fields are always public static final"
                        ]
                    },
                    example: `interface Animal {
    void sound();  // Abstract method
    
    default void sleep() {  // Default method (Java 8+)
        System.out.println("Zzz");
    }
}

interface Pet {
    void play();
}

class Dog implements Animal, Pet {
    @Override
    public void sound() {
        System.out.println("Woof!");
    }
    
    @Override
    public void play() {
        System.out.println("Playing fetch!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
        d.play();
        d.sleep();
    }
}`,
                    explanation: "Interfaces are contracts. Class implements interface, providing method bodies. Multiple interfaces allowed."
                }
            ]
        },
        // ==========================================
        // MODULE 8: ADVANCED TOPICS
        // ==========================================
        {
            id: "advanced",
            title: "Advanced Topics",
            icon: "📚",
            lessons: [
                {
                    id: "scope",
                    title: "Scope",
                    duration: "10 min",
                    content: {
                        description: "Variables in Java have scope - the region where they can be accessed. Method scope and block scope are common.",
                        keyPoints: [
                            "Method scope: variables inside method",
                            "Block scope: inside { } braces",
                            "Cannot access before declaration",
                            "Static variables accessible from static methods"
                        ]
                    },
                    example: `public class Main {
    static int globalVar = 10;  // Class/static scope
    
    public static void main(String[] args) {
        int localVar = 5;  // Method scope
        
        System.out.println(globalVar);  // OK
        System.out.println(localVar);   // OK
        
        if (true) {
            int blockVar = 20;  // Block scope
            System.out.println(blockVar);
            System.out.println(localVar);  // Can access
        }
        
        // System.out.println(blockVar);  // Error! Not in scope
    }
}`,
                    explanation: "Variables exist only within their declaring block. Global/class variables accessible everywhere in class."
                },
                {
                    id: "recursion",
                    title: "Recursion",
                    duration: "15 min",
                    content: {
                        description: "Recursion is when a method calls itself. It must have a base case to stop, otherwise infinite recursion.",
                        keyPoints: [
                            "Method calls itself",
                            "Must have terminating condition",
                            "Each call adds to call stack",
                            "Use for fractal, tree structures, factorial"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        System.out.println(factorial(5));  // 120
        System.out.println(fibonacci(10));  // 55
        countDown(5);
    }
    
    // Factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120
    static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
    // Fibonacci: 1, 1, 2, 3, 5, 8, 13...
    static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    static void countDown(int n) {
        if (n > 0) {
            System.out.println(n);
            countDown(n - 1);
        }
    }
}`,
                    explanation: "Recursion solves problems by breaking them into smaller versions. Base case stops the recursion. Watch for stack overflow."
                },
                {
                    id: "exception-handling",
                    title: "Exception Handling",
                    duration: "20 min",
                    content: {
                        description: "Exceptions handle runtime errors gracefully. Use try-catch-finally to manage potential errors.",
                        keyPoints: [
                            "try: code that might throw exception",
                            "catch: handle the exception",
                            "finally: always executes",
                            "throw: manually throw exception",
                            "Exception types: ArithmeticException, NullPointerException, etc."
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException
        } catch (Exception e) {
            System.out.println("Something went wrong: " + e.getMessage());
        } finally {
            System.out.println("Always executes");
        }
        
        // Throw example
        try {
            divide(10, 0);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
    
    static void divide(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("Division by zero");
        }
        System.out.println(a / b);
    }
}`,
                    explanation: "Try-catch prevents crashes from exceptions. Finally runs regardless of success or failure. Throw creates custom exceptions."
                },
                {
                    id: "arraylist",
                    title: "ArrayList",
                    duration: "15 min",
                    content: {
                        description: "ArrayList is a resizable array. Unlike arrays, it can grow and shrink dynamically.",
                        keyPoints: [
                            "Import java.util.ArrayList",
                            "ArrayList<Type> list = new ArrayList<>()",
                            "add() to append elements",
                            "get(index) to retrieve",
                            "size() returns count",
                            "remove() deletes elements"
                        ]
                    },
                    example: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<>();
        
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add(0, "Toyota");  // Insert at index
        
        System.out.println(cars);           // All cars
        System.out.println(cars.get(1));    // BMW
        System.out.println(cars.size());   // 4
        
        cars.set(1, "Mercedes");  // Change element
        cars.remove(2);           // Remove by index
        cars.remove("Volvo");     // Remove by value
        
        for (String car : cars) {
            System.out.println(car);
        }
    }
}`,
                    explanation: "ArrayList is flexible. add() adds elements, get() retrieves, set() changes, remove() deletes."
                },
                {
                    id: "hashmap",
                    title: "HashMap",
                    duration: "15 min",
                    content: {
                        description: "HashMap stores key-value pairs. Each key maps to exactly one value, enabling fast lookups.",
                        keyPoints: [
                            "Import java.util.HashMap",
                            "HashMap<KeyType, ValueType> map = new HashMap<>()",
                            "put(key, value) adds/updates",
                            "get(key) retrieves value",
                            "remove(key) deletes entry",
                            "size() returns pair count",
                            "containsKey() checks for key"
                        ]
                    },
                    example: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, String> capitals = new HashMap<>();
        
        capitals.put("USA", "Washington D.C.");
        capitals.put("UK", "London");
        capitals.put("France", "Paris");
        
        System.out.println(capitals);
        System.out.println(capitals.get("USA"));
        
        capitals.put("USA", "Washington");  // Update
        capitals.remove("UK");
        
        System.out.println(capitals.size());
        
        for (String country : capitals.keySet()) {
            System.out.println(country + ": " + capitals.get(country));
        }
    }
}`,
                    explanation: "HashMap stores country-capital pairs. put() adds, get() retrieves by key, keySet() gets all keys."
                }
            ]
        }
    ]
};
