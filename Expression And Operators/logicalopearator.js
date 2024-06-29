const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true && false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" && "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" && false; // t || f returns Cat

const result = [o1, o2, o3, o4, o5,o6,o7];

console.log(result);