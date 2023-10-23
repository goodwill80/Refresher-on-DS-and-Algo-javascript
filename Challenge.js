function countPairs(projectCosts, target) {
  // Write your code here
  let pair = 0;
  const sorted = projectCosts.sort((a, b) => b - a);
  for (let i = 0; i < sorted.length; i++) {
    for (let j = sorted.length - 1; j >= 0; j--) {
      if (sorted[j] - sorted[i] === target && sorted[i] !== sorted[j]) {
        pair += 1;
      }
    }
  }
  return pair;
}

// console.log(countPairs([1, 3, 5], 2));

function closedPaths(number) {
  // Write your code here
  let sum = 0;

  while (number !== 0) {
    let cl = number % 10;
    if (cl === 0 || cl === 4 || cl === 6 || cl === 9) {
      sum += 1;
    }
    if (cl === 8) {
      sum += 2;
    }
    number = number / 10;
  }

  return sum;
}

// console.log(closedPaths(649578));

// Location Detection
function getRegions(ip_addresses) {
  // Write your code here
}

const countPairs2 = (costs, target) => {
  let count = 0;

  const sortedCosts = costs.sort((a, b) => a - b);
  let index = 1;

  while (index <= sortedCosts.length - 1) {
    if (
      sortedCosts[index] !== sortedCosts[index - 1] &&
      sortedCosts[index] - sortedCosts[index - 1] === target
    ) {
      count += 1;
    }
    index += 1;
  }
  console.log(count);
};

// countPairs2([1, 3, 5], 2);

function catAndMouse(x, y, z) {
  const calculateDist = (cat, mouse) => {
    return cat - mouse >= 0 ? cat - mouse : mouse - cat;
  };

  const catADist = calculateDist(x, z);
  const catBDist = calculateDist(y, z);

  console.log(catADist);
  console.log(catBDist);

  if (catADist < catBDist) {
    return 'Cat A';
  } else {
    return 'Cat B';
  }
}

catAndMouse(2, 5, 4);
