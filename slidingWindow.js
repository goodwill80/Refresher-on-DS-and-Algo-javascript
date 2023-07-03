// Write a function that accepts an array and a number n - representing number of elements.
// purpose is to find the larges sum of n consecutive elements in the array

// Using nested loop
const findConsecutiveMaxSum = (arr, n) => {
  let max = 0;
  // make buffer for n
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    // inner loop will only itinarate based on n times
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    max = Math.max(max, temp);
  }
  return max;
};

// console.log(findConsecutiveMaxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Using Sliding Window
const findConsecutiveMaxSum2 = (arr, n) => {
  if (arr.length === 0) return null;
  let max = 0;
  let temp = 0;
  // Find the max of the 1st 3 items in the array
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  // Assign temp to equal max
  temp = max;
  // Find max of the next 3 starting from n position
  // As the loop goes, add 1 item from arr[i] and remove arr[i - n] from temp
  for (let i = n; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - n];
    // calculate max
    max = Math.max(temp, max);
  }
  return max;
};

// console.log(findConsecutiveMaxSum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
