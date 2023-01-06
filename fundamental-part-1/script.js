/*
//linking a javascript file
let js="amazing";
if (js==="amazing") alert("js is fun");
console.log(js);
//values and variables
console.log('willson');
console.log(123);


let firstNmae="willson";
console.log(firstNmae);
console.log(firstNmae);
console.log(firstNmae);

let yourName=prompt("what is your name")
alert(yourName);
console.log(yourName);
// assigment
let country="Nepal";
let continent="Asia";
let population="2million";
console.log(alert("country= "+country));
console.log("continent= "+continent);
console.log("population= "+population);
*/
/*
// variables
let javaScriptIsFun=true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

console.log(typeof "willson");
console.log(typeof 123);
 

javaScriptIsFun="willson"; //dynamic data type
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null)


//assigment
let isIsland=false;
let language;
let population=2000000;
let country="Nepal"
console.log(typeof isIsland );
console.log(typeof language );
console.log(typeof population );
console.log(typeof country);
*/
/*
//let const var 
let age=23;
age=25;
console.log(age);

const birthYear=2000;
// birthYear=2001 //constant variable cannot be changed

var yourName="willson";
yourName="loveson"
console.log(yourName);

*/


/*
// opetrators

// maths operator
const now=2023
const willsonAge=now-2000;
const lovesonAge=now-2006;
console.log(willsonAge,lovesonAge);

console.log(willsonAge*2 , willsonAge/5, 2**3)
// 2**3 means two to the power 3
const firstNmae='willson';
const lastName='ghimire';
console.log(firstNmae+lastName);
console.log(firstNmae+ " " +lastName);

// assigment operator
let x=15+10;//x=25
x+=5;//x=x+5
x++;//x=x+1
x--;
x--;

console.log(x);

// comparision operator
console.log(willsonAge>lovesonAge);
console.log(lovesonAge>=16);

// assignment
let population=10000000;
console.log(population/2);
population+=1;
console.log(population);
console.log(population>6000000);
console.log(population<33000000);
let description="Portugal is in Europe " ;
console.log(description);
*/

/*
// string and templete literal

const firstName='willson';
const job='teacher';
const birthYear=2000;
const year='2023';

console.log("I'm " + firstName + ", a " + job +" " +(year-birthYear) + " old");

const newNmae=`I'm ${firstName}, a ${job} ${year-birthYear} old`;
console.log(newNmae);


console.log("string\n\with\n\multiple lines ");
console.log(`string
with
multiple lines`);*/

/*
// if else statement
const age=19;
if(age>=18){
    console.log(`you can able to drive🚗`);
}
else{
    const yearLeft=18-age;
    console.log(`you should wait ${yearLeft} years to drive`)
}

const birthYear=1990;
let century;
if(birthYear<=2000){
    century=20;
}
else{
    century=21;
}
console.log(`this is ${century} century`);
*/

/*
// type conversion
const inputYear='1990';
console.log(Number(inputYear), inputYear);
console.log(inputYear +  20);
console.log(Number(inputYear) + 20);

// type coercion
console.log('I am '+ 25 +' years old')
console.log('10'+5);
console.log(10+3+2+'10')
console.log('10'-5); 
*/


/*
// 5 falsy value: 0, '', undefined, null, NaN 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('willson'));
console.log(Boolean({}));
console.log(Boolean(''));

const money=0;
if(money){
    console.log(`Don't spend it all!`);

}
else{
    console.log(`You should get a job`);
}
let height=1;
if(height){
    console.log(`YEH Height is difined`);

}
else{
    console.log(`Height is undefined`);
}
*/

/*

// equility operator
const age=23;
if(age===23) console.log(`your age is 23:(strictly)`);
const ages="23";
if(ages==23) console.log(`your age is 23 (loosly)`); 

const favNumber=prompt("what is your favorite number?");
console.log(favNumber);
if(favNumber==="23"){
    console.log(`your fav number is 23 `);
}

const favNum=Number(prompt("what is your favorite number?"));
if(favNum===23){
    console.log(`your fav number is 23 `);
}
else if(favNum===7){
    console.log('your fav number is 7');
} 
else if(favNum===9){
    console.log('your fav number is 9');
}
else {
    console.log('your fav number is not 9 or 7 or 27');
} 
if(favNum!==23){
    console.log(`your fav number is not 23`);
}

*/

/*
// switch statement 
const day='thursday';
switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to cooding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write a code examples');
        break;
    case 'friday':
        console.log('Record video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekand!!!');
        break;
    default:
        console.log('Invalid day');


}

if(day==='monday'){
    console.log('plan course structure');
    console.log('Go to cooding meetup');
}
else if(day==='tuesday'){
    console.log('prepare theory video');
}
else if(day==='wednesday' || day==='thursday'){
    console.log('Write a code example');

}
else if(day==='friday'){
    console.log('Record a video');
}
else if(day==='saturday' || day==='sunday'){
    console.log('Enjoy the day!!');
}
else{
    console.log('Invalid day');
}
*/

/*
// conditional tertry operator

const age=33;
// age>=18? console.log(`I like to drink wine`):console.log(`I like to drink water`);
const drink=age>=18? 'wine':'water';
console.log(drink);

let drink2;
if(age>=18){
    drink2='wine'
}
else{

    drink2='water';
}
console.log(drink2);
console.log(`I like to drink ${age>=18? 'wine':'water'}`);
*/