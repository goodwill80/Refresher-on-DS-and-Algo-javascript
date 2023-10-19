// Custom call back function

const combine = (handler, operation, ...numbers) => {
  const validateNumber = (num) => {
    return isNaN(num) ? 0 : num;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }

  handler(sum);
};

// const subtractUp = (handler, ...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   handler(sum);
// };

const showresults = (messageText, sum) => {
  console.log(`${sum} is ${messageText} `);
};

// combine(
//   showresults.bind(this, 'The result after adding'),
//   'ADD',
//   100,
//   'hello',
//   100
// );
// combine(showresults.bind(this, 'The result after adding'), 'ADD', 50, 50, 50);
// combine(showresults.bind(this, 'The result after adding'), 'ADD', 10, 10, 10);

// combine(
//   showresults.bind(this, 'The result afer subtracting'),
//   'SUBTRACT',
//   1,
//   10,
//   50,
//   100
// );

// combine(() => console.log('Jon'), 'ADD', 1, 2, 3, 4, 5);

// Higher Order Function
const findDivison = (num1, num2) => {
  return (num3) => {
    console.log(`The result is ${(num1 + num2) / num3}`);
  };
};

const firstTwoNumsDivideBy = findDivison(45, 45);
// firstTwoNumsDivideBy(3);

/*
Create a function that gets the minimum value in an array of integers
Specifications:
1. Function must get an array of at least 1 element
2. The function would return the minimum value in the array
Ex1. const arr1 = [65, 11, 213, 78, 99]
console.log(getMin(arr1)) -> "The minimum value in the array is 11"
*/

// const findMin = (arr) => {
//   let min = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] < arr[i]) min = arr[j];
//     }
//   }
//   return min;
// };

// console.log(findMin([65, 11, 213, 78, 99]));

const findMin2 = (arr) => {
  let min = 0;
  for (let y = 0, i = 1; i < arr.length; i++) {
    if (arr[i] < arr[y]) {
      min = arr[i];
      y = i;
    }
  }
  return min;
};

// console.log(findMin2([65, 11, 213, 78, 99]));

/*
The substring method in JS is a string method that would get a part of a string based on the index values provided. 
Ex. let str1 = "Hello World"
str1.substring(3, 8) -> "lo Wo"
Create a function that would simulate the behavior of the substring method.
Specifications:
1. Any string method CANNOT be used.
2. If the first argument is bigger than the second, flip the values
3. If the second argument is more than the length of the string, return up to the end of the string.
4. If the first argument is less than 0, it is treated as zero.
*/

const subStringMethod = (string, arg1, arg2) => {
  const newString = string.split('');
  if (arg1 > arg2) {
    const temp = arg1;
    arg1 = arg2;
    arg2 = temp;
  } else if (arg2 > string.length) arg2 = string.length;
  else if (arg1 < 0) arg1 = 0;
  console.log(newString.slice(arg1, arg2).join(''));
};

// subStringMethod('hello world', 3, 8);

function SnakeCase(str) {
  // code goes here
  const strArr = str
    .replace(/[^a-z0-9]/gi, ' ')
    .split(' ')
    .map((letter) => letter.toLowerCase())
    .join('_');
  return strArr;
}

function CodelandUsernameValidation(str) {
  // code goes here
  // between 4 and 25 characters
  let firstLetter = str.charCodeAt(0);
  let strStartsWithALetter =
    (firstLetter >= 65 && firstLetter < 91) ||
    (firstLetter >= 97 && firstLetter < 123);
  if (
    str.length < 4 ||
    str.length > 25 ||
    !strStartsWithALetter ||
    str.charAt(str.length - 1) === '_'
  )
    return false;
  let middle = str.slice(1, str.length - 1).split('');
  let strRegex = new RegExp(/^[a-z0-9]+$/i);

  let results = middle.find((item) => !strRegex.test(item) && item !== '_');
  if (results) return false;
  return true;
}

