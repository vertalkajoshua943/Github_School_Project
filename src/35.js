function fibonacci(num) {
  if (num <= 1) return num;
  let previous = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}
