const map= new Map()
map.set("in","India")
map.set("us","USA")
map.set("fr","France")
map.set("in","India")

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}
console.log("==================================");

const coding=["c++","java","dotnet","ruby","python"];

coding.forEach(element => {
    console.log(element);
});