//If & else statement

let ages=45;
if(ages>=18){
    console.log("you can cast the vote");
}
else{
    console.log("you cannot give vote");
}

let time=5;
if(time<=12){
    console.log("good morning!");
}
else{
    console.log("good evening!");
}

let isStudent=window.prompt();
if(isStudent=True){
    console.log("your are a student");
}
else{
    console.log("you are not a student");
}
let aged=window.prompt();
let have_votingID;

if(aged>=18){
    console.log("you are old enough to have votingId");
}
else{
    console.log("you cannot have a voting id");
}

const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const myresult=document.getElementById("myresult");
let age;
mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
    if(age>=100){
        myresult.textContent="your are too old ";
    }
    else if(age==0){
        myresult.textContent="you just born";
    }
    else if(age>=18){
        myresult.textContent="you are eligable";
    }
    else if(age<0){
        myresult.textContent="you are not yet born";
    }
    else{
        myresult.textContent="you are young";
    }
}