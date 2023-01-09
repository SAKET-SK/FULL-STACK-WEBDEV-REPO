// Polymorphism :- One thing many forms. It has 2 concepts under it (Function Overloading and Function Overriding)
// Note that :- TypeScript does not support Function Overloading

function add(x: number, y:number):number     // The 'number' here is return type
{
    let z: number
    z = x + y
    return z
}

class CarClass{
    private brand: string;    // Accessible within only this Car class
    color: string;
    engineCC: number;
    public chassis: number;    // No need to write public, it is by default and and accessible everywhere

    // If we are creating constructor for creating objects, do not make it private. Because objects of private constructor will never be made
    constructor(brand: string, color: string, engineCC: number, chassis: number)
    {
        this.brand = brand;
        this.color = color;
        this.engineCC = engineCC;
        this.chassis = chassis;
    }
    protected display(){           // making it protected means, it is accessible only to the subclasses of Car Class
        console.log(this.brand)    // can access this private variable within class only
    }
}


class SubCarClass extends CarClass{
    fuel: string; 

    constructor(fuel: string, brand: string, color: string, engineCC: number, chassis: number)
    {
        super(brand,color,engineCC,chassis);      // calls the constructor of super i.e parent class
        this.fuel = fuel
    }
    display()    // Overriding means, function name and parameters same, difference is one is in parent class and other is in subclass
    {
        super.display()  // recursion will happen if we did not write this. This calls display of parent class
        console.log(this.fuel)
        console.log(this.chassis)
        // console.log(this.brand)    will throw error as the variable is private
    }
}
let sc = new SubCarClass("CNG","Hyundai","Red",130,4580)
sc.display()

