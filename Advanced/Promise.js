const P1=new Promise(function(resolve,reject) {
setTimeout(function(){
    console.log("One used")
    resolve()
},1000)
}) 
// without resolve() mentioning it will not go back to cally then method
P1.then(function(){
    console.log("outside one");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("2nd promise")
        resolve()
    },1000)
}).then(function(){
    console.log("outside two");
})

const Pro3=new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("Inside three")
        resolve({username:"Rohit",Email:"rshukla@ab.com"})
    },1000);
    
})
Pro3.then(function(user){
    console.log(user.username,user.Email);
});

const pro4=new Promise(function(resolve,reject) {
    setTimeout(function(params) {
        let error=false;
        if(!error)
        {
            resolve({username:"rohit","Email":"rohi@rj.com"})
        }
        else{
            reject('Error:Something went wrong')
        }
    },1000)
})

pro4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally Promise  got executed");
})

const pro5=new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error=false;
        if(!error)
        {
            resolve({Course:"rohit",Fee:300})
        }
        else{
            reject('Error:Javascript went wrong')
        }
    },1000)

})

async function getPro5(){
    try {
        const resp5= await pro5;
        console.log(resp5);
    } catch (error) {
        console.log(error);
    }
    
}
getPro5();

async function getallUsers() {
    try {
        const allUsers=await fetch('https://jsonplaceholder.typicode.com/users');
        const users= await allUsers.json()
        console.log(users);
    } catch (error) {
        console.log("ohhho Error",error);
    }
    
}

//getallUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((obj)=>{
    return obj.json();
})
.then((result)=>{
    const users=result
    console.log(users);
}).catch((error)=>{
  console.log("ohhho realy error",error);
})
