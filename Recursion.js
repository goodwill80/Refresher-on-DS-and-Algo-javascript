// Count num to zero
const countDown = (num) => {
  if (num <= 0) {
    console.log('All done');
    return;
  }
  console.log(num);
  num--;
  return countDown(num);
};
// countDown(20);

// SumRange
const sumRange = (num) => {
  if (num == 1) return 1;
  return num + sumRange(num - 1);
};
// console.log(sumRange(10));

// Factorial
const factorial = (num) => {
  if (num == 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(4));

// Collect odd numbers in an array
const collectOdds = (arr) => {
  const container = [];
  // Helper
  const collecter = (arr) => {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) container.push(arr[0]);
    collecter(arr.slice(1));
  };
  // Recursive
  collecter(arr);
  return container;
};

const odds = collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// console.log(odds);

// Collect Odds with PURE recursion
const collectOddValues = (arr) => {
  let container = [];

  if (arr.length === 0) return container;
  if (arr[0] % 2 !== 0) container.push(arr[0]);

  container = container.concat(collectOddValues(arr.slice(1)));
  return container;
};
const odds2 = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(odds2);

// Power of two
const isPowerOfTwo = (num) => {
  if (num === 1) {
    return true;
  }
  if (num % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(num / 2);
};
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(32));
// console.log(isPowerOfTwo(2048));
// console.log(isPowerOfTwo(256));
// console.log(isPowerOfTwo(22));
