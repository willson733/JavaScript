
/*
// strict mode activiting
'use strict';
let hasDrivingLicenses= false;
const passTest= true;
if(passTest) hasDrivingLicense=true;
if( hasDrivingLicenses) console.log(`You can drive`);

// const interface='audio';
// const private=40;
// const if=30;
*/

/*
// functions

function logger(){
    console.log(`My name is willson`);
}
logger();//calling,invoking a function
logger();
logger();

function fruitProcessor(apple, orange){
    
  const  juice=`juice with ${apple} apple and ${orange} orange`;
  return juice;
}

const appleJuice=fruitProcessor(4,0);
console.log(appleJuice);


console.log(`${fruitProcessor(5,6)}`);


const orangeAppleJuice=fruitProcessor(4, 5);
console.log(orangeAppleJuice);

*/

/*
// function decleration and expression

//  decleration

function calcAge1(birthYear){
    
    return 2023-birthYear;
}
const age1=calcAge1(2000);


// expression 

const calcage2=function(birthYear){
return 2023-birthYear;
}
const age2=calcAge1(2000)

console.log(age1, age2);
*/

/*

// Arrow function 

const calcAge3=birthYear=> 2023-birthYear;
age3=calcAge3(2000)
console.log(age3);


const yearUntilRetirement=(birthYear, firstName)=>{
    const age=2023-birthYear;
    const retirement=58-age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetirement(2000,'willson'));
*/

/*
// function calling other function 

function cutFruitPieces(fruit) {
    return fruit*4;
}

function fruitProcessor(apple,orange) {
    const applePieces=cutFruitPieces(apple); //function calling anothe function
    const orangePieces=cutFruitPieces(orange);
    const juice=`Juice with ${applePieces} apple piece and ${orangePieces} orange piece`;
    return juice;
}
console.log(fruitProcessor(4,6));
*/

/*

// arrays


const names=['willson', 'bishal','loveson'];
console.log(names);

const num=[22,334,66,444]
console.log(num);

console.log(names[0]);
console.log(names.length);

names[2]='anil';
console.log(names);

const firstName='willson'
const willson=[firstName, 'Ghimire',2023-2000,names]
console.log(willson);

// exercise

const calcAge1=function(birthYear){
    return 2023-birthYear;
}
const years=[1980,1999,2000,2010];

const age1=calcAge1(years[0]);
const age2=calcAge1(years[1]);
const age3=calcAge1(years[years.length-1])



console.log(age1,age2,age3)
const ages=[calcAge1(years[0]),calcAge1(years[1]),calcAge1(years[years.length-1])]

console.log(ages);
*/

/*
// Object 

const willson{
    firstName='willson';
    lastName='ghimire';
    age=2023-2000;
    job='teacher';
    friends=['anil','suman','krishna'];

}
*/
/*

// dot vs bracket notation

const willson= {
    firstName:'willson',
    lastName:'ghimire',
    age:2023-2000,
    job:'teacher',
    friends:['anil','suman','krishna'],

}
console.log(willson.lastName);

console.log(willson['firstName']);

const namekey="Name";
console.log(willson['first'+namekey]);

const willsonInfo=prompt(`what do you want to know about willson?firstName,lastName,age,job,friends`);
if (willson[willsonInfo]){

    console.log(willson[willsonInfo]);
}
else{
    console.log(`Invalid input! what do you want to know about willson?firstName,lastName,age,job,friends`);
}


console.log(`${willson.firstName} has friends ${willson.friends.length}, and his best friend name is ${willson['friends'][0]}`);
*/

/*
// object method 


const willson= {
    firstName:'willson',
    lastName:'ghimire',
    birthYear:2000,
    job:'teacher',
    friends:['anil','suman','krishna'],
    hasDrivingLicence:false,

// calcAge:function(birthYear){
//     return 2023-birthYear;

     calcAge:function () {
    // console.log(this)
    this.age=2023-this.birthYear;
    return this.age;
     },

    getSummery:function(){
        return `${this.firstName} is a ${this.calcAge()} old ${this.job} and he has ${this.hasDrivingLicence? 'a':'no'} driving licencee`;

    }


}


console.log(willson.calcAge());
console.log(willson.age);
console.log(willson.age);


console.log(willson.getSummery())
*/


// iteration the for loop 
/*
for (let i=1;i<=10;i++){
    console.log(`the number is printed ${i} times`);
}
*/

/*
// looping array breaking and continue 

const willson= [
    'willson',
    'ghimre',
    2023-2000,
    true,
    ['anil','suman','krishna']
]
const types=[];
for(let i=0;i<willson.length;i++){
    console.log(willson[i] ,typeof willson[i] );
    types.push(typeof willson[i])
}
console.log(types);

// continue and breaking 

for(let i=0;i<willson.length;i++){
    if (typeof willson[i]!=='string') continue;
    console.log(willson[i] ,typeof willson[i] );
    
}
for(let i=0;i<willson.length;i++){
    if (typeof willson[i]==='number') break;
    console.log(willson[i] ,typeof willson[i] );
    
}
*/
/*
// backward looping and loop inside loop 

const willson= [
    'willson',
    'ghimre',
    2023-2000,
    true,
    ['anil','suman','krishna']
]
for(let i=willson.length-1;i>=0;i--){
    console.log(willson[i]);
}

for(let exercise=1;exercise<4;exercise++){
    console.log(`-------exercise ${exercise}`);
    for (let rep=1;rep<6;rep++){
        console.log(`weight lifting repetation ${rep}`);
    }
}
*/

/*
// The while looop 

let rep=1;
while(rep!=5){
    console.log(`weight lifting repetation ${rep}`);
    rep++;
}


// roll a dice 
let dice=Math.trunc(Math.random() *6)+1
while (dice!==6){
    console.log(`your rolled ${dice}`)
    dice=Math.trunc(Math.random() *6)+1;
    if (dice===6) console.log(`it is about to end`);
}
*/