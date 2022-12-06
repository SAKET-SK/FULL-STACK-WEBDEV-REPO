// Simple Object
let student = {
    id : 101,
    name : "Student 1",
    percentage : 65,

    getStudentDetails :function()
    {
        console.log(this.id);
        console.log(this.name);
        console.log(this.percentage);
    }
};

// Using Nested Objects
let product={
    product_no : 101,
    product_name : "Fish Oil",
    manufacture_detail:{
        weight: "70 Kg",
        mrp : 130,
        packed_date : "12/01/2022",
        expiry_date : "12/06/2022",

        getcost :function()
        {
            console.log(this.mrp);
        }
    },
    getdetail:function()
    {
        console.log(this.manufacture_detail.weight);
        console.log(this.manufacture_detail.mrp);
        console.log(this.manufacture_detail.packed_date);
        console.log(this.manufacture_detail.expiry_date);
    }
}

// Using Constructor Function
function Person(first, last, age, eye) {       // This is a constructor function
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const person1 = new Person("John", "Doe", 50, "blue");
console.log("Using Constructor Function");
console.log("Age of the person :- " + person1.age);

// Using class constructor
class Polygon {
    constructor() {
      this.name = 'Polygon';      // Constructor function inside class
    }
}
const poly1 = new Polygon();      // Create object to invoke constructor
console.log("Usiing Object inside the class")
console.log(poly1.name);          // Name will be printed on console
  