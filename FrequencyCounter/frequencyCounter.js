// Write a function that will count each word in a sentence
var countWordInSentence = function (sentence) {
    var wordObject = {};
    var sentenceArray = sentence
        .toLowerCase()
        .split(' ')
        .map(function (char) { return char.replace(/[^A-Za-z0-9]/g, ''); })
        .filter(function (char) { return char !== ''; });
    for (var _i = 0, sentenceArray_1 = sentenceArray; _i < sentenceArray_1.length; _i++) {
        var word = sentenceArray_1[_i];
        wordObject[word] = (wordObject[word] || 0) + 1;
    }
    console.log(wordObject);
};
countWordInSentence('Let see what is the results of this function results results');
