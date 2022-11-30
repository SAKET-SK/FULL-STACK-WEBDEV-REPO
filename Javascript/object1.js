//array has proerty as length
//array has methods AS join, push, pop, reduce

//simple object
let employee = {
    eid:101,
    ename:"Sayali",
    salary:25000,

    getdetails :function()
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.salary);

    }
};

// console.log(employee);

//employee.getdetails();

//Add / remove property/method in object (dynamically)
// let student={
//     rollno:101,
//     sname:"Akshay",
//     addr:"Pune",

//     getname:function()
//     {
//         console.log(this.sname);
//     }
// }

// student.getname();
// student.course="MEAN/MERN";


// student.getaddr=function()
// {
//     console.log(this.addr);
// }
// console.log("Before delete")
// console.log(student)


// //remove property
// console.log("After delete");

// delete student.addr;
// console.log(student);
// //remove method 
// delete student.getname;


//nested object

let student={

    rollno:101,
    sname:"Sanket",
    address:{
        street:"Camp",
        city:"pune",
        pincode:411005,
        state:"Maharastra",

        getpincode :function()
        {
            console.log(this.pincode);
        }
    },
    getaddress:function()
    {
        console.log("inside student's method:")
        console.log(this.address.street);
        console.log(this.address.city);
        console.log(this.address.pincode);
        console.log(this.address.state);

    }


}

console.log(student);
console.log("Outside object: "+student.address.state);

student.getaddress()