// Find same numbers in an array of 2 string i.e. ["1, 2, 3, 5, 6", "2, 4, 5, 8"]
function FindIntersection(strArr) {
  // code goes here
  let arr1 = strArr.slice(0, 1)[0].split(',');
  let arr2 = strArr.slice(1)[0].split(',');
  let container = [];
  let obj1 = {};
  let obj2 = {};
  for (let num of arr1) {
    obj1[num] = (obj1[num] || 0) + 1;
  }
  for (let num of arr2) {
    obj2[num] = (obj2[num] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      container.push(key);
    }
  }
  return container;
}

function QuestionsMarks(str) {
  // code goes here
  const strArr = str.split('???');
  if (strArr.length <= 1) return false;

  const containNum = (str) => {
    return /[0-9]/.test(str);
  };

  for (let string in strArr) {
    if (!containNum(string)) {
      return false;
    }
  }

  console.log(strArr);
  return true;
}

function FirstReverse(str) {
  // code goes here
  const strArr = str.split('').reverse().join('');

  return strArr;
}

function LongestWord(sen) {
  // code goes here
  const senArr = sen.split(' ').map((word) => word.replace(/[^a-z0-9]/gi, ''));
  const longest = senArr.map((word) => word.length);
  let index = 0;
  for (let i = 0, y = 1; y < longest.length; y++) {
    if (longest[y] > longest[i]) {
      index = y;
      i++;
    }
  }
  return senArr[index];
}

function miniMaxSum(arr) {
  // Write your code here
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let minSum = 0;
  let maxSum = 0;
  for (let num of arr) {
    if (num !== min) {
      maxSum += num;
    }
    if (num !== max) {
      minSum += num;
    }
  }

  return [minSum, maxSum];
}

function SearchingChallenge(str) {
  // Help to replace 3rd character with x
  const replaceWithX = (str) => {
    let results = '';
    for (let i = 0; i < str.length; i++) {
      if ((i + 1) % 3 === 0) {
        results += 'X';
      } else {
        results += str[i];
      }
    }
    return results;
  };

  // check from center of string and compare extreme ends of ends
  const helper = (str, left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.substring(left + 1, right);
  };

  // Temp variables and containers
  let finalResults = '';
  let len = 0;

  // Get potential strings
  for (let i = 0; i < str.length; i++) {
    const odd = helper(str, i, i);
    console.log('Numbered ' + i + ' ', odd);
    // const even = helper(str, i, i + 1);
    // console.log('Numbered ' + i + ' ', even);

    if (odd.length > len) {
      len = odd.length;
      finalResults = odd;
    }

    // if (even.length > len) {
    //   len = even.length;
    //   finalResults = even;
    // }
  }

  // if there is none that is longer than 2 characters, return the string none.
  if (len <= 2) {
    return 'none';
  }
  // console.log(finalResults);
  return replaceWithX(finalResults + 'j1vkoslc4f7');
}

// console.log(SearchingChallenge('racecare'));

function ArrayChallenge(strArr) {
  const sequence = strArr[0];
  const dictionary = strArr[1].split(',');

  for (let i = 1; i < sequence.length; i++) {
    const word1 = sequence.substring(0, i);
    const word2 = sequence.substring(i);

    if (dictionary.includes(word1) && dictionary.includes(word2)) {
      return word1 + ',' + word2;
    }
  }

  return 'not possible';
}

// Return a total price
function calculateTotalPrice(prices, discount) {
  // Write your code here
  let mostExp = 0;
  for (let price of prices) {
    mostExp = Math.max(mostExp, price);
  }

  const revisedPrices = prices.map((p) =>
    p === mostExp ? p * (discount / 100) : p
  );
  console.log(revisedPrices);

  return Math.floor(totalPriceAftDiscount);

  // To debug: console.error('Debug messages...');

  return -1;
}

// console.log(calculateTotalPrice([10, 30, 20, 40], 50));

