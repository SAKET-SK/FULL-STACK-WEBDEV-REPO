"use strict";
class Product {
    constructor(id, _name) {
        this.id = id;
        this._name = _name;
    }
    // Generalized way
    setID(id) {
        this.id = id;
    }
    getID() {
        return this.id;
    }
    // Getter and Setters are usually defined for all attributes which are defined. Here we used only for ID
    // Another way of writing Getter and Setter 
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    display() {
        console.log(`ID = ${this.id} | Name = ${this._name}`);
    }
}
let obj = new Product(1001, "Hard Disk"); // used the name of the object as this because easy names are taken
obj.display();
obj.setID(1002);
obj.name = "Laptop"; // It might look simple here. Internally the above getters and setters are being called
obj.display();
