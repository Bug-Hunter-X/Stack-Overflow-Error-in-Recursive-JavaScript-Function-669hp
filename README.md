# Stack Overflow Error in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow due to missing or incorrect base cases.

The `bug.js` file contains a function that will cause a stack overflow if the input `a` is not already 0. The function lacks a proper base case to stop the recursion.

The `bugSolution.js` file provides a corrected version of the function, which includes a proper base case to handle the recursion correctly and prevent a stack overflow.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run `bug.js` with a non-zero value for `a` - you'll see the stack overflow error.
4. Run `bugSolution.js` - the function will execute correctly without crashing. 