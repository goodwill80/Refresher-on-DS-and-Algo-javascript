console.log('test');

const printingSteps = (num) => {
  for (let i = 0; i < num; i++) {
    let steps = '';
    for (let j = num - 1; j > i; j--) {
      steps += ' ';
    }
    for (let k = 0; k <= i; k++) {
      steps += '#';
    }
    console.log(steps);
  }
};

// printingSteps(10);
