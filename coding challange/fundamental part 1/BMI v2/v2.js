const massMark=60;
const heightMark=6;
const massJohn=50;
const heightJohn=6.5;
const bmiMark=massMark/heightMark **2;
const bmiJohn=massJohn/heightJohn**2;
console.log(`markbmi = ${bmiMark}`);
console.log(`johnbmi=${bmiJohn}`);
let result;
if(bmiMark>bmiJohn){
result=`Mark's BMI(${bmiMark}) is higher than John's BMI(${bmiJohn})`;
}else{
    result=`Mark's BMI${(bmiMark)} is lower than John's BMI(${bmiJohn})`;
}
console.log(result);