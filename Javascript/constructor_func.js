
//constructor function
function product(name, price,weight)
{
    this.name=name;
    this.price=price;
    this.weight=weight;
}

let cake1=new product("Black forest",250,0.5);
let cake2=new product("red velvet",400,1);

console.log(cake1);

//adding property dynamically
cake1.shape="Circle";

cake2.color="Black";

//creating objects using class

class car{
    constructor(name,brand,price)
    {
        this.name=name;
        this.brand=brand;
        this.price=price;

    }

}

let car1=new car("Honda city","Honda",20000000);
console.log(car1.name)

let car2=new car("Amaze","Honda",100000)
console.log(car2.name)
