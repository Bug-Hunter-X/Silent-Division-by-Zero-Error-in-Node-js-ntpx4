# Silent Division by Zero in Node.js

This example demonstrates a subtle error in Javascript which can lead to unexpected results in Node.js applications. Division by zero does not throw an error, but instead returns `Infinity`, which might not be handled correctly by your application. 

The `bug.js` file contains the problematic code, and the `bugSolution.js` file shows how to prevent this unexpected behavior.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js`.