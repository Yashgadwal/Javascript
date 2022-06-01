// Video URL == https://youtu.be/xSv-9Yod83Q?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL
let impArray = ['Iphone','MacBook','Asus'];

localStorage.setItem('Name',"YG");

localStorage.setItem('Name2',"Rohan");

localStorage.setItem('Phone',JSON.stringify(impArray));

let name = localStorage.getItem('Name');

let Phone = JSON.parse(localStorage.getItem('Phone'));

// localStorage.clear();

Phone.push('Telsa');

// console.log(Phone);

localStorage.removeItem('Name2');



sessionStorage.setItem('SessionName',"YG");

sessionStorage.setItem('SessionName2',"Rohan");

sessionStorage.setItem('SessionPhone',JSON.stringify(impArray));

// sessionStorage automatically clear when we close Browser 