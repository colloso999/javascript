// CLASS INHERITANCE
//
// to create a class inheritance, use "extends" keyword
//
// A class created with  a class inherits all methods from another class
//
// Create a class named "model" which will inherit the methods from "Car"
// 
// the super() refers to the parent class
//
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class
class Car {
	constructor(brand) {
		 this.carName = brand;
	}
	present() {
		return "I have a " + this.carName;
	}
}

class Model extends Car {
	constructor(brand, mod) {
		super(brand);
		this.model = mod;
	}
	show() {
		return this.present() + " it is a " + this.model;
	}
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show())