const getSizing = (length, width, breath, mass) => {
  const bulkyInSize = length * width * breath >= 1000000;
  const bulkyInWeight = length >= 150 || width >= 150 || breath >= 150;
  const massExceeded = mass > 20;
  if (!bulkyInSize && !bulkyInWeight && !massExceeded) return 'STANDARD';
  return 'Not met';
};

// console.log(getSizing(100, 1, 100, 10));

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
function plusMinus(arr) {
  // Write your code here
  if (arr.length === 0) return;
  const ratios = {
    negative: 0,
    zero: 0,
    positive: 0,
  };
  for (let num of arr) {
    if (num < 0) ratios['negative'] += 1;
    if (num >= 1) ratios['positive'] += 1;
    if (num === 0) ratios['zero'] += 1;
  }
  const proportions = [ratios['positive'], ratios['negative'], ratios['zero']];

  for (let num of proportions) console.log((num / arr.length).toFixed(6));
}

// plusMinus([0, 0, -1, 1, 1]);

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
  // Write your code here
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let minSum = 0;
  let maxSum = 0;
  let convertToSet = new Set(arr);
  let checkDuplicates = [...convertToSet];
  if (checkDuplicates.length === 1) {
    minSum = checkDuplicates[0] * (arr.length - 1);
    maxSum = minSum;
    console.log(minSum, maxSum);
    return;
  }
  for (let num of arr) {
    if (num !== min) {
      maxSum += num;
    }
    if (num !== max) {
      minSum += num;
    }
  }
  console.log(minSum, maxSum);
}

// miniMaxSum([5, 5, 5, 5, 5]);

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
  // Write your code here
  const identifier = s.slice(-2);
  let [hrs, min, sec] = s.slice(0, 8).split(':');
  if (identifier === 'PM' && Number(hrs) < 12) hrs = Number(hrs) + 12;
  if (identifier === 'AM' && Number(hrs) === 12) hrs = Number(hrs) - 12;
  if (hrs < 10) hrs = hrs.toString().length === 2 ? hrs.toString() : '0' + hrs;
  return `${hrs}:${min}:${sec}`;
}

// console.log(timeConversion('06:40:03AM'));

// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
function matchingStrings(strings, queries) {
  // Write your code here
  const frequencyResults = [];
  for (let query of queries) {
    const matchingQueries = strings.filter((str) => str === query);
    frequencyResults.push(matchingQueries.length);
  }
  return frequencyResults;
}

// matchingStrings(['a', 'c', 'e', 'g', 'e'], ['e', 'g', 'a']);

//Given an array of integers, where all elements but one occur twice, find the unique element.
function lonelyinteger(a) {
  // Write your code here
  const counter = {};
  for (let i of a) {
    counter[i] = counter[i] + 1 || 1;
  }
  for (let key in counter) {
    if (counter[key] === 1) {
      return key;
    }
  }
}
// lonelyinteger([1, 2, 3, 4, 3, 2, 1]);

function diagonalDifference(arr) {
  // Write your code here
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i === j) {
        leftDiagonal += arr[i][j];
        rightDiagonal += arr[i][arrLength - 1 - j];
      }
    }
  }
  const difference = leftDiagonal - rightDiagonal;
  return Math.abs(difference);
}

// diagonalDifference([
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ]);

// Given a list of integers, count and return the number of times each value appears as an array of integers.
function countingSort(arr) {
  // Write your code here
  const frequencyArr = Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    frequencyArr[arr[i]] += 1;
  }
  console.log(frequencyArr);
  return frequencyArr;
}

// countingSort([1, 2, 3, 5, 6, 6, 6]);

// "abcdefghijklmnopqrstuvwxyz"
function pangrams(s) {
  // Write your code here
  const lowerStr = s.toLowerCase();
  const alphabetsDict = 'abcdefghijklmnopqrstuvwxyz';
  let isPangram = true;
  for (let i = 0; i < alphabetsDict.length; i++) {
    if (!lowerStr.includes(alphabetsDict[i])) {
      isPangram = false;
    }
  }
  return isPangram ? 'pangram' : 'not pangram';
}

