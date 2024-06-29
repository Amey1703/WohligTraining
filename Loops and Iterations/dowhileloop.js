let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

// Second example
let result = "";
let j = 0;
do {
  j += 1;
  result += `${j} `;
} while (j > 0 && i < 5);
// Despite j === 0 this will still loop as it starts off without the test

console.log(result);
