// TS é um JS com coleira.
// Será necessário usar o comando 
// $ tsc -- init
// para transpilar:
// $ tsc
function somar(n1: number, n2: number){
    return n1+n2
}

const n1 = 10;
const n2 = 5;

const resultado = somar(n1, n2)
console.log(resultado)