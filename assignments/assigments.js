/*
// values and variables
const country='Nepal';
const continent='Asia';
let population=10 ;
console.log(country,continent,population)

// Data Types 
const isIsland=false;
let language='Nepali';
console.log(typeof isIsland,typeof population,typeof country,typeof language);


// Basic operators 
// population=population/2;
// population++;
// console.log(population);
// console.log(population>6);
// console.log(population>33);
// const description=country + ' is in ' + continent + ', and its ' + population + ' million people speaks ' + language;
// console.log(description);


// Template Literals 
const descriptions=`${country} is in ${continent}, and its ${population} million people speaks ${language} `;
console.log(descriptions);

// if else statements 
// population=130;
if (population>33){
    console.log(`${country}'s populations is above average`);
}
else{
    console.log(`${country}'s population is ${population} below average`);
}


// type conversion and coercion 
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

// Equility operators: == vs === 
let  numNeighbours=Number(prompt('How many neighbour countries does your country have?'));
if(numNeighbours===1){
    console.log(`only 1 border!`)
}
else if(numNeighbours>1){
    console.log(`More than 1 border's`);
}
else{
    console.log(`No borders`);
}
*/

/*
// Logical operator 

let country='Nepal';
let language='english';
let population=40;
let isIsland=false;
if (language==='english' && population<50 && !isIsland){
    console.log(`You should live in ${country}`);
}
else{
    console.log(`${country} does not meet your criteria`);
}
*/
/*
// The switch statement 
let language='mandarin';
switch(language){
    case 'chinese':
    case 'mandarin':
        console.log(`most number of native speaker's`);
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}
*/
// The condition (Ternary) Operator 

const population=130;
population>30? console.log('Nepal population is above average') : console.log('Nepal population is below average');