const billValue=270;
const tip=billValue>=50 && billValue<=300?0.15*billValue:0.20*billValue;
console.log(`The bill was ${billValue}, the tip was ${tip} and the total value ${billValue+tip}`);