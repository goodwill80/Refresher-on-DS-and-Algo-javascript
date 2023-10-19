const chunkSolution1 = (array, size) => {
  const chunk = [];
  for (let el of array) {
    const lastElement = chunk[chunk.length - 1];
    if (lastElement === undefined || lastElement.length === size) {
      chunk.push([el]);
    } else if (lastElement.length < size) {
      lastElement.push(el);
    }
  }
  console.log(chunk);
};

// chunkSolution1([2, 3, 4, 5, 6, 7, 1], 2);

const chunkSolution2 = (array, size) => {
  const chunk = [];
  let index = 0;
  while (index < array.length) {
    chunk.push(array.slice(index, index + size));
    index += size;
  }
  console.log(chunk);
};

chunkSolution2([2, 3, 4, 5, 6, 7, 1, 6, 6], 2);
