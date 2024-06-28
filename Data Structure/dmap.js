let coll = new Map();

coll.set("name", "Amey");
coll.set("age", 21);
coll.set("email", "A@b.com");
console.log(coll.size)
console.log(coll.get("name"));
console.log(coll.has("email"))

for(const [key, val] of coll){
    console.log(`{${key} : ${val}}`);
}