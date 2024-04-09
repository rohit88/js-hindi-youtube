const user={

    username:"rohit",
    price:1000,

    welcomemsg:function()
    {
        console.log(`${this.username} welcome to site`);
    }
}

user.welcomemsg();
user.username = "Sam";
user.welcomemsg();


function coffee()
{
    const username="rohit";
    console.log(this.username);
}

coffee();

const coffee1= function()
{
    const username="rohit";
    console.log(this.username);
}
coffee1();

const coffee2= ()=>
{
    const username="rohit";
    console.log(this.username);
}
coffee2();

//all the above function will return undefined

const addthree=(num1,num2)=>{
    return num1+num2;
}

console.log(addthree(2,3));
// if we use curly parenthesis
const addn=(num1,num2)=>num1+num2
const addn1=(num1,num2)=>(num1+num2)

console.log(addn(5,6));
console.log(addn1(1,9));
//object can always be return inside () parenthesis
const addn2=(num1,num2)=>({"username":"rohit"})
console.log(addn2(1,9));

