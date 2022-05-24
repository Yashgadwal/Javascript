// Video Link https://youtu.be/nlRtAF8Gu0A?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL

let Numbers = [23,42,53,35,54,33,77];
const phones = ['Redmi','Oppo','Apple','Realme'];
const all =  ['redmi',21,];
console.log(phones[2]);
console.log(Numbers.length);

console.log(Array.isArray(/*It will print true if array else false*/
    Numbers
));

phones[0] = "Infinix"; //For Changing the Value of array

let val = Numbers.indexOf(42);
console.log("The index of Given Number is " + val);

// For adding in Array
// phones.push("vivo"); //It will add in the last 

// phones.unshift("Asus"); //It will add in the Start 

// phones.pop(); //It will Delete the last element of array

// phones.shift(); //It will Delete the First element of array

// Numbers.splice(0,2); //Give the starting positon and ending postion for Delete

phones.reverse(); //It will reverse the array

let forConcat = ["Raistar","Skylord","Pahadi Gaming"];


console.log(phones.concat(forConcat));

console.clear();

let myObj = {
 /*Key*/   Name : "Akshay",//Value
    Channel : "Raistar",
    Subscriber : "5 Millions",
    PhoneName : "Iphone"
}

console.log(myObj.Channel);
console.log(myObj["PhoneName"]);