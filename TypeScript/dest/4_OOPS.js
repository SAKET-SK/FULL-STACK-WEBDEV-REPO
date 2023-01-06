"use strict";
class Person {
    constructor(name, age, isminor, address, canSpeak) {
        this.name = name;
        this.age = age;
        this.isminor = isminor;
        this.address = address;
        this.canSpeak = canSpeak;
    }
    display() {
        console.log("Details of Person Object");
        console.log(this.name);
        console.log(this.age);
        console.log(this.isminor);
        console.log(this.address);
        console.log(this.canSpeak);
    }
}
let p1 = new Person("p1", 24, false, "Mumbai", true);
p1.display();
let p2 = new Person("p2", 15, true, "Pune", true);
p2.display();
