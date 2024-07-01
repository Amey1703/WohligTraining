// normal function call
function greet() {
    console.log("Hello");
    console.log("World");
}

// greet();

// genearator function call

function* genearatorFunction() {
    yield "Hello";
    yield "World";
}

const generatorObj = genearatorFunction();

for(const obj of generatorObj){
    console.log(obj);
}