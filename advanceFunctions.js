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

console.log(getSizing(100, 1, 100, 10));
