// By using function inside a () parentesis it will automatically gets called at global level

(function coffee(){
console.log("hello DB Connected");
})();

((name)=>{
    console.log(`DB COnnected ${name}` );
})("rohit");