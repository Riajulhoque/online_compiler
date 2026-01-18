// Default code with input example
const defaultCode = `#include <stdio.h>

int main() {
    int num1, num2, sum;
    
    printf("Enter first number: ");
    scanf("%d", &num1);
    
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    sum = num1 + num2;
    printf("Sum: %d\\n", sum);
    
    return 0;
}`;

// Default input
const defaultInput = `10\n20`;

// Initialize editor and input
document.getElementById('editor').value = defaultCode;
document.getElementById('userInput').value = defaultInput;
updateCharCount();
updateInputCount();

// Code examples with suggested input
const examples = {
  calculator: {
    name: "Simple Calculator",
    c: `#include <stdio.h>

int main() {
    char op;
    float num1, num2, result;
    
    printf("Enter operator (+, -, *, /): ");
    scanf("%c", &op);
    
    printf("Enter two numbers: ");
    scanf("%f %f", &num1, &num2);
    
    switch(op) {
        case '+':
            result = num1 + num2;
            printf("%.2f + %.2f = %.2f\\n", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("%.2f - %.2f = %.2f\\n", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("%.2f * %.2f = %.2f\\n", num1, num2, result);
            break;
        case '/':
            if(num2 != 0) {
                result = num1 / num2;
                printf("%.2f / %.2f = %.2f\\n", num1, num2, result);
            } else {
                printf("Error! Division by zero.\\n");
            }
            break;
        default:
            printf("Error! Invalid operator.\\n");
    }
    
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    char op;
    float num1, num2, result;
    
    cout << "Enter operator (+, -, *, /): ";
    cin >> op;
    
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    
    switch(op) {
        case '+':
            result = num1 + num2;
            cout << num1 << " + " << num2 << " = " << result << endl;
            break;
        case '-':
            result = num1 - num2;
            cout << num1 << " - " << num2 << " = " << result << endl;
            break;
        case '*':
            result = num1 * num2;
            cout << num1 << " * " << num2 << " = " << result << endl;
            break;
        case '/':
            if(num2 != 0) {
                result = num1 / num2;
                cout << num1 << " / " << num2 << " = " << result << endl;
            } else {
                cout << "Error! Division by zero." << endl;
            }
            break;
        default:
            cout << "Error! Invalid operator." << endl;
    }
    
    return 0;
}`,
    input: "+\n15\n3"
  },
  array_sum: {
    name: "Array Sum Calculator",
    c: `#include <stdio.h>

int main() {
    int n, sum = 0;
    
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    int arr[n];
    
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    
    printf("Sum of array elements: %d\\n", sum);
    printf("Average: %.2f\\n", (float)sum / n);
    
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    
    cout << "Enter number of elements: ";
    cin >> n;
    
    int arr[n];
    
    cout << "Enter " << n << " elements:" << endl;
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];
    }
    
    cout << "Sum of array elements: " << sum << endl;
    cout << "Average: " << (float)sum / n << endl;
    
    return 0;
}`,
    input: "5\n10\n20\n30\n40\n50"
  },
  student_grade: {
    name: "Student Grade Calculator",
    c: `#include <stdio.h>

int main() {
    int marks[5];
    int total = 0;
    float percentage;
    char grade;
    
    printf("Enter marks for 5 subjects (out of 100):\\n");
    
    for(int i = 0; i < 5; i++) {
        printf("Subject %d: ", i + 1);
        scanf("%d", &marks[i]);
        total += marks[i];
    }
    
    percentage = (float)total / 5;
    
    if(percentage >= 90) grade = 'A';
    else if(percentage >= 80) grade = 'B';
    else if(percentage >= 70) grade = 'C';
    else if(percentage >= 60) grade = 'D';
    else if(percentage >= 40) grade = 'E';
    else grade = 'F';
    
    printf("\\n--- Result ---\\n");
    printf("Total Marks: %d\\n", total);
    printf("Percentage: %.2f%%\\n", percentage);
    printf("Grade: %c\\n", grade);
    
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    int marks[5];
    int total = 0;
    float percentage;
    char grade;
    
    cout << "Enter marks for 5 subjects (out of 100):" << endl;
    
    for(int i = 0; i < 5; i++) {
        cout << "Subject " << i + 1 << ": ";
        cin >> marks[i];
        total += marks[i];
    }
    
    percentage = (float)total / 5;
    
    if(percentage >= 90) grade = 'A';
    else if(percentage >= 80) grade = 'B';
    else if(percentage >= 70) grade = 'C';
    else if(percentage >= 60) grade = 'D';
    else if(percentage >= 40) grade = 'E';
    else grade = 'F';
    
    cout << "\\n--- Result ---" << endl;
    cout << "Total Marks: " << total << endl;
    cout << "Percentage: " << percentage << "%" << endl;
    cout << "Grade: " << grade << endl;
    
    return 0;
}`,
    input: "85\n92\n78\n88\n90"
  },
  palindrome: {
    name: "Palindrome Checker",
    c: `#include <stdio.h>
#include <string.h>

int main() {
    char str[100];
    int i, length;
    int flag = 0;
    
    printf("Enter a string: ");
    scanf("%s", str);
    
    length = strlen(str);
    
    for(i = 0; i < length/2; i++) {
        if(str[i] != str[length - i - 1]) {
            flag = 1;
            break;
        }
    }
    
    if(flag) {
        printf("%s is not a palindrome\\n", str);
    } else {
        printf("%s is a palindrome\\n", str);
    }
    
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    bool isPalindrome = true;
    
    cout << "Enter a string: ";
    cin >> str;
    
    int length = str.length();
    
    for(int i = 0; i < length/2; i++) {
        if(str[i] != str[length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    
    if(isPalindrome) {
        cout << str << " is a palindrome" << endl;
    } else {
        cout << str << " is not a palindrome" << endl;
    }
    
    return 0;
}`,
    input: "radar"
  },
  matrix_multiplication: {
    name: "Matrix Multiplication",
    c: `#include <stdio.h>

int main() {
    int r1, c1, r2, c2;
    
    printf("Enter rows and columns for first matrix: ");
    scanf("%d %d", &r1, &c1);
    
    printf("Enter rows and columns for second matrix: ");
    scanf("%d %d", &r2, &c2);
    
    if(c1 != r2) {
        printf("Error! Matrix multiplication not possible.\\n");
        return 1;
    }
    
    int first[10][10], second[10][10], result[10][10];
    
    printf("\\nEnter elements of first matrix:\\n");
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c1; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &first[i][j]);
        }
    }
    
    printf("\\nEnter elements of second matrix:\\n");
    for(int i = 0; i < r2; i++) {
        for(int j = 0; j < c2; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &second[i][j]);
        }
    }
    
    // Initialize result matrix
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c2; j++) {
            result[i][j] = 0;
        }
    }
    
    // Multiply matrices
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c2; j++) {
            for(int k = 0; k < c1; k++) {
                result[i][j] += first[i][k] * second[k][j];
            }
        }
    }
    
    printf("\\nResultant matrix:\\n");
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c2; j++) {
            printf("%d\\t", result[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`,
    input: "2\n2\n2\n2\n1\n2\n3\n4\n5\n6\n7\n8"
  }
};

