"use strict";
//Primitive Data types :- Number String Boolean
let a = 10;
// let a = 10
// a="JavaScript"   this line will give error
console.log(a);
let s = "TypeScript";
console.log(s);
let b = true;
console.log(b);
const v1 = 6.0;
console.log(v1);
// Anything written after (:) is considered as data type in TS
let p = 10;
console.log(p);
//Array Demonstration
let numbers = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A0"];
console.log(numbers);
// Tuple
// When we need to store data in some combination, then use Tuple
let tupledemo = ["student1", 1001];
console.log(tupledemo);
// [1002,"student2"] will give error
// Union : This or that
let x1 = true;
console.log(x1);
x1 = 12;
console.log(x1);
// x1 = "Hello" -> Will give error
// Any : Any type of value can be specified to the variable {number,string,character,object,boolean,etc...}
let var1 = "Hello";
console.log(var1);
var1 = 1300;
console.log(var1);
var1 = false;
console.log(var1);
let student1 = { name: "S1", grade: 77 };
console.log(student1);
console.log(typeof (student1));
// Enum : used when you have some specific values to be assigned. For ex:- we told days var that it will be getting 7 possible values
var days;
(function (days) {
    days[days["mon"] = 0] = "mon";
    days[days["tue"] = 1] = "tue";
    days[days["wed"] = 2] = "wed";
    days[days["thu"] = 3] = "thu";
    days[days["fri"] = 4] = "fri";
    days[days["sat"] = 5] = "sat";
    days[days["sun"] = 6] = "sun";
})(days || (days = {})); //starts with 0
console.log(days.tue); //remembering days var name is easy instead of its contents
