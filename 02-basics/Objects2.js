//const tinderUser= new Object();
const tinderUser={};
tinderUser.id=123;
tinderUser.name="anc",
tinderUser.mail="anc@123.com"

const regularUser={
    Email:"reguser@gmail.com",
    Fullname:{
        username:{
        Fname:"Rohit",
        Lname:"Shukla",
        }
    }
}

console.log(regularUser.Fullname.username.Fname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign(obj1,obj2);

const obj4= {...obj1,...obj2};
console.log(obj4);

const faceUser=[
    {
        id:1,
        Name:"Aman",
    },
    {
        id:2,
        Name:"Rahul",
    },
    {
        id:3,
        Name:"Raj",
    },
    {
        id:4,
        Name:"Akshay",
    },
    {
        id:1,
        Name:"Rajiv",
    }
]

console.log(faceUser[1].Name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));


const course={
    coursename:"Javascript",
    Price:"1000",
    Instructor:"Rohit"
}

let {Instructor:inst}=course;
console.log(inst);



