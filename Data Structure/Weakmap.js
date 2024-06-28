let weakMap = new WeakMap();

let obj = {food: "rasmalai"};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
// weakMap.set("test", "Whoops"); // Error, because "test" is not an object

console.log(weakMap.get(obj));

obj = null; 