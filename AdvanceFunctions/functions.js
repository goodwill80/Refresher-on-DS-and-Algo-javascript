// 1. Function to perform arithmatic of an array and use a callback to manupulate the results
var arithmaticHandler = function (callback, action) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    // Function to validate the
    var validateNumber = function (num) {
        return isNaN(num) ? 0 : num;
    };
    // Loop through and perfrom arithmatic of the numbers in array
    var result = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        if (action === 'add') {
            result += validateNumber(num);
        }
        else {
            result -= validateNumber(num);
        }
    }
    callback(result);
};
// Callback function
var publishResults = function (message, result) {
    console.log("".concat(message, " ").concat(result));
};
// Calling the function with the callback
arithmaticHandler(publishResults.bind(this, 'The results from the function is'), 'add', 10, 10, 10, 10, 20);
// 2. Higher Order Function
var divisonOfSum = function (num1, num2) {
    return function (deno) {
        return (num1 + num2) / deno;
    };
};
var divisible = divisonOfSum(50, 50);
var divisibleResults = divisible(3);
console.log(divisibleResults);
/*
3. Create a function that gets the minimum value in an array of integers
Specifications:
1. Function must get an array of at least 1 element
2. The function would return the minimum value in the array
Ex1. const arr1 = [65, 11, 213, 78, 99]
console.log(getMin(arr1)) -> "The minimum value in the array is 11"
*/
var findMinInArray = function (arr) {
    var min = 0;
    for (var y = 0, i = 1; i < arr.length; i++) {
        if (arr[i] < arr[y]) {
            min = arr[i];
            y = i;
        }
        else {
            min = arr[y];
        }
    }
    return min;
};
console.log(findMinInArray([20, 10, 15, 4, 12, 2, 9, 12]));
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
var getString = function (text, index1, index2) {
    if (index1 > index2) {
        var temp = index1;
        index1 = index2;
        index2 = temp;
    }
    if (index1 < 0)
        index1 = 0;
    if (index2 > text.length)
        index2 = text.length - 1;
    return text.split('').slice(index1, index2).join('');
};
console.log(getString('jonathan', 2, 5));
