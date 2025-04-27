function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let previous = 0,
      current = 1,
      next = 0;
  
  for (let i = 2; i <= n; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }
  return next;
}

console.log(fibonacci(10));
