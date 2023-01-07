
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
