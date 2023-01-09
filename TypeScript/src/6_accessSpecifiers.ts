class Car{
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
        console.log(this.color) 
        console.log(this.engineCC)
        console.log(this.chassis)
    }
}
// let c1 = new Car("Hyundai","Red",130,4580);
// c1.display()                                      // for displaying private variable
// console.log(c1.chassis)

class SubCar extends Car{
    fuel: string; 

    constructor(fuel: string, brand: string, color: string, engineCC: number, chassis: number)
    {
        super(brand,color,engineCC,chassis);      // calls the constructor of super i.e parent class
        this.fuel = fuel
    }
    print()
    {
        this.display()
        console.log(this.fuel)
    }
}
let sc1 = new SubCar("CNG","Hyundai","Red",130,4580)
// sc1.display()     // a derived class object can access parent class object, if it is private or protected, then it is not for the outside world
                     // for protected, it will be accessible within subclasses but not outside world
sc1.print()

// To recap:
// 1) Public : accessible everywhere
// 2) Protected : accessible to same class and its subclasses
// 3) Private : accessible within same class ONLY
