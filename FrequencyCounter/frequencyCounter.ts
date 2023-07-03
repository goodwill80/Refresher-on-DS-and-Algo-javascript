// Write a function that will count each word in a sentence
const countWordInSentence = (sentence: string) => {
  const wordObject = {};
  const sentenceArray = sentence
    .toLowerCase()
    .split(' ')
    .map((char) => char.replace(/[^A-Za-z0-9]/g, ''))
    .filter((char) => char !== '');

  for (let word of sentenceArray) {
    wordObject[word] = (wordObject[word] || 0) + 1;
  }

  console.log(wordObject);
};

countWordInSentence(
  'Let see what is the results of this function results results'
);
