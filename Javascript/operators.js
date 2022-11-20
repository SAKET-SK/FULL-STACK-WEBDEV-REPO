//Arithmatic operators

let a=10;
let b=40;
let x=5;
let y=4;
console.log("Addition: ", a+b);
console.log("Subtraction: ",a-b);
console.log("Multiplication: ",a*b);
console.log("Division: ",a/b);
console.log("Modulus operator: ",a%b);
console.log("Power: ",x**y);
//a=a+1
//first increment the value & then use it
console.log("Pre increment: ",++a);

// b++;
//first use value & increment it
console.log("Post increment: ",b++);
// --a;
// a--

// Assignment Operators

console.log("***Assignment operators***");

let z=10;
console.log(z);

z +=5;
//z = z+5
console.log(z);

z -=5;
console.log(z);

z *=5
console.log(z);

z /=2
console.log(z);

z %=5;
console.log(z);

z=5
z **=2
console.log(z);

// Comparison operator
let m=10;
let n=5;

console.log(m==n)
console.log(m<n)
console.log(m<=n)
console.log(m>n)
console.log(m>=n)
console.log(m!=n)

let var1='5';
// == checks only value
console.log(n == var1)

// === check value as well as type
console.log(n === var1)

//Logical operators
console.log("***Logical operators***")

let p=45;
let q=90

//logical operator (true && true then true)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(p >40 && q>=90);

//logical or (||)(Any one is true then true)
console.log(p >90 || q>90);

console.log((p>40 && q >50) || q>0);  //true


console.log((p>50 && q >50) || q>0 ) //true


console.log(p>50 && q >50 || q>0)  //

//logical not (reverse the result)
console.log(!true)

//undefined
let k;
console.log(typeof k);

//Null object
let c=null;


console.log(typeof c);
