function foo(a, b) {
  if (a === 0) {
    return 0;
  } else {
    return foo(a - 1, b);
  }
}
function fooSolution(a, b) {
  if (a <= 0) {
    return b; 
  } else {
    return fooSolution(a - 1, a + b);
  }
}