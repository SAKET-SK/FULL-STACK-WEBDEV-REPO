
//Array of numbers
let array=[12,34,78,90,45,77,10]

let array_str=["JS", "HTML","CSS", "JQuery"]

//using direct indices
console.log(array[0]);
console.log(array[2]);
console.log(array[1]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);  //undefined

//whole array in one line
console.log(array_str);
console.log("Array length: "+array_str.length);


//using loop
for(let i=0;i<array.length;i++)
    console.log(array[i]);

console.log("Even elements from array")
for(i=0;i<array.length;i++)
{
    if(array[i]%2==0)
    console.log(array[i]);

}

//using enhanced for loop (using index)
console.log("Using for & index")
for (i in array)
{
    console.log(array[i])
}

//using enhanced for loop (using element)
console.log("Using for with element")
for (element of array)
{
    console.log(element)
}

//for each
//arrayname.foreach()
array.forEach(function(element)
{
    console.log(element);
});

array.forEach(item =>
    {
        console.log(item);
    })