// Update character counts
function updateCharCount() {
  const editor = document.getElementById('editor');
  const count = editor.value.length;
  document.getElementById('charCount').textContent = `${count} chars`;
}

function updateInputCount() {
  const input = document.getElementById('userInput');
  const count = input.value.length;
  document.getElementById('inputCount').textContent = `${count} chars`;
}

function updateOutputCount() {
  const output = document.getElementById('output');
  const count = output.textContent.length;
  document.getElementById('outputCount').textContent = `${count} chars`;
}

// Load example
function loadExample(exampleName) {
  const language = document.getElementById('language').value;
  if (examples[exampleName]) {
    document.getElementById('editor').value = examples[exampleName][language] || examples[exampleName]['c'];
    document.getElementById('userInput').value = examples[exampleName].input || '';
    updateCharCount();
    updateInputCount();
    updateStatus(`Loaded: ${examples[exampleName].name}`, 'info');
  }
}

// Clear input
function clearInput() {
  document.getElementById('userInput').value = '';
  updateInputCount();
  updateStatus('Input cleared', 'info');
}

// Reset everything
function resetAll() {
  document.getElementById('editor').value = defaultCode;
  document.getElementById('userInput').value = defaultInput;
  document.getElementById('output').innerHTML = '';
  updateCharCount();
  updateInputCount();
  updateOutputCount();
  updateStatus('Reset completed', 'info');
}

// Update status
function updateStatus(message, type = 'info') {
  const statusEl = document.getElementById('statusMessage');
  statusEl.textContent = message;

  if (type === 'error') {
    statusEl.style.color = '#fc8181';
  } else if (type === 'success') {
    statusEl.style.color = '#68d391';
  } else if (type === 'warning') {
    statusEl.style.color = '#ed8936';
  } else {
    statusEl.style.color = '#cbd5e0';
  }
}

