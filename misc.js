const maxChar = (str) => {
  const strArr = str.split('');
  const frequency = {};
  for (let letter of strArr) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }
  let maxCount = 0;
  let target;
  console.log(frequency);
  for (let key in frequency) {
    maxCount = Math.max(maxCount, frequency[key]);
    if (frequency[key] === maxCount) {
      target = key;
    }
  }
  console.log(`The letter ${target} has the most count at ${maxCount}`);
};

// maxChar('aaaaaaaaccakenmd');

