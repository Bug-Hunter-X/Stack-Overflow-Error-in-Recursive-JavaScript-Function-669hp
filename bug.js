function foo(a, b) {
  if (a === 0) {
    return 0;
  }
  return foo(a - 1, b);
}