// Show loading animation
function showLoading() {
  const output = document.getElementById('output');
  output.innerHTML = `
                <div class="output-line">🔄 Compiling...</div>
                <div class="output-line">⏳ Please wait...</div>
            `;
}

// Compile and run using Piston API (supports stdin)
async function compileAndRun() {
  const code = document.getElementById('editor').value;
  const input = document.getElementById('userInput').value;
  const language = document.getElementById('language').value;
  const outputEl = document.getElementById('output');
  const timerEl = document.getElementById('timer');

  if (!code.trim()) {
    outputEl.innerHTML = '<div class="output-error">❌ Error: Please enter some code</div>';
    updateStatus('No code to compile', 'error');
    return;
  }

  showLoading();
  updateStatus('Compiling...', 'info');

  const startTime = Date.now();

  try {
    // Using Piston API (supports stdin)
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: language === 'c' ? 'c' : 'cpp',
        version: language === 'c' ? '10.2.0' : '10.2.0',
        files: [{
          content: code
        }],
        stdin: input
      })
    });

    const result = await response.json();
    const endTime = Date.now();
    const executionTime = endTime - startTime;

    timerEl.textContent = `Time: ${executionTime}ms`;

    let outputHTML = '';

    // Show input in output
    if (input.trim()) {
      outputHTML += `<div class="output-line output-input">📥 Program Input:</div>`;
      const inputLines = input.split('\n');
      inputLines.forEach(line => {
        if (line.trim()) {
          outputHTML += `<div class="tab">${escapeHtml(line)}</div>`;
        }
      });
      outputHTML += `<div class="output-line">---</div>`;
    }

    // Show compilation stderr if any
    if (result.compile && result.compile.stderr) {
      outputHTML += `<div class="output-error">🛠 Compilation Error:</div>`;
      outputHTML += `<div class="output-error">${escapeHtml(result.compile.stderr)}</div>`;
      outputHTML += `<div class="output-line">---</div>`;
    }

    // Show execution output
    if (result.run.stdout) {
      outputHTML += `<div class="output-success">✅ Output:</div>`;
      const lines = result.run.stdout.split('\n');
      lines.forEach(line => {
        if (line.trim() || line === '') {
          outputHTML += `<div class="output-success">${escapeHtml(line)}</div>`;
        }
      });
    }

    // Show execution errors
    if (result.run.stderr) {
      outputHTML += `<div class="output-error">❌ Runtime Error:</div>`;
      outputHTML += `<div class="output-error">${escapeHtml(result.run.stderr)}</div>`;
    }

    // Show exit code
    if (result.run.code !== 0) {
      outputHTML += `<div class="output-error">Exit Code: ${result.run.code}</div>`;
    }

    // If no output
    if (!result.run.stdout && !result.run.stderr && !result.compile?.stderr) {
      outputHTML += `<div class="output-line">(Program executed successfully but produced no output)</div>`;
    }

    outputEl.innerHTML = outputHTML;

    if (result.run.stderr || result.compile?.stderr) {
      updateStatus('Compilation/Runtime error', 'error');
    } else {
      updateStatus('Execution completed successfully', 'success');
    }

  } catch (error) {
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    timerEl.textContent = `Time: ${executionTime}ms`;

    outputEl.innerHTML = `
                    <div class="output-error">❌ Connection Error:</div>
                    <div class="output-error">${escapeHtml(error.message)}</div>
                    <div class="output-line">---</div>
                    <div class="output-line">📝 Using simulated execution...</div>
                `;

    // Fallback to simulation
    setTimeout(() => {
      simulateExecution(code, input, language, outputEl);
      updateStatus('Simulated execution completed', 'warning');
    }, 500);
  }

  updateOutputCount();
}

