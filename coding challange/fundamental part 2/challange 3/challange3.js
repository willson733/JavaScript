const mark={
    fullName:'Mark Miller',
    massMark:78,
    heightMark:1.69,
    clacBmi:function(){
        this.bmi= this.massMark/this.heightMark**2;
        return this.bmi;
    },
}
const john={
    fullName:'Mark Miller',
    massJohn:78,
    heightJohn:1.69,
    clacBmi:function(){
        this.bmi= this.massJohn/this.heightJohn**2;
        return this.bmi;

    }
}
mark.clacBmi();
john.clacBmi();
console.log(`${mark.bmi>john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`: `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName} BMI(${mark.bmi})`}`);