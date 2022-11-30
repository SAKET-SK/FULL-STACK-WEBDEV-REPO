let product={

    pname:"Slice cake",
    brand:"Britania",
    price:20,
    exp_date:{
        day:5,
        month:12,
        year:2022,

        getdate_inside:function()
        {
            console.log(this.day);
        }

    },

    getdate:function()
    {
        console.log("Inside product method")
        console.log(this.exp_date.day)
        
        console.log(this.exp_date.month)
        console.log(this.exp_date.year)
    },
    getprice:function()
    {
        console.log(this.price);
    }
}

// console.log(product.exp_date.day);
product.getdate();
product.exp_date.getdate_inside();
console.log(product.exp_date);

// JSON: JavaScript Object Notation
// {day: 5, month: 12, year: 2022, getdate_inside: ƒ}
