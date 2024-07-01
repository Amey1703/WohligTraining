
// implicit binding

const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

person.greet();

// explicit binding
globalThis.name = 'John';
function greet() {
    console.log(`Hello ${this.name}`);
}

greet.call(person);

// new binding

function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log(`Hello ${this.name}`);
    }
}

const shanty = new Person('Shanty');
shanty.greet();

/** order of precedence
 * new binding
 * explicit binding 
 * implicit binding 
 * default binding **/
