// Write a function that takes in a string and returns counts of each character in the string

const countCharactersInString = (string) => {
  // Define an empty object to be returned at the end of function
  let strObj = {};
  // Convert string to lower case, split into array then filter out all the nums and blank spaces
  let strArr = string
    .toLowerCase()
    .split('')
    .map((char) => char.replace(/[^A-Za-z0-9]/g, ''))
    .filter((char) => char !== '');

  let max = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strObj[strArr[i]] > 0) {
      strObj[strArr[i]]++;
    } else {
      strObj[strArr[i]] = 1;
    }
  }
  return strObj;
};

// console.log(
//   countCharactersInString(
//     'Li!nu%x#hint* is$ th^e bes`t web’si!teeeeeeee23423523523453'
//   )
// );

// Write a function to test that a string is alphaNumeric
const checkAlpNumeric = (string) => {
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)
    )
      return false;
  }
  return true;
};

// console.log(checkAlpNumeric('ajkdhw3423423'));

// Write a function which accepts 2 arrays and it should return true
// if the opposing array has it's corresponding  value squared as compared
// to the other

const sameSq = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // Nested Loop
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
};

// console.log(sameSq([1, 2, 3, 2, 2], [9, 4, 4, 1, 4]));

// Enhanced method
const enhancedSameSq = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let counter1 = {};
  let counter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    counter1[arr1[i]] = (counter1[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    counter2[arr2[i]] = (counter2[arr2[i]] || 0) + 1;
  }
  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }
  return true;
};

// console.log(enhancedSameSq([1, 2, 3, 2, 2], [9, 4, 4, 1, 4]));

// Anagram challenge -using 3 loops

const anagram = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

// console.log(anagram('anagram', 'nagaram'));

// Anagram 2
const anagram2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let container = {};
  for (let i = 0; i < arr1.length; i++) {
    let word = arr1[i];
    container[word] ? (container[word] += 1) : (container[word] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!container[arr2[i]]) {
      return false;
    } else {
      container[arr2[i]] -= 1;
    }
  }
  return true;
};

// console.log(anagram2('anagram', 'nagaram'));

// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
  const str1 = String(num1).split('');
  const str2 = String(num2).split('');
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let str of str1) {
    frequencyCounter1[str] = (frequencyCounter1[str] || 0) + 1;
  }
  for (let str of str2) {
    frequencyCounter2[str] = (frequencyCounter2[str] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
};

// console.log(sameFrequency(2468, 6284));

// Are there duplicates - using frequency counter
const areThereDuplicates3 = (arr) => {
  const strArr = arr.map((num) => String(num));
  const counter = {};
  for (let item of strArr) {
    counter[item] = (counter[item] || 0) + 1;
  }
  for (let key in counter) {
    if (counter[key] > 1) return true;
  }
  return false;
};

// console.log(areThereDuplicates3([12, 3, 1, 2, 10]));
