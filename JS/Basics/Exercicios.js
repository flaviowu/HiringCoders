// Exercícios
// FizzBuzz
// Divisível por 3 =: "Fizz"
// Divisível por 5 =: "Buzz"
// Divisível por 3 e 5 =: "FizzBuzz"
// Se não for um número => "Não é um número"
// Se não for divisível nem por 3 e nem por 5 => Entrada

let resultado = fizzBuzz(91);
console.log(resultado)
function fizzBuzz(entrada) {
    if (typeof entrada != "number") {
        return "Não é um número"
    }
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
        return "FizzBuzz"
    }
    else if (entrada % 3 === 0) {
        return "Fizz"
    }
    else if (entrada % 5 === 0) {
        return "Buzz"
    }
    else {
        return entrada
    }
}

// reverse string

let newStr = "";

function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
        console.log(newStr)
    }
    return newStr
}
let sentence = reverseString("PARALELEPIPEDO");
console.log(newStr)

// Conversor de temperatura
function celsiusToFarenheit(value) {
    return value * 1.8 + 32
}
let tempFarenheit = celsiusToFarenheit(20)
console.log(`O valor em Farenheit é ${tempFarenheit}`)