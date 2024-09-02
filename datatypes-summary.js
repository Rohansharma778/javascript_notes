//primitive

//7 types:strings,number,boolean,null,undefined,symbol,BigInt
 const score=100
 const scoreValue=100.3
 const IsloggedIn=false
 const outsideTemp=null
 let userEmail;

 const Id=Symbol('123')
const anotherId=Symbol('123')
console.log(Id==anotherId)
const BigNumber=63254276543752n
console.log(typeof BigNumber)
//Reference(Non primitive)

//Array,Objects,function
const heros=["skatiman","doga","naagraj"];
let myObj={
    name:"Rohan",
    age:21,
 }
const myFunction=function(){
    console.log("hello world");
}

console.log(myFunction);




// memory
// stack(primitive),heap(primitive)
let myyoutubename="Rohansharma.com"
let anothername=myyoutubename
anothername="sharmarohan"

console.log(myyoutubename);
console.log(anothername);


let userOne={
    email:"user@google.com"
}
let userTwo=userOne

userTwo.email="rohan@google.com"

console.log(userOne.email)
console.log(userTwo.email)

