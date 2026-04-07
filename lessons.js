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
                        description: "Java is a powerful, high-level, object-oriented programming language designed to be platform-independent. Write once, run anywhere on any device with JVM.",
                        snippet: "System.out.println(\"Hello, World!\");",
                        keyPoints: [
                            "Owned by Oracle, developed by Sun Microsystems in 1995",
                            "Platform-independent through Java Virtual Machine (JVM)",
                            "Widely used in Android apps, enterprise and web applications",
                            "Syntax similar to C++ with automatic memory management",
                            "Strong static typing prevents many common errors"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
                    explanation: "Every Java program must contain at least one class, and that class must have a main method to serve as the entry point where program execution begins. The main method signature `public static void main(String[] args)` is fixed and tells the JVM where to start running your code. The `public` keyword makes it accessible from anywhere, `static` means it belongs to the class rather than an instance, `void` indicates it doesn't return a value, and `String[] args` allows command-line arguments to be passed to the program. When you run a Java program, the JVM looks for this exact method signature to begin execution."
                },
                {
                    id: "syntax",
                    title: "Java Syntax",
                    duration: "15 min",
                    content: {
                        description: "Java syntax is the set of rules defining how code must be written. Case-sensitive, uses semicolons to end statements and curly braces for code blocks.",
                        snippet: "int x = 5;\nint y = 6;\nSystem.out.println(x + y);",
                        keyPoints: [
                            "Java is case-sensitive - 'Main' and 'main' are different",
                            "Class names use PascalCase, method names use camelCase",
                            "main method required: public static void main(String[] args)",
                            "Statements end with semicolon (;)",
                            "Code blocks enclosed in curly braces { }"
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
                    explanation: "The main method serves as the entry point for every Java application - it's where execution begins when you run the program. The method signature must be exactly `public static void main(String[] args)` for the JVM to recognize it. Inside the main method, `System.out.println()` is used to display output to the console, automatically adding a newline after each call. Variables in Java must be declared with a specific data type (like `int` for integers) before they can be used, and they can be assigned values using the equals sign. The `int x = 5;` statement both declares the variable and initializes it with the value 5. When you perform operations like `x + y`, Java evaluates the expression and can display the result."
                },
                {
                    id: "output",
                    title: "Output",
                    duration: "10 min",
                    content: {
                        description: "Output displays information to users via console. System.out.println() prints text with a newline. Use + to concatenate strings with variables.",
                        snippet: "System.out.println(\"Hello World\");\nSystem.out.println(\"Math: \" + (5 + 5));",
                        keyPoints: [
                            "System.out.println() prints with newline",
                            "System.out.print() prints without newline",
                            "System.out.printf() for formatted output",
                            "Use + to concatenate strings",
                            "Escape sequences: \\n (newline), \\t (tab)"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println("I am learning Java");
        System.out.println("Math: " + (5 + 5));
    }
}`,
                    explanation: "The System.out.println() method is your primary tool for displaying information in Java console applications. Each call to println() outputs its argument to the console and then moves the cursor to the next line, making it easy to create readable output. When you want to combine text with variable values or calculations, you use the + operator for string concatenation. Java automatically converts numbers and other types to strings when they're concatenated with strings. The parentheses around (5 + 5) in the example ensure that the mathematical addition happens before the result is converted to a string and concatenated with 'Math: '. Without the parentheses, Java would concatenate 'Math: ' + 5 first (resulting in 'Math: 5'), then add 5, giving 'Math: 55' instead of the intended 'Math: 10'."
                },
                {
                    id: "comments",
                    title: "Comments",
                    duration: "10 min",
                    content: {
                        description: "Comments are explanations ignored by the compiler. Use // for single-line and /* */ for multi-line comments to document code.",
                        snippet: "// This is a single-line comment\n/* This is a\n   multi-line comment */",
                        keyPoints: [
                            "// for single-line comments",
                            "/* */ for multi-line comments",
                            "/** */ for documentation comments",
                            "Ignored by compiler - no effect on execution"
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
                    explanation: "Comments in Java serve as human-readable explanations embedded within your source code. The compiler treats them as whitespace and completely ignores them when generating bytecode. Single-line comments beginning with // are perfect for brief explanations or notes about individual lines of code. Multi-line comments enclosed in /* */ are ideal for longer explanations that span multiple lines, such as describing the purpose of a method or class. While comments don't affect how your program runs, they dramatically improve code maintainability. Good comments explain the 'why' behind complex logic rather than just the 'what'. During development, comments can also be used to temporarily disable problematic code sections by commenting them out, allowing you to isolate and test specific parts of your program."
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
                        description: "Variables are named containers for storing data values. Java requires explicit type declaration - declare type before using.",
                        snippet: "String name = \"John\";\nint age = 25;\ndouble gpa = 3.5;\nboolean isStudent = true;",
                        keyPoints: [
                            "Syntax: dataType variableName; or dataType variableName = value;",
                            "Common types: int, double, boolean, char, String",
                            "Use final for constants: final int X = 10;",
                            "Names should be descriptive (camelCase)",
                            "Must be initialized before use"
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
                    explanation: "In this example, we declare four variables of different types. The `String` type stores text data and can hold sequences of characters. The `int` type stores whole numbers without decimal points, perfect for counting items or representing ages. The `double` type stores floating-point numbers with decimal precision, ideal for calculations involving fractions like GPAs. The `boolean` type stores only two possible values: `true` or `false`, making it perfect for yes/no conditions. Each variable is declared with a specific type that determines what kind of data it can hold and what operations can be performed on it. Java's strong typing ensures type safety, preventing you from accidentally mixing incompatible data types."
                },
                {
                    id: "print-variables",
                    title: "Print Variables",
                    duration: "10 min",
                    content: {
                        description: "Display variable values using System.out.println(). Use + to concatenate text with variables or perform math.",
                        snippet: "String name = \"John\";\nint age = 25;\nSystem.out.println(\"Hello \" + name);\nSystem.out.println(\"Age: \" + age);",
                        keyPoints: [
                            "Use + to concatenate text and variables",
                            "System.out.println(x) prints variable value",
                            "Math: x + y adds numbers"
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
                    explanation: "The + operator's behavior depends on context. When used between two numbers, it performs mathematical addition. When used between a string and any other type, it performs string concatenation, automatically converting the non-string operand to a string representation. In the example, `System.out.println(x + y);` adds 10 + 20 and prints 30. However, `System.out.println(\"x + y = \" + (x + y));` first evaluates (x + y) to get 30, then concatenates it with the string \"x + y = \" to produce \"x + y = 30\". The parentheses are crucial here - without them, Java would concatenate \"x + y = \" + x first (giving \"x + y = 10\"), then add y, resulting in \"x + y = 1020\" instead of the intended \"x + y = 30\". This demonstrates how operator precedence affects output."
                },
                {
                    id: "multiple-variables",
                    title: "Declare Multiple Variables",
                    duration: "10 min",
                    content: {
                        description: "Declare multiple variables of the same type in one statement using commas. Group related variables together.",
                        snippet: "int x = 5, y = 10, z = 15;\nString firstName = \"John\", lastName = \"Doe\";",
                        keyPoints: [
                            "Syntax: dataType var1, var2, var3;",
                            "With values: dataType var1 = val1, var2 = val2;",
                            "All must be same data type"
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
                    explanation: "In the first line, we declare three integer variables (x, y, z) and initialize them with values 5, 10, and 15 respectively, all in a single statement. This is equivalent to writing three separate declarations but is more concise. The second example shows the same pattern with String variables, where both name and lastName are initialized with string literals. When printing, we concatenate the strings with a space to create a full name. This multiple declaration syntax is especially useful when working with coordinates (x, y, z), dimensions (width, height, depth), or any other related set of variables that should be grouped together. It makes the code more compact while maintaining clarity about which variables are related."
                },
                {
                    id: "identifiers",
                    title: "Identifiers",
                    duration: "10 min",
                    content: {
                        description: "Identifiers are names for variables, methods, classes. Must start with letter, underscore or $. Case-sensitive.",
                        snippet: "int myVariable = 5;\nint _age = 25;\nint $price = 99;",
                        keyPoints: [
                            "Start with letter, underscore (_), or dollar ($)",
                            "Cannot start with a number",
                            "Case-sensitive: myVar and MyVar are different",
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
                    explanation: "Choosing good identifiers is fundamental to writing clear, maintainable code. Start each identifier with a letter, underscore, or dollar sign, then use any combination of those characters plus digits. Java treats uppercase and lowercase letters as different characters, so `age` and `Age` are completely different variables. Avoid using Java's reserved keywords as identifiers - these words have special meanings in the language and cannot be used for naming. Follow conventional naming patterns: variables and methods use camelCase (starting with lowercase), while classes use PascalCase (starting with uppercase). Meaningful names like `studentCount` or `calculateTotal` are much better than cryptic names like `x` or `temp`. While the rules allow unusual characters like underscores at the beginning or dollar signs, these are typically reserved for special cases and should be used judiciously to maintain code readability."
                },
                {
                    id: "data-types",
                    title: "Data Types",
                    duration: "15 min",
                    content: {
                        description: "Java has primitive types (int, double, boolean, char) and reference types (String, arrays, objects).",
                        snippet: "int i = 100000;\ndouble d = 19.99;\nboolean isFun = true;\nchar grade = 'A';\nString name = \"John\";",
                        keyPoints: [
                            "Primitives: byte, short, int, long, float, double, boolean, char",
                            "Reference types: String, arrays, objects",
                            "Integer: int (32-bit), long (64-bit)",
                            "Decimal: double (64-bit), float (32-bit)",
                            "boolean: true or false only"
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
                    explanation: "Primitive data types store their values directly in memory, making them efficient for simple data. When you declare `int i = 100000;`, the value 100000 is stored directly in the variable's memory location. Reference types like String work differently - they store a memory address that points to where the actual string data is stored elsewhere in memory. This indirection allows reference types to handle complex data structures but requires the JVM to perform additional work when accessing the data. The choice between primitive and reference types affects both performance and functionality. Primitives are faster and use less memory for simple values, while reference types provide more flexibility for complex data manipulation."
                },
                {
                    id: "numbers",
                    title: "Numbers",
                    duration: "15 min",
                    content: {
                        description: "Numeric types: int for integers, double for decimals. Use L suffix for long, f for float.",
                        snippet: "int i = 1000000;\nlong bigNum = 15000000000L;\ndouble price = 19.99;\nfloat tax = 0.08f;\ndouble exp = 35e3;  // 35000",
                        keyPoints: [
                            "int: most common integer (32-bit)",
                            "long: very large integers, use L suffix",
                            "double: default decimal (64-bit)",
                            "float: less precise, use f suffix",
                            "Scientific: 35e3 = 35000"
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
                    explanation: "When working with numbers in Java, double is the go-to choice for decimal values because of its precision and ease of use. Float requires the 'f' suffix on literals to distinguish it from double, and while it uses less memory, its reduced precision makes it less suitable for most applications. Scientific notation provides a compact way to represent very large or very small numbers using exponential notation. The 'e' represents 'times 10 to the power of', so 35e3 is 35 multiplied by 10 cubed (1,000), resulting in 35,000. For critical financial calculations where precision is paramount, Java's BigDecimal class offers arbitrary precision arithmetic that avoids the rounding errors inherent in floating-point math."
                },
                {
                    id: "booleans",
                    title: "Booleans",
                    duration: "10 min",
                    content: {
                        description: "boolean stores true or false. Used for conditions, comparisons, and logical operations.",
                        snippet: "boolean isJavaFun = true;\nSystem.out.println(x > y);  // true/false\nif (isJavaFun) { ... }",
                        keyPoints: [
                            "boolean stores true or false",
                            "Comparison operators return boolean",
                            "Logical operators: && (and), || (or), ! (not)",
                            "Used in if/while statements"
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
                    explanation: "Booleans form the backbone of decision-making in Java programs. Every comparison operation produces a boolean result that can be used to control program execution. The if-else statement demonstrates how boolean values determine which code block runs. When `isJavaFun` is true, the first message prints; when false, the else block executes. Comparison operators like `x > y` evaluate relationships between values and return boolean results. Logical operators allow combining multiple conditions: `&&` requires both conditions to be true, `||` requires at least one to be true, and `!` negates a boolean value. This boolean logic enables complex decision trees and conditional execution patterns essential for responsive programs."
                },
                {
                    id: "characters",
                    title: "Characters",
                    duration: "10 min",
                    content: {
                        description: "char stores single characters in single quotes. Supports Unicode - any language character.",
                        snippet: "char grade = 'A';\nchar symbol = '!';\nchar unicode = '\\u0041';  // 'A'",
                        keyPoints: [
                            "Use single quotes: 'A', 'x', '!'",
                            "16-bit Unicode support",
                            "Escape sequences: \\n, \\t, \\\\",
                            "Different from String (double quotes)"
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
                    explanation: "Characters in Java are more powerful than they might appear at first glance. The single quotes distinguish char literals from String literals (which use double quotes). Unicode support means you can work with characters from any language, making Java applications truly global. The escape sequences allow you to include special characters that would otherwise be difficult to type or that have special meaning in code. For example, '\\n' inserts a newline character, '\\t' creates a tab space, and '\\\\' allows you to include a literal backslash. Unicode escapes like '\\u0041' let you specify any character by its Unicode code point, which is especially useful for characters that aren't easily typed on a keyboard."
                },
                {
                    id: "non-primitive",
                    title: "Non-Primitive Types",
                    duration: "10 min",
                    content: {
                        description: "Reference types store references to objects (not values). String, arrays, and custom classes are reference types.",
                        snippet: "String text = \"Hello\";\ntext.length();\ntext.toUpperCase();\nString[] cars = {\"Volvo\", \"BMW\"};",
                        keyPoints: [
                            "Store memory addresses, not values",
                            "String: text methods like length(), toUpperCase()",
                            "Arrays: multiple values of same type",
                            "Can be null",
                            "Have built-in methods"
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
                    explanation: "Reference types provide powerful functionality that primitives can't match. Strings come with numerous built-in methods for text manipulation - length() tells you how many characters are in the string, toUpperCase() and toLowerCase() change case, and indexOf() finds the position of substrings. Arrays allow you to store collections of data efficiently, accessed by index. The ability to be null is both powerful and dangerous - it allows you to represent 'no value' but requires careful null checking to avoid NullPointerException errors. When you assign one reference variable to another, you're copying the memory address, not the object itself, which is why changes to the object are visible through both references."
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
                        description: "Type casting converts between data types. Widening (int to double) is automatic. Narrowing requires explicit (double to int).",
                        snippet: "int myInt = 9;\ndouble myDouble = myInt;  // auto\ndouble d = 9.78;\nint i = (int) d;  // manual, 9",
                        keyPoints: [
                            "Widening: smaller to larger (automatic)",
                            "Narrowing: larger to smaller (manual with (type))",
                            "Syntax: (targetType) value",
                            "Precision may be lost in narrowing"
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
                    explanation: "Type casting is a fundamental concept in Java that allows you to convert between compatible data types. Widening conversions happen automatically because they are guaranteed to be safe - converting an int to a double simply adds decimal places with zeros. Narrowing conversions require explicit casting because they can lose information. When you cast 9.78 to an int, the decimal part (.78) is truncated, not rounded, resulting in 9. The casting operator (targetType) tells the compiler you understand the potential data loss and accept responsibility for it. In expressions like (5 + 3.0) * 2, Java automatically promotes the int 5 to double 3.0 for the addition, then the entire expression evaluates to a double. Understanding these rules helps you write more predictable code and avoid unexpected type conversion behaviors."
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
                        description: "Operators perform operations: arithmetic (+ - * / %), comparison (== != < >), logical (&& || !), ternary (?:).",
                        snippet: "int x = 10, y = 5;\nx + y;   // 15\nx == y;  // false\nx > 3 && y < 10;  // true\nString r = (x > 5) ? \"Big\" : \"Small\";",
                        keyPoints: [
                            "Arithmetic: + - * / % ++ --",
                            "Comparison: == != < > <= >=",
                            "Logical: && (and), || (or), ! (not)",
                            "Ternary: condition ? true : false",
                            "Assignment: += -= *= /="
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
                    explanation: "Operators are the workhorses of Java expressions, enabling everything from simple calculations to complex decision-making. Arithmetic operators handle mathematical operations, with modulo (%) giving remainders from division and increment/decrement providing convenient counting mechanisms. Comparison operators always produce boolean results, making them perfect for conditions. Logical operators combine boolean values, with short-circuit evaluation optimizing performance by stopping evaluation when the result is determined. The ternary operator offers a compact way to choose between two values based on a condition. Understanding these operators and their precedence rules allows you to write clear, efficient expressions that behave predictably."
                },
                {
                    id: "strings",
                    title: "Strings",
                    duration: "15 min",
                    content: {
                        description: "Strings are objects with built-in methods. Use double quotes. Immutable - methods return new strings.",
                        snippet: "String s = \"Hello\";\ns.length();\ns.toUpperCase();\ns.indexOf(\"o\");\ns.substring(0, 5);",
                        keyPoints: [
                            "Use double quotes: \"Hello\"",
                            "Methods: length(), toUpperCase(), toLowerCase()",
                            "indexOf(), substring() for searching",
                            "equals() for comparison (not ==)",
                            "Immutable - creates new strings"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        String greeting = "Hello World";
        
        // Length and case manipulation
        System.out.println("Length: " + greeting.length());        // 11
        System.out.println("Upper: " + greeting.toUpperCase());   // HELLO WORLD
        System.out.println("Lower: " + greeting.toLowerCase());   // hello world
        
        // Finding and extracting substrings
        System.out.println("Index of World: " + greeting.indexOf("World")); // 6
        System.out.println("Substring: " + greeting.substring(0, 5)); // Hello
        System.out.println("Substring from index: " + greeting.substring(6)); // World
        
        // Concatenation methods
        String firstName = "John";
        String lastName = "Doe";
        System.out.println("Full name: " + firstName + " " + lastName);
        System.out.println("Concat method: " + firstName.concat(" ").concat(lastName));
        
        // String comparison
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        System.out.println("s1 == s2: " + (s1 == s2));           // true (same reference)
        System.out.println("s1 == s3: " + (s1 == s3));           // false (different references)
        System.out.println("s1.equals(s3): " + s1.equals(s3));   // true (same content)
        
        // Special characters and escaping
        System.out.println("Hello\\nWorld");  // New line
        System.out.println("Hello\\tWorld");  // Tab
        System.out.println("Quote: \\\"Hello\\\"");  // Escaped quotes
        System.out.println("Path: C:\\\\Users\\\\file.txt");  // Windows path
    }
}`,
                    explanation: "Java strings are powerful objects with extensive functionality for text processing. The immutability of strings means that operations like toUpperCase() create new string objects rather than modifying the existing one, which is why you need to assign the result back to a variable or use it directly. String concatenation with the + operator is convenient but can be inefficient in loops due to creating many temporary objects - StringBuilder is preferred for such cases. The equals() method compares actual string content, while == compares object references, which is crucial for correct string comparisons. Understanding these concepts enables robust text manipulation in Java applications."
                },
                {
                    id: "math",
                    title: "Math",
                    duration: "15 min",
                    content: {
                        description: "Math class provides static methods for math operations: max, min, abs, sqrt, pow, random.",
                        snippet: "Math.PI;\nMath.max(5, 10);\nMath.min(3, 8);\nMath.abs(-5);\nMath.sqrt(64);  // 8\nMath.pow(2, 3);  // 8\nMath.random();  // 0.0 to 1.0",
                        keyPoints: [
                            "Static class - no instantiation needed",
                            "Math.PI, Math.E for constants",
                            "Math.max(), Math.min() for comparison",
                            "Math.abs() for absolute value",
                            "Math.sqrt(), Math.pow() for powers",
                            "Math.random() for random 0.0-1.0"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Constants
        System.out.println("PI: " + Math.PI);        // 3.141592653589793
        System.out.println("E: " + Math.E);          // 2.718281828459045
        
        // Comparison operations
        System.out.println("Max of 5, 10: " + Math.max(5, 10));   // 10
        System.out.println("Min of 5, 10: " + Math.min(5, 10));   // 5
        System.out.println("Max of doubles: " + Math.max(3.14, 2.71)); // 3.14
        
        // Absolute value and square root
        System.out.println("Absolute value: " + Math.abs(-4.7));    // 4.7
        System.out.println("Square root of 64: " + Math.sqrt(64));  // 8.0
        System.out.println("Square root of 2: " + Math.sqrt(2));    // 1.414...
        
        // Powers and exponents
        System.out.println("2^3: " + Math.pow(2, 3));        // 8.0
        System.out.println("10^2: " + Math.pow(10, 2));      // 100.0
        System.out.println("Square root via pow: " + Math.pow(16, 0.5)); // 4.0
        
        // Random numbers
        System.out.println("Random (0.0-1.0): " + Math.random());
        System.out.println("Random integer 0-9: " + (int)(Math.random() * 10));
        System.out.println("Random integer 1-6: " + ((int)(Math.random() * 6) + 1));
        
        // Rounding functions
        double num = 5.7;
        System.out.println("Round: " + Math.round(num));     // 6 (rounds to nearest)
        System.out.println("Floor: " + Math.floor(num));     // 5.0 (rounds down)
        System.out.println("Ceil: " + Math.ceil(num));       // 6.0 (rounds up)
        
        // Trigonometric functions (angles in radians)
        double angle = Math.PI / 4;  // 45 degrees
        System.out.println("Sin(45°): " + Math.sin(angle));  // 0.707...
        System.out.println("Cos(45°): " + Math.cos(angle));  // 0.707...
        System.out.println("Tan(45°): " + Math.tan(angle));  // 1.0
        
        // Advanced functions
        System.out.println("e^2: " + Math.exp(2));           // 7.389...
        System.out.println("Natural log of e: " + Math.log(Math.E)); // 1.0
        System.out.println("Log base 10 of 100: " + Math.log10(100)); // 2.0
    }
}`,
                    explanation: "The Math class serves as Java's mathematical powerhouse, providing precise implementations of essential mathematical functions that would be cumbersome to implement manually. All methods are static, eliminating the need for object creation and making them readily accessible throughout your programs. The random() method uses a pseudorandom number generator suitable for most applications, though java.security.SecureRandom should be used for cryptographic purposes. Trigonometric functions expect angles in radians rather than degrees, so conversion may be necessary when working with degree-based measurements. Understanding these mathematical utilities enables the creation of sophisticated applications involving calculations, simulations, and data analysis."
                },
                {
                    id: "if-else",
                    title: "If-Else",
                    duration: "15 min",
                    content: {
                        description: "if-else executes code based on boolean conditions. Use else if for multiple conditions.",
                        snippet: "if (score >= 90) {\n    grade = \"A\";\n} else if (score >= 80) {\n    grade = \"B\";\n} else {\n    grade = \"F\";\n}",
                        keyPoints: [
                            "if (condition) { code }",
                            "else { code } for alternative",
                            "else if for multiple conditions",
                            "Ternary: condition ? true : false"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        int score = 85;
        String grade;
        
        // Basic if-else structure
        if (score >= 90) {
            grade = "A";
            System.out.println("Excellent work!");
        } else if (score >= 80) {
            grade = "B";
            System.out.println("Good job!");
        } else if (score >= 70) {
            grade = "C";
            System.out.println("Satisfactory");
        } else if (score >= 60) {
            grade = "D";
            System.out.println("Needs improvement");
        } else {
            grade = "F";
            System.out.println("Failed - try again");
        }
        System.out.println("Final grade: " + grade);
        
        // Ternary operator for simple assignments
        String passFail = (score >= 60) ? "PASS" : "FAIL";
        System.out.println("Result: " + passFail);
        
        // Nested conditions for complex logic
        int age = 20;
        boolean hasLicense = true;
        double gpa = 3.5;
        
        if (age >= 18) {
            if (hasLicense) {
                if (gpa >= 3.0) {
                    System.out.println("Eligible for premium driving discount");
                } else {
                    System.out.println("Eligible for standard driving discount");
                }
            } else {
                System.out.println("Must obtain license first");
            }
        } else {
            System.out.println("Too young to drive");
        }
        
        // Complex boolean expressions
        boolean isEligible = (age >= 18) && hasLicense && (gpa >= 2.0);
        System.out.println("Scholarship eligible: " + isEligible);
        
        // Short-circuit evaluation example
        int x = 5;
        if ((x > 3) && (x++ < 10)) {  // x++ not executed if first condition false
            System.out.println("Both conditions true");
        }
        System.out.println("x is now: " + x);  // x = 6 (increment occurred)
    }
}`,
                    explanation: "If-else statements form the foundation of decision-making in Java, enabling programs to execute different code paths based on runtime conditions. The structure allows for simple binary decisions, multi-way branching with else-if chains, and complex nested logic for sophisticated decision trees. Boolean expressions combine multiple conditions using logical operators, with short-circuit evaluation providing performance benefits by avoiding unnecessary computations. The ternary operator offers a concise alternative for simple conditional assignments, while proper indentation and brace usage ensures code clarity and prevents common logic errors. Mastering these constructs enables the creation of responsive, intelligent applications that can handle diverse scenarios and user inputs."
                },
                {
                    id: "switch",
                    title: "Switch",
                    duration: "15 min",
                    content: {
                        description: "Switch executes code based on variable value. Compare against multiple case labels. Use break to prevent fall-through.",
                        snippet: "switch(day) {\n    case 1: dayName = \"Mon\"; break;\n    case 2: dayName = \"Tue\"; break;\n    default: dayName = \"Unknown\";\n}",
                        keyPoints: [
                            "switch(variable) { case value: }",
                            "break prevents fall-through",
                            "default for unmatched values",
                            "Supports int, char, String, enum",
                            "Java 14+: arrow syntax (->)"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Traditional switch with break statements
        int dayOfWeek = 3;
        String dayName;
        
        switch (dayOfWeek) {
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
                break;
        }
        System.out.println("Day: " + dayName);
        
        // Enhanced switch with arrow syntax (Java 14+)
        int month = 7;
        String season = switch (month) {
            case 12, 1, 2 -> "Winter";
            case 3, 4, 5 -> "Spring";
            case 6, 7, 8 -> "Summer";
            case 9, 10, 11 -> "Autumn";
            default -> "Invalid month";
        };
        System.out.println("Season: " + season);
        
        // Switch with String values
        String grade = "B";
        String description;
        
        switch (grade) {
            case "A":
                description = "Excellent work!";
                break;
            case "B":
                description = "Good job!";
                break;
            case "C":
                description = "Satisfactory performance";
                break;
            case "D":
                description = "Needs improvement";
                break;
            case "F":
                description = "Failed - must retake";
                break;
            default:
                description = "Invalid grade";
                break;
        }
        System.out.println("Grade description: " + description);
        
        // Switch with fall-through (multiple cases share code)
        int number = 2;
        switch (number) {
            case 1:
                System.out.println("One");
                break;
            case 2:
            case 3:
                System.out.println("Two or Three");  // Both 2 and 3 execute this
                break;
            case 4:
                System.out.println("Four");
                break;
            default:
                System.out.println("Other number");
        }
        
        // Switch expression returning a value
        int day = 5;
        boolean isWeekend = switch (day) {
            case 1, 2, 3, 4, 5 -> false;  // Monday to Friday
            case 6, 7 -> true;             // Saturday, Sunday
            default -> false;
        };
        System.out.println("Is weekend: " + isWeekend);
    }
}`,
                    explanation: "Switch statements excel when you need to branch based on a single variable's discrete values, offering cleaner code than lengthy if-else chains. The traditional syntax requires break statements to prevent fall-through, where execution continues to subsequent cases. Modern Java's enhanced switch with arrow syntax eliminates this issue and supports more concise expressions. Multiple case labels can share the same code block, and switch expressions can directly return values. While powerful for menu systems and state-based logic, switches work best when the number of possible values is reasonable and the comparisons are equality-based."
                },
                {
                    id: "while-loop",
                    title: "While Loop",
                    duration: "15 min",
                    content: {
                        description: "While loops repeat while condition is true. do-while runs at least once. Modify condition inside loop!",
                        snippet: "while (i > 0) {\n    System.out.println(i);\n    i--;\n}\n\n// do-while: runs at least once\ndo {\n    System.out.println(i);\n    i--;\n} while (i > 0);",
                        keyPoints: [
                            "while (condition) { code }",
                            "do { code } while (condition); - runs once minimum",
                            "Modify condition inside loop",
                            "break exits, continue skips iteration"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Basic while loop - countdown
        int countdown = 5;
        while (countdown > 0) {
            System.out.println("Countdown: " + countdown);
            countdown--;  // Decrement to eventually make condition false
        }
        System.out.println("Blast off!");
        
        // Sum calculation with while loop
        int sum = 0;
        int number = 1;
        while (number <= 10) {
            sum += number;
            number++;
        }
        System.out.println("Sum of 1-10: " + sum);
        
        // Input validation using while loop
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        int userInput = 0;
        while (userInput <= 0) {
            System.out.print("Enter a positive number: ");
            if (scanner.hasNextInt()) {
                userInput = scanner.nextInt();
                if (userInput <= 0) {
                    System.out.println("Number must be positive. Try again.");
                }
            } else {
                System.out.println("Invalid input. Please enter a number.");
                scanner.next(); // Clear invalid input
            }
        }
        System.out.println("You entered: " + userInput);
        
        // Do-while loop - menu system (executes at least once)
        int choice;
        do {
            System.out.println("\\nMenu:");
            System.out.println("1. Start game");
            System.out.println("2. Load game");
            System.out.println("3. Quit");
            System.out.print("Choose option: ");
            
            choice = scanner.nextInt();
            
            switch (choice) {
                case 1:
                    System.out.println("Starting new game...");
                    break;
                case 2:
                    System.out.println("Loading game...");
                    break;
                case 3:
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please select 1-3.");
            }
        } while (choice != 3);  // Continue until user chooses to quit
        
        // Infinite loop with break condition
        int attempts = 0;
        while (true) {  // Infinite loop
            attempts++;
            System.out.println("Attempt #" + attempts);
            
            if (attempts >= 3) {
                System.out.println("Maximum attempts reached. Exiting.");
                break;  // Exit the infinite loop
            }
            
            // Simulate some work
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                // Handle interruption
            }
        }
        
        // While loop with continue - skip even numbers
        int counter = 0;
        while (counter < 10) {
            counter++;
            if (counter % 2 == 0) {
                continue;  // Skip even numbers, go to next iteration
            }
            System.out.println("Odd number: " + counter);
        }
        
        scanner.close();
    }
}`,
                    explanation: "While loops provide flexible iteration when the number of repetitions cannot be predetermined, making them essential for interactive programs and dynamic data processing. The key difference from for loops is that while loops separate the condition checking from the iteration logic, offering more control over loop execution. Do-while loops guarantee execution, making them perfect for menus and input validation. Careful management of loop variables is crucial to prevent infinite loops, and break/continue statements provide additional control flow options. Understanding these patterns enables the creation of responsive applications that can handle varying amounts of data and user interactions."
                },
                {
                    id: "for-loop",
                    title: "For Loop",
                    duration: "15 min",
                    content: {
                        description: "For loops repeat a fixed number of times. Syntax: init; condition; increment. Ideal for counting and arrays.",
                        snippet: "for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}\n\n// For-each\nfor (String car : cars) {\n    System.out.println(car);\n}",
                        keyPoints: [
                            "for (init; condition; increment)",
                            "Init: int i = 1",
                            "Condition: i <= 5",
                            "Increment: i++",
                            "For-each: for (type item : collection)"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Basic counting for loop
        System.out.println("Counting up:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
        
        // Countdown with different increment
        System.out.println("\\nCounting down:");
        for (int i = 10; i >= 1; i--) {
            System.out.println("Count: " + i);
        }
        
        // Sum calculation
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("\\nSum of 1-100: " + sum);
        
        // Multiple variables in initialization
        System.out.println("\\nFibonacci sequence:");
        for (int a = 0, b = 1, count = 1; count <= 10; a = b, b = a + b, count++) {
            System.out.print(a + " ");
        }
        
        // Nested loops - multiplication table
        System.out.println("\\n\\nMultiplication Table:");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.printf("%2d ", i * j);  // Right-aligned formatting
            }
            System.out.println();
        }
        
        // Loop with complex condition
        System.out.println("\\nEven numbers with complex condition:");
        for (int i = 0; i < 20 && i * i < 100; i += 2) {
            System.out.print(i + " ");
        }
        
        // Loop without initialization (variable declared outside)
        int counter = 0;
        for (; counter < 5; counter++) {
            System.out.println("\\nIteration: " + counter);
        }
        
        // Infinite loop with break condition
        System.out.println("\\nSimulating work with break:");
        for (int attempts = 1; ; attempts++) {
            System.out.println("Attempt " + attempts);
            if (attempts >= 3) {
                System.out.println("Success after " + attempts + " attempts!");
                break;
            }
            
            // Simulate some work
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                // Handle interruption
            }
        }
        
        // Loop with continue - skip multiples of 3
        System.out.println("\\nNumbers 1-20, skipping multiples of 3:");
        for (int i = 1; i <= 20; i++) {
            if (i % 3 == 0) {
                continue;  // Skip to next iteration
            }
            System.out.print(i + " ");
        }
    }
}`,
                    explanation: "For loops excel when you need to execute code a specific number of times or iterate through a range of values. The three-part structure ensures that initialization, condition checking, and iteration are clearly defined and executed in the correct order. While the classic for loop is powerful and flexible, Java also provides the enhanced for-each loop for simpler array iteration. Nested for loops enable complex patterns like matrix operations and multi-dimensional data processing. Understanding for loop mechanics is fundamental to efficient Java programming, especially when working with arrays, collections, and algorithmic computations."
                },
                {
                    id: "foreach-loop",
                    title: "For-Each Loop",
                    duration: "10 min",
                    content: {
                        description: "The enhanced for-each loop, introduced in Java 5, provides a simplified syntax for iterating through arrays and collections without the complexity of index management. This loop type eliminates the need for counter variables and bounds checking, making code more readable and less error-prone. The for-each loop is ideal when you need to process every element in a collection but don't require access to the index position. It works with arrays, Lists, Sets, and any other Iterable collection, making it a fundamental tool for modern Java development.",
                        keyPoints: [
                            "Enhanced for-each syntax: for(type element : collection) { statements }",
                            "Automatically iterates through all elements without index management",
                            "Works with arrays, ArrayList, HashSet, and any Iterable collection",
                            "Element variable is read-only within the loop - cannot modify the collection structure",
                            "No access to element index - use traditional for loop if index is needed",
                            "Cannot iterate backwards or with custom step sizes",
                            "Prevents IndexOutOfBoundsException by design",
                            "Cleaner and more readable than traditional indexed loops",
                            "Cannot modify array/collection size during iteration (would cause ConcurrentModificationException)",
                            "Best used when you need to read/process all elements without index-based operations"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Array iteration
        String[] fruits = {"Apple", "Banana", "Cherry", "Date", "Elderberry"};
        System.out.println("Fruits:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        // Numeric array processing
        int[] numbers = {10, 20, 30, 40, 50};
        int sum = 0;
        int count = 0;
        for (int num : numbers) {
            sum += num;
            count++;
        }
        System.out.println("\\nSum: " + sum);
        System.out.println("Average: " + (double) sum / count);
        
        // ArrayList iteration
        java.util.ArrayList<String> colors = new java.util.ArrayList<>();
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");
        colors.add("Yellow");
        
        System.out.println("\\nColors in ArrayList:");
        for (String color : colors) {
            System.out.println("- " + color);
        }
        
        // HashSet iteration (unordered)
        java.util.HashSet<Integer> uniqueNumbers = new java.util.HashSet<>();
        uniqueNumbers.add(5);
        uniqueNumbers.add(2);
        uniqueNumbers.add(8);
        uniqueNumbers.add(1);
        uniqueNumbers.add(5);  // Duplicate, won't be added
        
        System.out.println("\\nUnique numbers in HashSet:");
        for (int num : uniqueNumbers) {
            System.out.println("- " + num);
        }
        
        // Multi-dimensional array
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\\nMatrix elements:");
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
        
        // Finding maximum value
        double[] prices = {19.99, 15.50, 25.00, 12.75, 30.25};
        double maxPrice = Double.MIN_VALUE;
        for (double price : prices) {
            if (price > maxPrice) {
                maxPrice = price;
            }
        }
        System.out.println("\\nMaximum price: $" + maxPrice);
        
        // String processing
        String sentence = "The quick brown fox jumps over the lazy dog";
        String[] words = sentence.split(" ");
        int wordCount = 0;
        for (String word : words) {
            wordCount++;
            System.out.println("Word " + wordCount + ": " + word);
        }
        System.out.println("Total words: " + wordCount);
    }
}`,
                    explanation: "The enhanced for-each loop simplifies iteration by hiding the complexity of index management and bounds checking. It's the preferred choice when you need to process all elements in a collection without needing the index position. While you cannot modify the collection structure during iteration or access elements by index, the for-each loop provides cleaner, more readable code that is less prone to off-by-one errors. For index-based operations or modifications during iteration, the traditional for loop remains necessary. Understanding when to use each type of loop is key to writing efficient and maintainable Java code."
                },
                {
                    id: "break-continue",
                    title: "Break/Continue",
                    duration: "10 min",
                    content: {
                        description: "Break and continue are powerful control flow statements that provide fine-grained control over loop execution. Break immediately terminates the entire loop, while continue skips the remaining code in the current iteration and moves to the next iteration. These statements are essential for implementing efficient search algorithms, input validation, and conditional processing within loops. When working with nested loops, labeled breaks and continues allow you to specify which loop level should be affected, providing even more precise control over program flow.",
                        keyPoints: [
                            "break statement immediately exits the current loop, regardless of the loop condition",
                            "continue statement skips the rest of the current iteration and proceeds to the next iteration",
                            "Both statements can be used in while, do-while, for, and enhanced for-each loops",
                            "break is commonly used in search operations to stop when the target is found",
                            "continue is useful for filtering operations, skipping unwanted elements",
                            "Labeled breaks/continues work with nested loops, allowing control of outer loops",
                            "Labels are identifiers followed by a colon, placed before the loop statement",
                            "Unlabeled break/continue affect only the innermost loop they appear in",
                            "break in switch statements exits the switch block (different from loop break)",
                            "Overuse can make code harder to follow - prefer clear loop conditions when possible"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Break - find first number divisible by 7
        System.out.println("Finding first number divisible by 7:");
        for (int i = 1; i <= 50; i++) {
            if (i % 7 == 0) {
                System.out.println("Found: " + i);
                break;  // Exit loop immediately
            }
        }
        
        // Continue - print odd numbers only
        System.out.println("\\nOdd numbers from 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                continue;  // Skip even numbers
            }
            System.out.println(i);
        }
        
        // Break in while loop - password attempt limit
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        int attempts = 0;
        final String CORRECT_PASSWORD = "java123";
        
        System.out.println("\\nPassword verification (max 3 attempts):");
        while (true) {
            attempts++;
            System.out.print("Enter password (attempt " + attempts + "): ");
            String input = scanner.nextLine();
            
            if (input.equals(CORRECT_PASSWORD)) {
                System.out.println("Access granted!");
                break;  // Success - exit loop
            } else if (attempts >= 3) {
                System.out.println("Too many failed attempts. Access denied.");
                break;  // Max attempts reached - exit loop
            } else {
                System.out.println("Incorrect password. Try again.");
            }
        }
        
        // Continue with complex conditions - process valid data only
        int[] data = {10, -5, 20, 0, 15, -8, 25};
        System.out.println("\\nProcessing positive numbers only:");
        int sum = 0;
        for (int num : data) {
            if (num <= 0) {
                continue;  // Skip non-positive numbers
            }
            System.out.println("Processing: " + num);
            sum += num;
        }
        System.out.println("Sum of positive numbers: " + sum);
        
        // Labeled break - exit outer loop from inner loop
        System.out.println("\\nMatrix search with labeled break:");
        int[][] matrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        
        int target = 7;
        boolean found = false;
        
        outerLoop:  // Label for outer loop
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) {
                    System.out.println("Found " + target + " at position [" + i + "][" + j + "]");
                    found = true;
                    break outerLoop;  // Break out of both loops
                }
            }
        }
        
        if (!found) {
            System.out.println(target + " not found in matrix");
        }
        
        // Labeled continue - skip to next iteration of outer loop
        System.out.println("\\nSkipping rows with negative numbers:");
        int[][] dataMatrix = {
            {1, 2, 3},
            {-1, 5, 6},
            {7, 8, 9},
            {2, -3, 4}
        };
        
        outer: for (int i = 0; i < dataMatrix.length; i++) {
            // Check if row contains negative number
            for (int j = 0; j < dataMatrix[i].length; j++) {
                if (dataMatrix[i][j] < 0) {
                    System.out.println("Skipping row " + i + " (contains negative)");
                    continue outer;  // Skip to next row
                }
            }
            
            // Process row if no negatives found
            System.out.print("Row " + i + ": ");
            for (int num : dataMatrix[i]) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
        
        scanner.close();
    }
}`,
                    explanation: "Break and continue statements provide essential control over loop execution, enabling efficient algorithms and clean code structure. Break is invaluable for search operations and early termination scenarios, while continue excels at filtering and skipping unwanted iterations. Labeled versions offer precise control in nested loop situations, allowing you to break out of or continue specific loop levels. While powerful, these statements should be used judiciously to maintain code readability - clear loop conditions are often preferable when they don't complicate the logic excessively."
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
                        description: "Arrays store multiple values of same type with fixed size. Zero-based indexing. Access via index.",
                        snippet: "int[] nums = {1, 2, 3, 4, 5};\nnums[0];  // 1\nnums.length;  // 5\n\nString[] cars = {\"Volvo\", \"BMW\"};\ncars[1] = \"Ford\";",
                        keyPoints: [
                            "type[] name = {values}",
                            "type[] name = new type[size]",
                            "Zero-based: index 0 is first",
                            ".length for size",
                            "Fixed size - use ArrayList for dynamic"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Method 1: Declare and allocate with new keyword
        int[] numbers = new int[5];  // Creates array of 5 integers, all initialized to 0
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        System.out.println("Array at index 0: " + numbers[0]);
        System.out.println("Array length: " + numbers.length);
        
        // Method 2: Declare and initialize with values
        String[] cars = {"Volvo", "BMW", "Ford", "Toyota"};
        System.out.println("First car: " + cars[0]);
        System.out.println("Last car: " + cars[cars.length - 1]);
        
        // Method 3: Declare, then initialize
        double[] prices;
        prices = new double[]{19.99, 15.50, 25.00, 12.75};
        
        // Accessing and modifying elements
        cars[1] = "Mercedes";  // Change BMW to Mercedes
        System.out.println("Modified car: " + cars[1]);
        
        // Array of different types
        boolean[] flags = {true, false, true, false};
        char[] letters = {'J', 'a', 'v', 'a'};
        
        // Default initialization demonstration
        int[] emptyArray = new int[3];
        System.out.println("Default int values: " + emptyArray[0] + ", " + emptyArray[1] + ", " + emptyArray[2]);
        
        String[] stringArray = new String[3];
        System.out.println("Default String values: " + stringArray[0] + ", " + stringArray[1] + ", " + stringArray[2]);
        
        // Array bounds checking
        try {
            // This will throw ArrayIndexOutOfBoundsException
            System.out.println(numbers[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // Passing arrays to methods
        int[] data = {1, 2, 3, 4, 5};
        System.out.println("Sum of array: " + calculateSum(data));
        
        // Array of arrays (multidimensional)
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("Matrix element [1][2]: " + matrix[1][2]);  // 6
    }
    
    // Method that accepts an array parameter
    static int calculateSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }
}`,
                    explanation: "Arrays are powerful but require careful handling due to their fixed size and zero-based indexing. The choice between different initialization methods depends on whether you know the values at compile time. Arrays are passed by reference to methods, allowing modifications to affect the original array. While arrays provide fast access and are memory-efficient, they lack the flexibility of dynamic collections like ArrayList. Understanding array bounds and proper indexing is crucial to avoid runtime exceptions that can crash your programs."
                },
                {
                    id: "loop-arrays",
                    title: "Loop Arrays",
                    duration: "10 min",
                    content: {
                        description: "Iterating through arrays is a fundamental operation in Java programming, and there are multiple approaches depending on your needs. The standard for loop provides complete control with index access, while the enhanced for-each loop offers cleaner syntax for simple element processing. Choosing the right iteration method depends on whether you need index information, plan to modify elements during iteration, or simply want to process each element. Understanding both approaches enables you to write efficient and readable array processing code.",
                        keyPoints: [
                            "Standard for loop (for(int i = 0; i < array.length; i++)) provides index access and full control",
                            "Enhanced for-each loop (for(type element : array)) provides cleaner syntax without index access",
                            "Use standard for loop when you need to modify array elements or access by index",
                            "Use for-each loop when you only need to read/process each element without index operations",
                            "For-each loop prevents IndexOutOfBoundsException by design",
                            "Standard for loop allows skipping elements or processing in reverse order",
                            "Both loops work with arrays of any type (primitive or reference)",
                            "For-each loop creates a copy of primitive values, changes don't affect original array",
                            "For-each loop with objects provides references, allowing modification of object state",
                            "Nested loops enable processing of multi-dimensional arrays and complex data structures"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        String[] fruits = {"Apple", "Banana", "Cherry", "Date", "Elderberry"};
        
        // Standard for loop - full control with index
        System.out.println("Standard for loop with index access:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }
        
        // Standard for loop - modify elements
        System.out.println("\\nDoubling values with standard for loop:");
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] *= 2;  // Modify the original array
            System.out.println("numbers[" + i + "] = " + numbers[i]);
        }
        
        // For-each loop - clean syntax for reading
        System.out.println("\\nFor-each loop for reading:");
        for (int num : numbers) {
            System.out.println("Value: " + num);
        }
        
        // For-each loop - calculate statistics
        int sum = 0;
        int count = 0;
        int max = Integer.MIN_VALUE;
        for (int num : numbers) {
            sum += num;
            count++;
            if (num > max) max = num;
        }
        System.out.println("\\nStatistics:");
        System.out.println("Sum: " + sum);
        System.out.println("Count: " + count);
        System.out.println("Average: " + (double)sum / count);
        System.out.println("Maximum: " + max);
        
        // For-each with different data types
        System.out.println("\\nProcessing string array:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit + " (length: " + fruit.length() + ")");
        }
        
        // Standard for loop - reverse iteration
        System.out.println("\\nReverse iteration:");
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }
        
        // Standard for loop - skip elements
        System.out.println("\\nProcessing every other element:");
        for (int i = 0; i < numbers.length; i += 2) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }
        
        // For-each with break/continue
        System.out.println("\\nFinding first even number:");
        int[] mixedNumbers = {1, 3, 5, 6, 7, 8, 9};
        for (int num : mixedNumbers) {
            if (num % 2 == 0) {
                System.out.println("First even number: " + num);
                break;  // Exit loop when found
            }
        }
        
        // Nested loops for 2D array processing
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\\nMatrix processing:");
        for (int i = 0; i < matrix.length; i++) {
            System.out.print("Row " + i + ": ");
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        // For-each with nested loops
        System.out.println("\\nMatrix with for-each:");
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }
}`,
                    explanation: "Array iteration requires choosing the right loop type based on your specific needs. Standard for loops provide maximum control and are essential when you need index-based operations, modifications, or non-sequential access patterns. For-each loops offer cleaner, more readable code for simple element processing and eliminate the possibility of index errors. Both approaches have their place in professional Java development, and understanding their strengths enables you to write more efficient and maintainable array processing code."
                },
                {
                    id: "multi-arrays",
                    title: "Multi-Dimensional Arrays",
                    duration: "15 min",
                    content: {
                        description: "Multi-dimensional arrays extend the concept of arrays to multiple dimensions, creating structures like matrices, tables, and grids. In Java, these are implemented as 'arrays of arrays', where each element of the outer array is itself an array. Two-dimensional arrays are most common and are essential for mathematical computations, game development, image processing, and any application requiring tabular data. While powerful, multi-dimensional arrays add complexity in terms of memory layout and access patterns, requiring careful management of indices and bounds.",
                        keyPoints: [
                            "Multi-dimensional arrays are arrays where each element is itself an array",
                            "2D arrays use syntax: type[][] arrayName = new type[rows][cols]",
                            "Jagged arrays allow rows of different lengths: each sub-array can have different size",
                            "Access elements using two indices: array[row][column]",
                            "First dimension represents rows, second dimension represents columns",
                            "Memory layout is not contiguous - each row is a separate array object",
                            "Length of first dimension: array.length, length of specific row: array[row].length",
                            "Initialization can use nested braces: {{1,2},{3,4}} or separate new statements",
                            "Common uses: matrices, game boards, image pixels, spreadsheet data",
                            "Three or more dimensions possible but increase complexity significantly"
                        ]
                    },
                    example: `public class Main {
    public static void main(String[] args) {
        // Method 1: Rectangular 2D array with new
        int[][] matrix = new int[3][4];  // 3 rows, 4 columns
        
        // Initialize values
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = i * matrix[i].length + j + 1;
            }
        }
        
        // Method 2: Initialize with values
        int[][] predefined = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        
        // Method 3: Jagged array (rows of different lengths)
        int[][] jagged = new int[3][];
        jagged[0] = new int[2];  // Row 0 has 2 columns
        jagged[1] = new int[4];  // Row 1 has 4 columns
        jagged[2] = new int[3];  // Row 2 has 3 columns
        
        // Initialize jagged array
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = i * 10 + j;
            }
        }
        
        // Display matrices
        System.out.println("Rectangular Matrix:");
        printMatrix(matrix);
        
        System.out.println("\\nPredefined Matrix:");
        printMatrix(predefined);
        
        System.out.println("\\nJagged Array:");
        printJaggedArray(jagged);
        
        // Matrix operations
        System.out.println("\\nMatrix Operations:");
        int[][] a = {{1, 2}, {3, 4}};
        int[][] b = {{5, 6}, {7, 8}};
        int[][] sum = addMatrices(a, b);
        
        System.out.println("Matrix A:");
        printMatrix(a);
        System.out.println("Matrix B:");
        printMatrix(b);
        System.out.println("A + B:");
        printMatrix(sum);
        
        // 3D array example
        int[][][] cube = new int[2][3][4];  // 2 layers, 3 rows, 4 columns
        System.out.println("\\n3D Array dimensions: " + cube.length + "x" + 
                          cube[0].length + "x" + cube[0][0].length);
        
        // Finding max in 2D array
        int max = findMax(predefined);
        System.out.println("\\nMaximum value in predefined matrix: " + max);
        
        // Transpose matrix
        int[][] transposed = transpose(predefined);
        System.out.println("\\nTransposed matrix:");
        printMatrix(transposed);
    }
    
    // Helper method to print rectangular matrix
    static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.printf("%3d ", element);
            }
            System.out.println();
        }
    }
    
    // Helper method to print jagged array
    static void printJaggedArray(int[][] jagged) {
        for (int i = 0; i < jagged.length; i++) {
            System.out.print("Row " + i + ": ");
            for (int element : jagged[i]) {
                System.out.printf("%3d ", element);
            }
            System.out.println();
        }
    }
    
    // Matrix addition
    static int[][] addMatrices(int[][] a, int[][] b) {
        int[][] result = new int[a.length][a[0].length];
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        return result;
    }
    
    // Find maximum value in 2D array
    static int findMax(int[][] matrix) {
        int max = Integer.MIN_VALUE;
        for (int[] row : matrix) {
            for (int element : row) {
                if (element > max) {
                    max = element;
                }
            }
        }
        return max;
    }
    
    // Transpose matrix
    static int[][] transpose(int[][] matrix) {
        int[][] result = new int[matrix[0].length][matrix.length];
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        return result;
    }
}`,
                    explanation: "Multi-dimensional arrays provide powerful data structures for complex applications but require careful handling. Rectangular arrays offer predictable access patterns, while jagged arrays provide flexibility for variable-sized rows. Memory layout as 'arrays of arrays' means each row is a separate object, affecting performance considerations. Operations like matrix addition, transposition, and searching demonstrate practical applications. Understanding multi-dimensional arrays enables implementation of algorithms for games, scientific computing, and data processing applications."
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
                        description: "Methods are reusable code blocks. Define with return type, call by name. static methods belong to class.",
                        snippet: "static void greet() {\n    System.out.println(\"Hello!\");\n}\n\nstatic int add(int a, int b) {\n    return a + b;\n}",
                        keyPoints: [
                            "Define: returnType name() { }",
                            "void if no return",
                            "Call: methodName()",
                            "return sends value back"
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
                        description: "Methods accept parameters (arguments). Declare in method signature, pass when calling.",
                        snippet: "greet(\"John\", 25);\n\nstatic void greet(String name, int age) {\n    System.out.println(\"Hello \" + name);\n}",
                        keyPoints: [
                            "Declare in signature: type paramName",
                            "Pass when calling: method(arg)",
                            "Multiple: type1 p1, type2 p2",
                            "return sends value back"
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
