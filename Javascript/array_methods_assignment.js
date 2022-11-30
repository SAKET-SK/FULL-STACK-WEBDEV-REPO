// A map holds key value pairs which may be of different data types and

// To create a Map:
// 1) Passing an Array to new Map()
// 2) Create a map and use Map.set() to update


// Way 1 :- Map method
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.get("bananas"));   // Output :- 300

// Way 2 :- Set Method
const bikes = new Map();
bikes.set("Hayabusa",5000);
bikes.set("Honda",3500);
bikes.set("Yamaha",7500);

console.log(bikes.get("Yamaha"));  // Output :- 7500

bikes.set("Yamaha",8000);
console.log(bikes.get("Yamaha"));   // Updates the value to 8000


// The arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function 
// for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

// array.reduce( function(total, currentValue, currentIndex, arr), 
// initialValue )

// function(total, currentValue, index, arr): It is the required parameter and used to run for each element of array. 
//              It contains four parameter which are listed below:
// total: It is required parameter and used to specify the initialValue, or the previously returned value of the function.
// currentValue: It is required parameter and used to specify the value of the current element.
// currentIndex: It is optional parameter and used to specify the array index of the current element.
// arr: It is optional parameter and used to specify the array object the current element belongs to.
// initialValue: It is optional parameter and used to specify the value to be passed to the function as the initial value.

// Using reduce method to return the sum of all elements in the array
var arr = [10, 20, 30, 40, 50];
   
        function sumofArray(sum, num) {
            return sum + num;
        }
        function myFunc(item) {
            document.getElementById("demo").innerHTML
                    = arr.reduce(sumofArray);
        }


// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

const animals = ["Dogs", "Cats", "Monkeys", "Bears"];
animals.splice(2, 2, "Mouse", "Lion");  

// First parameter tells where to add
// Second parameter tells how many elements should be removed

console.log(animals);

const animals1 = ["Dogs", "Cats", "Monkeys", "Bears"];
animals1.splice(2, 0, "Mouse", "Lion"); 
console.log(animals1);

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(3);
console.log(citrus);

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits2.slice(1, 3);  // The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log(citrus1);

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.shift(); // The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(fruits3); // The shift() method returns the value that was "shifted out":
let fruit_shift = fruits3.shift();
console.log(fruit_shift); // Returns Orange as it become first. Shift operation is performed and element is returned

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.join(" * "));
