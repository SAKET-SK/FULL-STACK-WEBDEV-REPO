"use strict";
// Polymorphism :- One thing many forms. It has 2 concepts under it (Function Overloading and Function Overriding)
// Note that :- TypeScript does not support Function Overloading
function add(x, y) {
    let z;
    z = x + y;
    return z;
}
class CarClass {
    // If we are creating constructor for creating objects, do not make it private. Because objects of private constructor will never be made
    constructor(brand, color, engineCC, chassis) {
        this.brand = brand;
        this.color = color;
        this.engineCC = engineCC;
        this.chassis = chassis;
    }
    display() {
        console.log(this.brand); // can access this private variable within class only
    }
}
class SubCarClass extends CarClass {
    constructor(fuel, brand, color, engineCC, chassis) {
        super(brand, color, engineCC, chassis); // calls the constructor of super i.e parent class
        this.fuel = fuel;
    }
    display() {
        super.display(); // recursion will happen if we did not write this. This calls display of parent class
        console.log(this.fuel);
        console.log(this.chassis);
        // console.log(this.brand)    will throw error as the variable is private
    }
}
let sc = new SubCarClass("CNG", "Hyundai", "Red", 130, 4580);
sc.display();
