const bills=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const total=[];
const calcTip=function(data){
   return  data>=50 && data<=300 ? 0.15*data:0.20*data;
}
for (let i=0;i<10;i++){
    tips.push(calcTip(bills[i]));
    total.push(bills[i]+calcTip(bills[i]));
}
console.log(`tips is ${tips}`);
console.log(`total bill is ${total}`);




const calcAvg=function(arr){
    let sum=0;
    for (let i=0;i<=arr.length-1;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(calcAvg([23,44,55]));
console.log(calcAvg(tips));
console.log(calcAvg(total));