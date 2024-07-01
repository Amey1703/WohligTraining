class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    tellUsAboutYourself() {
        return`My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`;
    }

    woof(){
        return "Woof¡";
    }
}

class Cat {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    meow(){
        return "Meow¡";
    }

}

const moti = new Dog("Moti", 7,"German Shepherd");

console.log(moti.tellUsAboutYourself());

const momo = new Cat("Momo", 4,"Persian")
const jetty = new Cat("Jetty", 5,"Bengal Stray")
const sheru = new Cat("Sheru", 3,"British Shorthair")

console.log(moti.tellUsAboutYourself.call(momo));
console.log(moti.tellUsAboutYourself.apply(jetty));
const describeSheru = moti.tellUsAboutYourself.bind(sheru)
console.log(describeSheru())
