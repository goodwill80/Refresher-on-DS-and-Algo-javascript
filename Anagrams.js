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

console.log(anagrams1('race!car', 'carr!ace'));
