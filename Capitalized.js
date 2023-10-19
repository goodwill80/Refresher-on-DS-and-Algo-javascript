const capitalize1 = (sen) => {
  const senArr = sen.split(' ');

  const cap = (word) => {
    let firstLetter = word[0].toUpperCase();
    let rest = word.slice(1);
    return firstLetter + rest;
  };

  return senArr.map((word) => cap(word)).join(' ');
};

// console.log(capitalize1('the fox jump over the wall'));

const capitalize2 = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

console.log(capitalize2('the fox jump over the wall'));
