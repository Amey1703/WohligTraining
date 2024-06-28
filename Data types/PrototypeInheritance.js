
function Person(fName, lName){
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.getName = function(){
    return `${this.fName} ${this.lName}`;
}

function SuperHero(fName, lName){
    Person.call(this, fName, lName); //prototype inheritance
    this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
    console.log("Fighting Crime");
}

SuperHero.prototype = Object.create(Person.prototype);

const spiderman = new SuperHero("Tobey", "Maguire")

SuperHero.prototype.constructor = SuperHero;

console.log(spiderman.getName());
