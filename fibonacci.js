// normal solving

function fibonacci(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(fibonacci(9));
// with recursion
function fibonacci2(n) {
  if (n < 2) return n;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.log(fibonacci2(9));
// with sequence
function generateFibonacciSequence(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacci2(i));
  }
  return sequence;
}

console.log(generateFibonacciSequence(10));
