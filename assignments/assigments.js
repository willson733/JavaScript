

// ---------------------------Fundamental part 1------------------------------------------
// --------values and variables
/*
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


// ---------Template Literals 
const descriptions=`${country} is in ${continent}, and its ${population} million people speaks ${language} `;
console.log(descriptions);

// ----------if else statements 
// population=130;
if (population>33){
    console.log(`${country}'s populations is above average`);
}
else{
    console.log(`${country}'s population is ${population} below average`);
}


//------------- type conversion and coercion 
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

//---------------- Equility operators: == vs === 
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
// ------------------Logical operator 

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
// ---------------The switch statement 
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
// -------------The condition (Ternary) Operator 
/*
const population=130;
population>30? console.log('Nepal population is above average') : console.log('Nepal population is below average');
*/



// --------------------------------------------Fundamental part 2-----------------------

// ------function 
/*
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity} `;
}
const country1=describeCountry('Nepal',30,'Kathmandu');
const country2=describeCountry('India', 100,'New Delhi');
const country3=describeCountry('America' ,300,'Washington D.C')

console.log(country1);
console.log(country2);
console.log(country3);
*/


// --------Function Deceleration vs. Expression 

/*
function percentageWorld1(population){  //function deceleration
    return (population/7900) *100;
}
const percentageWorld1=function(population){ //function expression
    return (population/7900 )*100;
}
const country1=percentageWorld1(300);
const country2=percentageWorld1(4000);
const country3=percentageWorld1(100);
console.log(country1,country2,country3);
*/

// --------- arrow function 

/*
const percentageWorld3=  population=> population/7900 *100 ;
const country=console.log(percentageWorld3(4000));
*/
 

// -------Function calling another function 
/*
const describePopulation =function(country,population){
    const percentage=percentageOfWorld1(population);
    console.log(`${country} has ${population} million population which is about ${percentage}% of world `)

}

const percentageOfWorld1=function(population){
    return population/7900 *100;
}

describePopulation('Nepal',80);
describePopulation('India' ,300);
describePopulation('china', 500);
*/

//---------Introduction to array 
/*
const percentageOfWorld1=function(population){
    return population/7900 *100;
}
const populations=[40,200.,1000,380];
console.log(populations.length===4);

const percentage=[
percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])
];
console.log(percentage);
*/

// ---------Basic array operation methods 
/*
const neighbour=['India', 'China','Bhutan','Pakistan'];
neighbour.push('utopia');
console.log(neighbour);
neighbour.pop('utopia');
console.log(neighbour);
if (neighbour!=='Germany') console.log(`Probably not a central Europe :D`);
neighbour[neighbour.indexOf('China')] ='Nepal';
console.log(neighbour);

'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
*/

/*
// ------------Introduction to object 

const myCountry={
    countryName:'Nepal',
    language:'Nepali',
    capital:'Kathmandu',
    population:40,
    neighbour:['India', 'China','Bhutan','Pakistan'],
    
};
console.log(`${myCountry.countryName} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capital called ${myCountry.capital}.`);



// ----------dot vs bracket notation
myCountry.population+=2;
console.log(myCountry);
myCountry['population']-=2;
console.log(myCountry);

//----------object method
const myCountry1={
    countryName:'Nepal',
    language:'Nepali',
    capital:'Kathmandu',
    population:40,
    neighbour:['India', 'China','Bhutan','Pakistan'],
     describe:function(){
        console.log(`${this.countryName} has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neighbouring coountry and capital called ${this.capital}.`);
    },
    checkIsland:function(){
        this.isIsland=this.neighbour.length===0?'true':'false';
    }

    
    
};
myCountry1.describe();
myCountry1.checkIsland()
console.log(myCountry1);

*/


/*
//---------for loop
for (let vote=1;vote<=50;vote++){
    console.log(`voter number ${vote} is currently voting`);
}
//--------looping array
const populations=[40,200.,1000,380];
const percentageOfworld=function(population){
  return population/7900 *100;
    }
const percentage2=[];
for (let i=0; i<populations.length;i++){
    const per=percentageOfworld(populations[i]);
    percentage2.push(per);
}
console.log(percentage2);
*/

/*
//-----looping backward and loop inside loop 

const listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];
for(let i=0;i<listOfNeighbours.length;i++){
for (let j=0;j<listOfNeighbours[i].length;j++){
    console.log(`Neighbour:${listOfNeighbours[i][j]}`);
}
}
*/
 

// -------while loop 

const populations=[40,200.,1000,380];
const percentageOfworld=function(population){
  return population/7900 *100;
    }
const percentage3=[];
let i=0;
while(i<populations.length){
   const per= percentageOfworld(populations[i])
   percentage3.push(per);
}
console.log(percentage3);