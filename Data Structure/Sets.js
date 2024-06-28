const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
console.log(mySet.size) // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"

