const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

/**
 * When a for...of loop iterates over an iterable, it first calls the iterable's [@@iterator]() method, which returns an iterator, and then repeatedly calls the resulting iterator's next() method to produce the sequence of values to be assigned to variable.
 */

let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;

    if (j % 2 === 0) continue checkJ;
    console.log(`${j} is odd.`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}
