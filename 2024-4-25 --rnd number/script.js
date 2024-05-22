const rl = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
let count = 0;
let i = Math.random(1, 100) * 100;

function nummer () {
    count++;
    rl.question('Sag zahl du kek \n', (useranwser) => {
       
if (useranwser == i.toFixed(0)) {
    console.log('richtig')
    console.log(count)
    rl.close();
} 
else if (useranwser > i){
    console.log('too higher')
    nummer();
}
else if (useranwser < i){
    console.log('too lower')
    nummer();
}
    });

    
}


nummer();