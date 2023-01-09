"use strict";
class Car {
    // If we are creating constructor for creating objects, do not make it private. Because objects of private constructor will never be made
    constructor(brand, color, engineCC, chassis) {
        this.brand = brand;
        this.color = color;
        this.engineCC = engineCC;
        this.chassis = chassis;
    }
    display() {
        console.log(this.brand); // can access this private variable within class only
        console.log(this.color);
        console.log(this.engineCC);
        console.log(this.chassis);
    }
}
// let c1 = new Car("Hyundai","Red",130,4580);
// c1.display()                                      // for displaying private variable
// console.log(c1.chassis)
class SubCar extends Car {
    constructor(fuel, brand, color, engineCC, chassis) {
        super(brand, color, engineCC, chassis); // calls the constructor of super i.e parent class
        this.fuel = fuel;
    }
    print() {
        this.display();
        console.log(this.fuel);
    }
}
let sc1 = new SubCar("CNG", "Hyundai", "Red", 130, 4580);
// sc1.display()     // a derived class object can access parent class object, if it is private or protected, then it is not for the outside world
// for protected, it will be accessible within subclasses but not outside world
sc1.print();
// To recap:
// 1) Public : accessible everywhere
// 2) Protected : accessible to same class and its subclasses
// 3) Private : accessible within same class ONLY
