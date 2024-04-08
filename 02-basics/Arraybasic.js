const array=[1,2,3,4,5,6]

const arr= new Array(6,7,8,9);

arr.push(2);

console.log(arr);
arr.unshift(1);
console.log(arr);

const anarr=arr.join();

console.log(arr);
console.log(anarr);
console.log(typeof arr);
console.log(typeof anarr);

//Slice and Splice

const myct=array.slice(1,3);
console.log('A ',myct);
const myct1=array.splice(1,3);
console.log('B ',myct1);
console.log('C ',array);


const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
console.log('All ', concatAll)
