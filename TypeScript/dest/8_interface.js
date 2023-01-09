"use strict";
// We cannot create objects of Interface as there are no method definition in it.
// There is only signature / declaration. So what is the use of that object?
class Circle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    area() {
        let area_circle;
        area_circle = 3.14 * this.radius * this.radius;
        return area_circle;
    }
}
let c = new Circle("blue", 9);
let circle_result = c.area();
console.log(`Area of circle: ${circle_result}`);
