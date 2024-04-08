const marvel=["Rohit","Aman","Sanyog"]
const Ind=["Raj","Appu"];
//marvel.push(Ind);
console.log(marvel);

// const Ctarr=marvel.concat(Ind);
// console.log(Ctarr);
console.log(marvel);

//Spread operator which spreads and concatinate 

const Allarr=[...marvel,...Ind];
console.log(Allarr);

const testarr=[1,2,3,[4,5],6,[7,8,[9,10]]];
console.log(testarr.flat(1));

console.log(Array.isArray("rohit"));
console.log(Array.from("rohit"));

const t1=100;
const t2=200;
const t3=300;

console.log(Array.of(t1,t2,t3));
