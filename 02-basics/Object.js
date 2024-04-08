const NUser={
    Name:"rahul",
    Age:25,
    Email:"rahul25@gmail.com",
    Loggedin:false,
    lastLogday:["Monday","Saturday"],
}

console.log(NUser.Email);
console.log(NUser["Name"]);

NUser.Email="rahul@chatgpt.com";
// Object.freeze(NUser);
// NUser.Email="Rahul@micro.com";
console.log(NUser);
//We can define a function as well in JS object

NUser.myfun= function () {
    
    console.log(`'hello func',${this.Name}`);
}

console.log(NUser.myfun());
