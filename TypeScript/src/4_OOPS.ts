class Person{
    // contains properties and behavior
    // contains variables (instances) and functions

    // declare variables first and then use them inside the constructor
    // This is how you specify strong typing in TypeScript
    name:string
    age:number
    isminor:boolean
    address:string
    canSpeak:boolean

    constructor(name:string, age:number, isminor:boolean, address:string, canSpeak:boolean)
    {
        this.name = name;
        this.age = age;
        this.isminor = isminor;
        this.address = address;
        this.canSpeak = canSpeak;
    }
    display()
    {
        console.log("Details of Person Object")
        console.log(this.name)
        console.log(this.age)
        console.log(this.isminor)
        console.log(this.address)
        console.log(this.canSpeak)

    }
}
let p1 = new Person("p1",24,false,"Mumbai",true)
p1.display()
let p2 = new Person("p2",15,true,"Pune",true)
p2.display()
