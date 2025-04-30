var readlineSync = require('readline-sync');


console.log("Programa que soma 10 numeros");
let n = 1;
let i = 1;
let total = 0;
while(n!=0){
    n = parseFloat(readlineSync.question(`Informe o ${i} numero: `));
    total = total + n;
    i++;
}

console.log(`Total = ${total}`);
console.log(total);