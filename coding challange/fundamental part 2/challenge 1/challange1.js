const calcAverage=(a,b,c)=>(a+b+c)/3;

// test1 
let scoreDolphins=calcAverage(44,23,71);
let scoreKoalas=calcAverage(65,54,49);

function checkWinner(avgDolphins,avgKoalas){
    if (avgDolphins>=avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    }
    else if (avgKoalas>=avgDolphins*2){
        console.log(`Koalas win (${avgKoalas}) vs ${avgDolphins}`)
    }
    else{
        console.log(`No one win`)
    }
}
checkWinner(scoreDolphins,scoreKoalas);

// test 2 
 scoreDolphins=calcAverage(85,54,41);
 scoreKoalas=calcAverage(23,34,27)

 checkWinner(scoreDolphins,scoreKoalas);