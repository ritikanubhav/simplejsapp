// let myage=22;
// let dogage=myage*7;
// console.log(dogage);

// let bonus=50;
// bonus++;
// console.log(bonus);
// bonus-=20;
// console.log(bonus);
   
// function printer(){
//     console.log("hello world");
// }
// printer();

// let lap1=89;
// let lap2=90;
// let lap3=32;
// function lapsum(){
//     let sum=lap1+lap2+lap3;
//     console.log(sum);
// }
// lapsum();

// let count=0;
// function increment(){
//     count++;
// }
// for(let i=0;i<3;i++)
// {
//     increment();
// }
// console.log(count);

// let message="you have 3 new notifications";
// let user='ritik';
// console.log(message+', '+user);

// let name="ritik";
// let greeting="hi! my name is ";
// let myGreeting=greeting+name;
// console.log(myGreeting);

// console.log(4+10);
// console.log(4+"10");
// console.log("4"+10);
// console.log("4"+'10');

// let welcomeEl=document.getElementById("welcomeel");
// let name="Ritik";
// let greeting="Welcome! Nice to see you ,";
// let myGreeting=greeting+name;
// myGreeting+='😎';
// welcomeEl.innerText=myGreeting;
// welcomeEl.style.fontSize="5em";

let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("countel");
let count=0;
function increment(){
    count+=1;
    countEl.textContent = count; 
}

function save(){
    let countStr=count+" - ";
    console.log(count);
    saveEl.textContent+=countStr;
    count=0;
    countEl.textContent = count; 
}

// let name='Linda'
// let msg='Hi! there ,'
// let fullmsg=msg+name;
// console.log(fullmsg);

// msg="try agin! something went wrong";
// function errormsg(){
//     document.getElementById("error").textContent = msg;
// }


let paraEl=document.getElementById("para-el");
let oprt=document.getElementById("operator");
let n1=document.getElementById("num1");
let n2=document.getElementById("num2");
function add(){
    let n=+n1.value;
    let m=+n2.value;
    oprt.textContent="+"
    paraEl.textContent="THE SUM IS : ";
    let sum=n+m;
    paraEl.textContent+=sum;
}

function subtract(){
    let n=+n1.value;
    let m=+n2.value;
    oprt.textContent="-"
    paraEl.textContent="THE DIFFERENCE IS : ";
    let sum=n-m;
    paraEl.textContent+=sum;
}
function multiply(){
    let n=+n1.value;
    let m=+n2.value;
    oprt.textContent="x"
    paraEl.textContent="THE PRODUCT IS : ";
    let sum=n*m;
    paraEl.textContent+=sum;
}
function divide(){
    let n=+n1.value;
    let m=+n2.value;
    oprt.textContent="/"
    paraEl.textContent="THE QUOTIENT IS : ";
    let sum=n/m;
    paraEl.textContent+=sum;
}