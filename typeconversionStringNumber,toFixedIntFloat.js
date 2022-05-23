// type conversion adn type coercion

let myvar ;
myvar = String(34); //Type conversion
console.log(myvar);

let bolVar = String(true);
console.log(bolVar);

let arr = String([1,2,3,4,5,6,7,8,9,10]);
console.log(arr.length); //For Finding The Lenght Of Array

let i = 8;
console.log(i.toString());

let forNumber = Number('432');
console.log(forNumber); 

// NaN = "Not A Number";

let number = parseInt('21');
console.log(number);

let floatt = parseFloat('21');
console.log(floatt.toFixed(9));

// toFixed() is used for adding .000 after a number 
// It is basically used in ecommerce price section. 

// type coercion 

let str = '432';
let num = 342;
console.log(str + num);
