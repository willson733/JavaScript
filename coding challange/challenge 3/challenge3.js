const scoreDolphins=(96+108+110)/3;
const scoreKoalas=(88+91+110)/3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log(`Dolphin win the trophy!!`);

}
else if (scoreDolphins < scoreKoalas){
    console.log(`Koalas wins the trophy!!`);
}
else if (scoreDolphins === scoreKoalas){
    console.log(`Both wins the trophy!!`);
}


// bonous 1
if(scoreDolphins>scoreKoalas && scoreDolphins>=100){
    console.log(`Dolphins wins the trophy🏆`)
}
else if(scoreDolphins<scoreKoalas&&scoreKoalas>=100){
    console.log(`Koalas win the trophy🏆`);
}
else if(scoreDolphins===scoreKoalas &&scoreDolphins>=100 && scoreKoalas>=100){
    console.log(`Both win the trophy🏆`)
}
else{

    console.log(`No one win the trophy🏆`)
}