function twoArrays(k, A, B) {
  // Write your code here
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    if (sortedA[i] + sortedB[i] < k) {
      return 'NO';
    }
  }
  return 'YES';
}

function compareTriplets(a, b) {
  const scores = {
    a: 0,
    b: 0,
  };
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) scores['a'] += 1;
    if (a[i] < b[i]) scores['b'] += 1;
  }
  return [scores['a'], scores['b']];
}

function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + m).reduce((a, b) => a + b, 0) === d) {
      count += 1;
    }
  }
  return count;
}

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
function sockMerchant(n, ar) {
  // Write your code here
  let count = 0;
  const sortedArr = ar.sort((a, b) => a - b);
  let a = 0;
  let b = 1;
  while (b <= n) {
    if (ar[a] === ar[b]) {
      count += 1;
      a = b + 1;
      b = a + 1;
    } else if (ar[a] !== ar[b]) {
      a++;
      b++;
    } else {
      b++;
    }
  }
  return count;
}

function generateZigZagSequence(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  var n = arr.length;
  var mid = Math.floor((n - 1) / 2);
  var result = [];

  for (var i = 0; i <= mid; i++) {
    result.push(arr[mid - i]);
    if (mid + i !== mid - i) {
      result.push(arr[mid + i]);
    }
  }

  return result;
}

// var arr = [3, 2, 5, 1, 4];
// [1,2,3,4,5]
// [1,4,2,5,3]
// var zigzagSequence = generateZigZagSequence(arr);
// console.log(zigzagSequence);

// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:
function pageCount(n, p) {
  // Write your code here
  let i = 1;
  let countFromFront = 0;
  let countFromBack = 0;

  while (i < p && p !== 1) {
    i = i + 2;
    countFromFront++;
  }

  i = n % 2 === 0 ? n : n - 1;
  while (i > p && p < n) {
    i = i - 2;
    countFromBack++;
  }

  return countFromFront < countFromBack ? countFromFront : countFromBack;
}

function maxMin(k, arr) {
  // Write your code here
  const sortArr = arr.sort((a, b) => a - b);
  let fairnessArr = [];
  for (let i = 0, j = k - 1; j < arr.length; i++, j++) {
    const fairness = sortArr[j] - sortArr[i];
    fairnessArr.push(fairness);
  }
  return Math.min(...fairnessArr);
}

// maxMin(4, [4, 2, 1, 3, 5, 8, 7]);

function balancedSums(arr) {
  // Write your code here
  let rightTotal = arr.reduce((a, b) => a + b, 0);
  let leftTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    rightTotal -= arr[i];
    if (rightTotal === leftTotal || rightTotal === arr[i]) return 'YES';
    leftTotal += arr[i];
  }
  return 'NO';
}

// console.log(balancedSums([5, 6, 8, 7]));

// Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of . If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to  wins the game. Louise always starts.
function counterGame(n) {
  // Write your code here
  let isLouiseTurn = true;
  while (n !== 1) {
    let powerOfTwo = Math.pow(2, Math.floor(Math.log(n) / Math.log(2)));
    if (n === powerOfTwo) {
      n = powerOfTwo / 2;
    } else {
      n -= powerOfTwo;
    }
    isLouiseTurn = !isLouiseTurn;
  }
  return isLouiseTurn ? 'Richard' : 'Louise';
}

function isValid(s) {
  // Write your code here
  const strArray = s.split('');
  const frequency = {};
  for (let char of strArray) {
    frequency[char] = frequency[char] + 1 || 1;
  }
  let countArr = [];
  for (let key in frequency) {
    countArr.push(frequency[key]);
  }
  const removeDup = [...new Set(countArr)];
  console.log(removeDup);
}

// console.log(isValid('aabbcd'));

