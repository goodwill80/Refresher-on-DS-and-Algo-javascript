// Find sum of zero pair in a sorted array
const findSumZeroPair = (arr) => {
  let start = 0;
  let last = arr.length - 1;
  while (start < last) {
    if (arr[last] + arr[start] > 0) {
      last--;
    } else if (arr[last] + arr[start] === 0) {
      return [arr[last], arr[start]];
    } else {
      start++;
    }
  }
};

// console.log(findSumZeroPair([-4, -1, 0, 1, 2, 3, 10]));

// Counting the number of unique values in a sorted arrays
const countUnique = (arr) => {
  let pointer = 0;
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[pointer]) {
      arr[pointer] = count++;
      pointer = pointer + 1;
    }
  }
  return arr[pointer] || 0;
};

// console.log(countUnique([]));

// Are there duplicates in an array - using multiple pointers
const areThereDuplicates = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let start = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[start]) {
      return true;
    } else {
      start += 1;
    }
  }
  return false;
};

// console.log([areThereDuplicates([12, 3, 4, 1, 2, 10])]);

// Are there duplicates - using one liner solution
const areThereDuplicates2 = (arr) => {
  return new Set(arr).size !== arr.length;
};

// console.log([areThereDuplicates2([12, 3, 4, 1, 2, 10, 4])]);

// Find the target average pair in an arr, given a target average - Need to be sorted
const findAveragePairInArr = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
};

// console.log(findAveragePairInArr([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

// Itinary Method
const isSubsequent = (str1, str2) => {
  let j = 0;
  let i = 0;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

// console.log(isSubsequent('jonathan', 'johna thanananana'));

// Recursive method
const isSubsequent2 = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) return isSubsequent2(str1.slice(0, 1), str2);
  if (str1[0] !== str2[0]) return isSubsequent2(str1, str2.slice(0, 1));
};

// console.log(isSubsequent2('jonathan', 'johnaoououio'));
