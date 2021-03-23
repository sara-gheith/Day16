class Pets {
    constructor(name, legs) {
        this._name = name;
        this.legs = legs;
    }
    walk(numberOfLegs) {
        numberOfLegs = this._name + " is walking on " + this.legs + " legs";
        return numberOfLegs;
    }
}

class Dog extends Pets {
    constructor(name, legs) {
        super(name)
        this.legs = legs;
    }

    bark(dogSay) {
        dogSay = this._name + " says WUF-WUF";
        return dogSay;
    }

}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}