function isValid2(s) {
  let charCount = {};
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }

  let countFreq = {};
  Object.values(charCount).forEach((count) => {
    countFreq[count] = (countFreq[count] || 0) + 1;
  });

  console.log(countFreq);

  let uniques = Object.keys(countFreq);
  if (uniques.length == 1) {
    return 'YES';
  }
  if (uniques.length == 2) {
    let max = Math.max(uniques[0], uniques[1]);
    let min = Math.min(uniques[0], uniques[1]);
    if (max - min === 1 && countFreq[max] === 1) {
      return 'YES';
    }
    if (min === 1 && countFreq[min] === 1) {
      return 'YES';
    }
  }

  return 'NO';
}

// console.log(isValid2('aabbcd'));

function findMedian(arr) {
  // Write your code here
  const sortedArr = arr.sort((a, b) => a - b);
  const middle = Math.floor((arr.length + 1) / 2);
  return sortedArr[middle - 1];
}

// console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));

function flippingMatrix(matrix) {
  // Write your code here
  const largestNumber = [...matrix[0], ...matrix[1]].sort((a, b) => b - a)[0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {}
  }
}

// flippingMatrix([
//   [1, 2],
//   [3, 4],
// ]);

function processData(input) {
  //Enter your code here

  let q = input.shift();
  // console.log(q);

  // for (let k = 0; k < q; k++) {
  //   let sum = 0;
  //   let n = arr.shift();

  //   let a = [];

  //   for (let i = 0; i < n * 2; i++) {
  //     a[i] = arr.shift().split(' ');
  //   }

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       let otherI = 2 * n - 1 - i;
  //       let otherJ = 2 * n - 1 - j;
  //       sum += Math.max(a[i][j], a[otherI][j], a[i][otherJ], a[otherI][otherJ]);
  //     }
  //   }

  //   console.log(sum);
  // }
}

processData([
  [1, 2],
  [3, 4],
]);

// Longest subArray subsequent
function ArrayChallenge(arr) {
  // code goes here

  // const freq = {};

  // for(let i = 0; i < arr.length; i++) {
  //   freq[arr[i].toString()] = 1;
  // }

  let freq = arr.map((x) => 1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      //  console.log(arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        //  freq[i.toString()] = Math.max(freq[i.toString()], freq[j.toString()] + 1);
        freq[i] = Math.max(freq[i], freq[j] + 1);
      }
    }
  }

  return freq.sort((a, b) => b - a)[0];
}

// Recursive
function superDigit(n, k) {
  // Write your code here
  if (n.length === 1) return Number(n);

  const strArr = n.split('');
  const totalSum = strArr.reduce((a, b) => a + Number(b), 0);

  // console.log(totalSum);
  return superDigit((totalSum * k).toString(), 1);
}

// console.log(superDigit('9875987598759875', 4));

function luckyDate(input) {
  //Enter your code here
  const dateSplit = input.split('-');
  const newDateStr = Number(dateSplit[0]) + dateSplit[1] + dateSplit[2];
  if (parseInt(newDateStr) % 4 === 0) {
    return newDateStr;
  }
}

// console.log(luckyDate('02-08-2024'));

function gridChallenge(grid) {
  // Write your code here
  const subArr = grid.map((arr) => arr.split('').sort());
  for (let i = 0; i < subArr.length - 1; i++) {
    for (let j = 0; j < subArr[i].length; j++) {
      // console.log(subArr[i][j]);
      if (subArr[i][j] > subArr[i + 1][j]) {
        return 'NO';
      }
    }
  }
  return 'YES';
}

// console.log(gridChallenge(['abc', 'ade', 'efg']));

// console.log([1, 2, 3, 4, 5].reverse());

function matchingStrings(stringList, queries) {
  // Write your code here
  const resultsCount = [];

  for (let q of queries) {
    const searchCount = stringList.filter((item) => item === q).length;
    resultsCount.push(searchCount);
  }

  return resultsCount;
}

// console.log(
//   matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
// );

