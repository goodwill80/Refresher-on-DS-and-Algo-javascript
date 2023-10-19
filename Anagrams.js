const anagrams1 = (strA, strB) => {
  const strMap = (str) => {
    let map = {};
    for (let letter of str.replace(/[^\w]/g, '')) {
      map[letter] = (map[letter] || 0) + 1;
    }
    return map;
  };

  const mapA = strMap(strA);
  const mapB = strMap(strB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) {
      return false;
    }
  }
  return true;
};

// console.log(anagrams1('race!car', 'carr!ace'));

const anagrams2 = (strA, strB) => {
  //helper to clean and sort string
  const cleanStr = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  };

  // Compare
  return cleanStr(strA) === cleanStr(strB);
};

console.log(anagrams2('race!car', 'carr!ace'));
