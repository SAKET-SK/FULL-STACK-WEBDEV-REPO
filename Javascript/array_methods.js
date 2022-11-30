//function: directly written functions
//method: functions with object 

arr=["Kalyani", "Sayali","Rutvik", "Suraj","Akshay"]


// add new value to array
console.log("Array before push:", arr);
arr.push("Pallavi")
console.log("Array after push:", arr);

arr.pop()
console.log("Array after pop:", arr);

// arr.reverse()
// console.log("Array after reverse:", arr);

arr.sort()
console.log("Array after sort:", arr);


let num_arrray=[45,78,90,12,34,77];
num_arrray.sort()
console.log("Array sorted in ascending order:", num_arrray);

num_arrray.sort(function(a,b)
{
    return b-a;
});
console.log("Array sorted in descending order :", num_arrray);

//Array with different tyes of elements
let mixed_array=["Ram",56,78.90];
console.log(mixed_array)
