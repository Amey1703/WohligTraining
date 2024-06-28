
let colors = ['red', 'green', 'blue']
colors[3] = "black"
colors.push(1)
console.log(colors);
colors = colors.sort()
console.log((colors));
colors = colors.reverse()
console.log((colors));

colors.forEach((color) => console.log(color));

let myArr1 = ['a', 'b', 'c'];
let a1 = myArr1.map(function (item) {
    return item.toUpperCase();
});
console.log(a1);

