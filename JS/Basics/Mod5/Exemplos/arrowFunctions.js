// function

function functionSoma(a, b) {
    return a + b
}

console.log(functionSoma(3,5))  //8

//arrow function

const arrowSoma = (num1, num2) => num1 + num2

const sayHello = name => `Hello ${name}`


console.log(sayHello("Kahrrl"))
console.log(`Arrow Function Soma: ${arrowSoma(3,5)}`)