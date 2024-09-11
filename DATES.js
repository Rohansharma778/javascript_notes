//Dates

let myDate=new Date()
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());



let myCreatedDate = new Date(2050, 3, 12);
console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()); //january start from 0 so september is 8
console.log(newDate.getDay()+1);


newDate .toLocaleString('default',{
    dayPeriod: "long",
})







