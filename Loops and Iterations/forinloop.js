const object = new Object({a: 1, b: 2, c: 3});

for(let property in object) {
    console.log(`${property}: ${object[property]}`);
}

const fruit = {
    name: "apple",
    color: "red",
    taste: "sweet"
}

for (let property in fruit) {
    console.log(property.toUpperCase());
}