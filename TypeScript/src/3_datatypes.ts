//Primitive Data types :- Number String Boolean
let a:number=10
// let a = 10
// a="JavaScript"   this line will give error
console.log(a)

let s:string="TypeScript"
console.log(s)
let b:boolean=true
console.log(b)
const v1=6.0
console.log(v1)

// Anything written after (:) is considered as data type in TS
let p:10=10
console.log(p)

//Array Demonstration
let numbers: string[] = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A0"]
console.log(numbers)

// Tuple
// When we need to store data in some combination, then use Tuple

let tupledemo:[string,number]=["student1",1001]
console.log(tupledemo)
// [1002,"student2"] will give error


// Union : This or that
let x1:(boolean | number) = true
console.log(x1)
x1 = 12
console.log(x1)
// x1 = "Hello" -> Will give error

// Any : Any type of value can be specified to the variable {number,string,character,object,boolean,etc...}
let var1: any="Hello"
console.log(var1)
var1 = 1300
console.log(var1)
var1 = false
console.log(var1)

// Object
type myObject = {name:string, grade:number}
let student1: myObject = {name:"S1",grade:77}
console.log(student1)
console.log(typeof (student1))

// Enum : used when you have some specific values to be assigned. For ex:- we told days var that it will be getting 7 possible values
enum days{mon,tue,wed,thu,fri,sat,sun} //starts with 0
console.log(days.tue)   //remembering days var name is easy instead of its contents
