// Java Runner - Simple HTTP Server
// Run this file to enable one-click Java execution in the browser!
// Just double-click this file or run: node java-runner.js

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PORT = 3847;
const TEMP_DIR = path.join(process.env.TEMP || '/tmp', 'JavaLearningHub');

// Java paths
const JAVA = 'C:\\Program Files\\Common Files\\Oracle\\Java\\javapath\\java.exe';
const JAVAC = 'C:\\Program Files\\Common Files\\Oracle\\Java\\javapath\\javac.exe';

console.log('☕ Java Learning Hub Runner');
console.log('='.repeat(40));

// Create temp directory
if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
}

// Test Java
try {
    const version = execSync(`"${JAVA}" -version 2>&1`, { encoding: 'utf8' });
    console.log('✓ Java found:', version.split('\n')[0]);
} catch (e) {
    console.log('✗ Java not found!');
    process.exit(1);
}

console.log('📁 Temp folder:', TEMP_DIR);
console.log('🚀 Server running on http://localhost:' + PORT);
console.log('');
console.log('Open index.html in your browser to start!');
console.log('Press Ctrl+C to stop the server');
console.log('');

// Create HTTP server
const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // Handle run request
    if (req.method === 'POST' && req.url === '/run') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const { code, className } = JSON.parse(body);
                const result = runJava(code, className || 'Main');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: e.message }));
            }
        });
        return;
    }
    
    // Health check
    if (req.method === 'GET' && req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', java: JAVA }));
        return;
    }
    
    res.writeHead(404);
    res.end('Not Found');
});

function runJava(code, className) {
    let result = { success: false, output: '', error: '' };
    
    try {
        // Clean old files
        const javaFile = path.join(TEMP_DIR, `${className}.java`);
        const classFile = path.join(TEMP_DIR, `${className}.class`);
        
        if (fs.existsSync(classFile)) fs.unlinkSync(classFile);
        
        // Write code
        fs.writeFileSync(javaFile, code, 'utf8');
        console.log(`📝 Running: ${className}.java`);
        
        // Compile
        try {
            execSync(`"${JAVAC}" "${javaFile}"`, { 
                cwd: TEMP_DIR,
                stdio: 'pipe',
                timeout: 10000
            });
        } catch (compileErr) {
            const err = compileErr.stderr?.toString() || compileErr.stdout?.toString() || 'Compilation failed';
            result.error = err;
            console.log(`✗ Compilation failed`);
            return result;
        }
        
        console.log(`✓ Compiled successfully`);
        
        // Run
        const output = execSync(`"${JAVA}" -cp "${TEMP_DIR}" ${className}`, { 
            cwd: TEMP_DIR,
            encoding: 'utf8',
            timeout: 10000
        });
        
        result.success = true;
        result.output = output;
        console.log(`✓ Output: ${output.substring(0, 50).replace(/\n/g, ' ')}...`);
        
    } catch (e) {
        result.error = e.stderr?.toString() || e.stdout?.toString() || e.message;
        console.log(`✗ Error: ${result.error.substring(0, 50)}`);
    }
    
    return result;
}

server.listen(PORT, () => {
    console.log('');
    console.log('✨ Ready! Click Run in the browser to execute Java!');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('');
        console.log('⚠️  Port 3847 is already in use.');
        console.log('    The runner might already be running!');
        console.log('    Or try stopping any existing server and try again.');
    }
});
