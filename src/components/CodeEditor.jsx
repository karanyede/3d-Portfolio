import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // Create a new function from the code string and execute it
      const result = new Function(code)();
      setOutput(result !== undefined ? String(result) : 'Code executed successfully');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="code-editor">
      <h2>Interactive Code Editor</h2>
      <div className="editor-container">
        <Editor
          height="300px"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
      <button onClick={runCode} className="btn btn-primary run-button">Run Code</button>
      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;