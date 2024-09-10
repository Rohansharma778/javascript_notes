const name="Rohan"
const repoCount=50

console.log(name+repoCount+"value")//don t use this                        

console.log(`hello my name is ${name}`)// prefer this one

const GameName=new String('hiteshhc')

console.log(GameName[0]);
console.log(GameName.__proto__);

console.log(GameName.length);
console.log(GameName.toUpperCase())
console.log(GameName.charAt(7));
console.log(GameName.indexOf("e"));
console.log(GameName.substring(0,5)); //substring ignore  negative index
console.log(GameName.slice(-8,4));  
/*so in hiteshhc has indexing from 0 to 7 we said -8 so the pointer  
will go towards starting where the char on index 8 is h so h is remove the values comes is (ite)*/
const newString="   hitesh   "
console.log(newString.trim());

const url="https://rohan.com/Rohan%20sharma"
console.log(url.replace('%20','-'));

const Name="rohan/sharma"
console.log(Name.replace('/','-'));
console.log(Name.includes('sharma'));
const Name1=("im-Rohan-sharma-from-mumbai")

console.log(Name1.split('-'));






