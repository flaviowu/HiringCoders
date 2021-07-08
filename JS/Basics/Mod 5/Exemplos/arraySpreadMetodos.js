const twice = ["Tzuyu", "Momo", "Dahyun", "Mina", "Sana", "Jihyo"]

// Acessando a array twice
console.log(twice[2])  // Dahyun
console.log(twice[3])  // Mina

// Operador Spread (...)

const twiceComplete = [...twice, "JeongYong", "ChaeYong", "Nayeon"]
console.log(twiceComplete)

// Métodos de iteração
// tradicionalmente:
for (let i = 0; i< twiceComplete.length; i++) {
    console.log(twiceComplete[i])
}
console.log("-==-=-=-=-")
twiceComplete.map(member => console.log(`- ${member}`))

// Filter
const numeros = [34, 45, 67, 90, 55, 76]
console.log(numeros)
const numerosImpares = numeros.filter(numero => numero % 2 != 0)  // números ímpares
console.log(`Números ímpares: ${numerosImpares}`)
const numerosPares = numeros.filter(numero => numero % 2 == 0)  // números pares
console.log(`Números pares: ${numerosPares}`)

// Sort arr.sort([funcaoDeComparacao])
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const numerosOrdemCrescente = numeros.sort()
console.log(numerosOrdemCrescente)

const numerosOrdemDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdemDecrescente)

// reduce - reduz nosso array a um resultado de uma operação matemática
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 34, 35]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
},5)

console.log(soma) // 75