function miniMaxSum(arr) {
  // Write your code here
  const min = Math.max(...arr);
  const max = Math.min(...arr);
  let minSum = arr.filter((num) => num !== max).reduce((a, b) => a + b, 0);
  let maxSum = arr.filter((num) => num !== min).reduce((a, b) => a + b, 0);

  let eliminateDup = new Set(arr);

  if (eliminateDup.size === 1) {
    maxSum = arr[0] * 4;
    minSum = arr[0] * 4;
  }

  console.log(maxSum, minSum);
}

// miniMaxSum([5, 5, 5, 5, 5]);

function birthdayCakeCandles(candles) {
  // Write your code here
  const max = Math.max(...candles);
  return candles.filter((item) => item === max).length;
}

function timeConversion(s) {
  // Write your code here
  const len = s.length;
  const identifier = s.slice(len - 2, len);
  let [hrs, mins, sec] = s.slice(0, len - 2).split(':');
  if (identifier === 'PM' && Number(hrs) < 12) {
    hrs = (Number(hrs) + 12).toString();
  } else if (identifier === 'AM' && Number(hrs) === 12) {
    hrs = '00';
  }
  return `${hrs}:${mins}:${sec}`;
}

// console.log(timeConversion('12:00:00PM'));

// Reverse a linked list
function reverse(llist) {
  let node = llist;

  let next = null;
  let prev = null;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}

function climbingLeaderboard(ranked, player) {
  // Write your code here
  const rankArr = [...new Set(ranked)].sort((a, b) => b - a);

  const results = [];
  let j = 0;
  for (let i = player.length - 1; i >= 0; i--) {
    while (j < rankArr.length && player[i] < rankArr[j]) {
      j++;
    }
    results.push(j + 1);
  }

  return results.reverse();
}

// console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));

function icecreamParlor(m, arr) {
  // Write your code here
  // Write your code here
  let valObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (valObj[arr[i]]) {
      return [valObj[arr[i]], i + 1];
    }
    valObj[m - arr[i]] = i + 1;
  }
}

// icecreamParlor(6, [1, 3, 4, 5, 6]);

// console.log('{{[[(())]]}}'.includes('[]'));

function isBalanced(s) {
  if (s.length % 2 !== 0) return 'NO';

  const count = {};

  for (let bracket of s) {
    count[bracket] = count[bracket] + 1 || 1;
  }

  for (let key in count) {
    if (key === '{' && count['{'] !== count['}']) return 'NO';
    if (key === '(' && count['('] !== count[')']) return 'NO';
    if (key === '[' && count['['] !== count[']']) return 'NO';
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' && s[s.length - 1 - i] !== '}') return 'NO';
    if (s[i] === '(' && s[s.length - 1 - i] !== ')') return 'NO';
    if (s[i] === '[' && s[s.length - 1 - i] !== ']') return 'NO';
  }

  return 'YES';
}

// console.log(isBalanced('{{([])}}'));

function isBalanced2(s) {
  // Write your code here

  console.log(s.includes('{}`'));
  if (s.length % 2 !== 0) {
    return 'NO';
  } else {
    while (s.includes('[]') || s.includes('{}') || s.includes('()')) {
      s = s.replace('[]', '');
      s = s.replace('{}', '');
      s = s.replace('()', '');
    }
  }
  return s.length === 0 ? 'YES' : 'NO';
}

// console.log(isBalanced2('{{([])}}'));

function waiter(number, q) {
  // Write your code here
  const primes = [];
  const divisors = [2, 3, 5, 7];
  let i = 2;
  while (primes.length < q) {
    if (divisors.indexOf(i) !== -1) primes.push(i);
    else {
      if (divisors.every((divisor) => i % divisor !== 0)) {
        primes.push(i);
        divisors.push(i);
      }
    }
    i++;
  }

  console.log(primes);

  let A = [...number];
  let B = [];
  let answers = [];

  for (let i = 0; i < 3; i++) {
    A.filter((num) => {
      if (num % primes[i] === 0) {
        B.unshift(num);
        A.splice(A.indexOf(num), 1);
        return num;
      }
    });
    answers = [...answers, ...B];
    B = [];
  }

  console.log(answers);

  // if (A.length > 0) {
  //   answers = [...answers, ...A];
  // }
  // console.log(answers);
  // return answers;
}

