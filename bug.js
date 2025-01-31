```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs
  }
  return a / b; // Potential division by zero error if b is 0
}

console.log(myFunction(10, 0)); // Output: Infinity (not an error in JS but can be unexpected)
console.log(myFunction(10, 2)); // Output: 5
```