let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let anydate=new Date(2023,20,10,10,10)
console.log(anydate.toLocaleString())

anydate.toLocaleString('default',{
    weekday:"long",
    month:"short"
})