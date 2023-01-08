"use strict";
class PersonClass {
    constructor(name, age, address) {
        this.canSpeak = true;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    display() {
        console.log("Details of Person Object");
        // Printing using Template Literal (`)
        console.log(`Name: ${this.name} | Age: ${this.age} | Address: ${this.address}`);
    }
}
class Employee extends PersonClass {
    constructor(id, salary, name, age, address) {
        super(name, age, address);
        this.id = id;
        this.salary = salary;
    }
    print() {
        // Printing without template literal
        this.display();
        console.log("ID: " + this.id);
        console.log("Salary: " + this.salary);
    }
}
let e1 = new Employee(101, 35000, "E1", 29, "Pune");
// e1.display()
e1.print();