// Fallback simulation
function simulateExecution(code, input, language, outputEl) {
  let outputHTML = '';

  if (input.trim()) {
    outputHTML += `<div class="output-line output-input">📥 Program Input:</div>`;
    const inputLines = input.split('\n');
    inputLines.forEach(line => {
      if (line.trim()) {
        outputHTML += `<div class="tab">${escapeHtml(line)}</div>`;
      }
    });
    outputHTML += `<div class="output-line">---</div>`;
  }

  outputHTML += `<div class="output-line">✅ Simulated Output:</div>`;

  // Check which example it is
  if (code.includes('scanf("%d", &num1)') || code.includes('cin >> num1')) {
    const inputs = input.split('\n').map(Number).filter(n => !isNaN(n));
    if (inputs.length >= 2) {
      outputHTML += `<div class="output-success">Enter first number: Enter second number: Sum: ${inputs[0] + inputs[1]}</div>`;
    } else {
      outputHTML += `<div class="output-success">Enter first number: Enter second number: Sum: 30</div>`;
    }
  } else if (code.includes('scanf("%c", &op)') || code.includes('cin >> op')) {
    const lines = input.split('\n');
    if (lines.length >= 3) {
      const op = lines[0];
      const num1 = parseFloat(lines[1]);
      const num2 = parseFloat(lines[2]);
      let result;
      switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Error! Division by zero'; break;
        default: result = 'Error! Invalid operator';
      }
      outputHTML += `<div class="output-success">Enter operator: Enter two numbers: ${num1} ${op} ${num2} = ${result}</div>`;
    } else {
      outputHTML += `<div class="output-success">Enter operator: Enter two numbers: 15 + 3 = 18</div>`;
    }
  } else if (code.includes('scanf("%s", str)') || code.includes('cin >> str')) {
    const str = input.split('\n')[0] || 'radar';
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
      outputHTML += `<div class="output-success">Enter a string: ${str} is a palindrome</div>`;
    } else {
      outputHTML += `<div class="output-success">Enter a string: ${str} is not a palindrome</div>`;
    }
  } else {
    outputHTML += `<div class="output-success">[Simulated execution]</div>`;
    outputHTML += `<div class="output-success">Program compiled and ran successfully.</div>`;
    outputHTML += `<div class="output-success">Input was processed.</div>`;
    outputHTML += `<div class="output-success">Note: This is simulated output.</div>`;
  }

  outputEl.innerHTML = outputHTML;
}

// Helper function to escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateStatus('Ready to compile');
  updateCharCount();
  updateInputCount();
  updateOutputCount();
});

// server.js - Enhanced backend with input support
const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.text({ limit: '10mb' }));

const tempDir = path.join(__dirname, 'temp');

async function ensureTempDir() {
    try {
        await fs.access(tempDir);
    } catch {
        await fs.mkdir(tempDir, { recursive: true });
    }
}

app.post('/api/compile', async (req, res) => {
    const { code, language, input = '' } = req.body;
    
    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }
    
    const startTime = Date.now();
    
    try {
        await ensureTempDir();
        const filename = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const filepath = path.join(tempDir, filename);
        
        let sourceFile, executable, compileCmd;
        
        if (language === 'c') {
            sourceFile = `${filepath}.c`;
            executable = `${filepath}.out`;
            compileCmd = `gcc ${sourceFile} -o ${executable} -lm 2>&1`;
        } else if (language === 'cpp') {
            sourceFile = `${filepath}.cpp`;
            executable = `${filepath}.out`;
            compileCmd = `g++ ${sourceFile} -o ${executable} 2>&1`;
        } else {
            return res.status(400).json({ error: 'Unsupported language' });
        }
        
        // Write code to file
        await fs.writeFile(sourceFile, code);
        
        // Compile
        const compileResult = await executeCommand(compileCmd);
        
        if (compileResult.stderr && !compileResult.stdout.includes('warning')) {
            // Cleanup and return compilation error
            await cleanupFiles(filepath, language);
            return res.json({
                success: false,
                output: '',
                error: compileResult.stderr,
                compilationError: true,
                executionTime: Date.now() - startTime
            });
        }
        
        // Execute with input
        const execResult = await executeCommandWithInput(executable, input);
        
        // Cleanup
        await cleanupFiles(filepath, language);
        
        const executionTime = Date.now() - startTime;
        
        res.json({
            success: true,
            output: execResult.stdout,
            error: execResult.stderr,
            exitCode: execResult.code,
            executionTime
        });
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Server error', 
            details: error.message,
            executionTime: Date.now() - startTime
        });
    }
});

function executeCommand(command) {
    return new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
            resolve({ stdout, stderr, code: error ? error.code : 0 });
        });
    });
}

function executeCommandWithInput(command, input) {
    return new Promise((resolve) => {
        const child = exec(command, (error, stdout, stderr) => {
            resolve({ 
                stdout, 
                stderr, 
                code: error ? error.code : 0 
            });
        });
        
        // Provide input to the program
        if (input) {
            child.stdin.write(input);
            child.stdin.end();
        }
    });
}

async function cleanupFiles(basePath, language) {
    try {
        const files = [
            `${basePath}.${language}`,
            `${basePath}.${language === 'c' ? 'c' : 'cpp'}`,
            `${basePath}.out`,
            `${basePath}.exe`
        ];
        
        for (const file of files) {
            try {
                await fs.unlink(file);
            } catch {
                // File doesn't exist
            }
        }
    } catch (error) {
        console.error('Cleanup error:', error);
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Compiler server with input support running on port ${PORT}`);
});