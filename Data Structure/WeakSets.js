const ws = new WeakSet();
const obj1 = {};
const obj2 = {};

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true
console.log(ws.has(obj2)); // true

ws.delete(obj1); // removes foo from the set
ws.has(obj1); // false, foo has been removed

