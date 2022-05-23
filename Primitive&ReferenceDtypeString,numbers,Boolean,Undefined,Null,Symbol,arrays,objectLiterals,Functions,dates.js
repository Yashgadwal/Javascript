/*
Primitive DataType = Memory allocation in Stack.

1.Strings
2.numbers
3.Boolean
4.undefined
5.Null
6.Symbol


Reference DataType = Memory allocation in Heap.
Heap = Dynamic Memory.

1.Arrays
2.Object Literals
3.Functions
4.Dates

typeof() is used for Checking Datatype.
*/

let name = "YG";
let marks = 499;
let bol = true;
let null1 = null;
let und = undefined;

console.log("My String is"+" " +name);

console.log(typeof(name));
console.log(typeof(marks));
console.log(typeof(null1));
console.log(typeof(und));
console.log(typeof(und));


// Reference DataType
console.log(" ");
console.log("Reference DataType");

myarr = [21,43256,32546];
console.log(typeof(myarr));

// Object Literals
let marks1 ={
    yg:432,
    Ram:32,
    Shaym:132,
}

console.log(typeof(marks1));

let date = new Date();
console.log(date);