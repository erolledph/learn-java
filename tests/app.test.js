const test = require('node:test');
const assert = require('node:assert');

// Mock browser globals
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener: () => {} }),
    querySelector: () => ({ addEventListener: () => {} }),
    querySelectorAll: () => [],
    createElement: () => ({})
};
global.window = {
    addEventListener: () => {},
    localStorage: {
        getItem: () => null,
        setItem: () => {}
    }
};
global.navigator = {
    serviceWorker: {
        register: () => Promise.resolve()
    }
};
global.localStorage = global.window.localStorage;
global.CodeMirror = () => ({
    setSize: () => {},
    refresh: () => {},
    setOption: () => {},
    getValue: () => '',
    setValue: () => {},
    getWrapperElement: () => ({ style: {} }),
    getScrollerElement: () => ({ style: {} })
});
global.JAVA_CURRICULUM = { modules: [] };
global.groqService = {
    hasApiKey: () => false,
    getApiKey: () => '',
    setApiKey: () => {}
};

const { highlightJava } = require('../app.js');

test('highlightJava should return empty string for null input', () => {
    assert.strictEqual(highlightJava(null), "");
});

test('highlightJava should return empty string for empty string input', () => {
    assert.strictEqual(highlightJava(""), "");
});

test('highlightJava should highlight keywords', () => {
    const code = "public class Main";
    const expected = '<span class="keyword">public</span> <span class="keyword">class</span> Main';
    assert.strictEqual(highlightJava(code), expected);
});

test('highlightJava should highlight booleans and null', () => {
    const code = "true false null";
    const expected = '<span class="boolean">true</span> <span class="boolean">false</span> <span class="boolean">null</span>';
    assert.strictEqual(highlightJava(code), expected);
});

test('highlightJava should not highlight keywords inside other words', () => {
    const code = "publication";
    assert.strictEqual(highlightJava(code), "publication");
});
