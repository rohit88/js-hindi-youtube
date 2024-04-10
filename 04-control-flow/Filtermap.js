const myarr=[1,2,3,4,5,6,7,8]
// const abc = myarr.forEach(item => {
//   console.log(item);
//   return item;  
// });

// console.log(abc);

const abc = myarr.filter(item=>{
return item;    
});
console.log(abc);

    

//filter can filter data but map return data as it is.

const myarr1=[10,20,30,40,50,60,70,80];

const ab=myarr1
                .map((val)=>val*2)
                .map((num)=>num+2)
                .filter((vl)=>vl>=30);

console.log(ab);

const myarr2=[10,20,30];

const abn=myarr2.reduce((prev,neu)=> (prev+neu),0);

console.log(abn);

