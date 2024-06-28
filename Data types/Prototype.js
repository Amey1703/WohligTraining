
    function Person(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }


    Person.prototype.getFullName = function (){
        return `${this.fName} ${this.lName}`;
    }

    const person1 = new Person("John", "Wick")
    const person2 = new Person("Tobey", "Maguire")

    console.log(person1.getFullName());
    console.log(person2.getFullName());

// second example
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk


]
  