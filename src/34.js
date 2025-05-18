function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let previous = 0;
  let current = 1;
  let next;
  
  for (let i = 2; i <= n; i++) {
    next = current + previous;
    previous = current;
    current = next;
  }
  return current;
}

console.log(fibonacci(10));