// waiter([3, 4, 7, 6, 5]);

function textEditor(input) {
  //Enter your code here

  // const [Q, ...operations] = input.split('\n');
  let cache = [];

  let S = '';

  input.forEach((item) => {
    const [operator, param] = item.split(' ');
    switch (operator) {
      case '1':
        cache.push({ type: 'append', prev: S });
        S = S + param;
        // console.log(S);
        break;
      case '2':
        cache.push({ type: 'delete', prev: S });
        let indx = Number(param);
        S = S.slice(0, -indx);
        // console.log(S);
        break;
      case '3':
        let index = Number(param);
        console.log(S[index - 1]);
        break;
      case '4':
        if (cache.length > 0) {
          S = cache[cache.length - 1].prev;
          cache.pop();
        }
        break;
      default:
        break;
    }
  });
  // console.log(cache);
  // console.log(cache);
}

// ('abc');
// ('');
// ('xy');
// ('');
// 'abc'('c');
// ('y');
// ('a');

// textEditor(['1 abc', '3 3', '2 3', '1 xy', '3 2', '4', '4', '3 1']);

function minimumBribes(q) {
  // Write your code here
  let bribes = 0;

  for (let i = 0; i < q.length; i++) {
    const originalPos = q[i] - 1;
    const diff = originalPos - i;

    if (diff > 2) {
      console.log('Too chaotic');
    }
  }
}

// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

function countPairs(projectCosts, target) {
  // Write your code here
  const noDuplicates = [...new Set(projectCosts)];
  let count = 0;

  for (let i = 0; i < noDuplicates.length; i++) {
    for (let j = noDuplicates.length - 1; j >= 0; j--) {
      if (noDuplicates[j] - noDuplicates[i] === target) {
        count += 1;
      }
    }
  }

  console.log(count);
}

// countPairs([1, 3, 5, 5], 2);

function budgetShopping(n, bundleQuantities, bundleCosts) {
  // Write your code here
  let count = 0;
  let budget = n;

  const lowestUnitCostIndex = (arr1, arr2) => {
    let length = arr1.length;
    let unitCosts = [];
    for (let i = 0; i < length; i++) {
      unitCosts.push(arr2[i] / arr1[i]);
    }
    let minimum = Math.min(...unitCosts);
    return unitCosts.indexOf(minimum);
  };

  let indx = lowestUnitCostIndex(bundleQuantities, bundleCosts);

  while (budget > bundleCosts[indx]) {
    count += bundleQuantities[indx];
    budget -= bundleCosts[indx];
  }

  for (let cost of bundleCosts) {
    if (budget >= cost) {
      if (budget / cost >= 1) {
        count += (budget / cost).toFixed(0);
      }
    }
  }
  console.log(budget);
  console.log(count);
}

budgetShopping(50, [20, 19], [24, 20]);

function isPangram(pangram) {
  // Write your code here
  const allLetters = 'abcdefghijklmnopqrstuwxyz'.split('');
  const smallCase = pangram.map((sentence) => sentence.toLowerCase());

  const check = (sentence) => {
    for (let i = 0; i < allLetters.length; i++) {
      const find = sentence.find((letter) => letter === allLetters[i]);
      if (find === undefined || find === null) {
        return false;
      }
    }
    return true;
  };

  let results = [];
  for (let sen of smallCase) {
    if (check(sen.split(''))) {
      results.push(1);
    } else {
      results.push(0);
    }
  }

  console.log(results.join(''));
}

// console.log(
//   isPangram([
//     'we promptly judged antique ivory buckles for the next prize',
//     'we promptly judged antique ivory buckles for the prizes',
//     'the quick brown fox jumps over the lazy dog',
//     'the quick brown fox jump over the lazy dog',
//   ])
// );
