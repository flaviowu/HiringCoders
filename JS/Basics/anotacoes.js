// Variáveis
var myMovie = "Lord of the Rings"
console.log(myMovie);

// declaração de variáveis
// Escopo: global, função, resignificação, redeclração, hospedagem
var schoolName = "Gama"
// Escopo: função, bloqueado, resignificação
let language = "JavaScript"
// Escopo: função, bloqueado - necessita sempre atribuir valor quando declarada
const pattern = "ECMASript"

{
    var age1 = 32
    let age2 = 112
    console.log("Variável age2:" + age2)
}
console.log(age1) // vaiáveis globais
// não será printada pois está fora do bloco de código

// Tipos de dados
// String
// Number
// null
// undefined
// Boolean
var isStudent = true
// Object 
var superHero = { "alias": "Superman", "secretIdentity": "Clark Kent", "age": 35, "profession": "journalist" }
// Array
var students = ["Ciclope", "Beast", "Iceman"]
// function
function sum(a, b) {
    return a + b
}

//operador typeof
console.log(typeof age1)
console.log(typeof myMovie)
console.log(typeof students)
console.log(typeof superHero)
console.log(typeof isStudent)
console.log(typeof sum)

// Operadores
// Aritméticos: (+, -, *, /, %, ++, --)
var sum, sub, mul, div, mod, inc, dec, x, y
sum = 6 + 3
sub = 6 - 3
mul = 6 * 3
div = 6 / 3
mod = 51 % 3
inc = 3
console.log("incremento " + inc)
inc++
dec = 3
console.log("decremento " + dec)
dec--
console.log("=-=-=-=-=-=-=-=-=-=-=-=-")
console.log("soma " + sum)
console.log("subtação " + sub)
console.log("multiplicação " + mul)
console.log("divisão " + div)
console.log("resto " + mod)
console.log("incremento " + inc)
console.log("decremento " + dec)
console.log("=-=-=-=-=-=-=-=-=-=-=-=-")
// Atribuição (=, +=, -=, *=, /=)
x = 6
y = 15
console.log("x= " + x)
console.log("y= " + y)
console.log(x += y)
console.log(x -= y)
console.log(x *= y)
console.log(x /= y)
// Comparação (==, ===, !=, <, >, <=, >=)
// Operadores lógicos (&& || !)
console.log("=-=-=-=-=-=-=-=-=-=-=-=-")
// Estruturas condicionais
var numero = 1;
if (numero === 1) {
    console.log("Numero é igual a 1")
} else {
    console.log("Numero nao é igual a 1")
}
console.log("=-=-=-=-=-=-=-=-=-=-=-=-")
var mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", "oitembro"]
for (value of mes) {
    switch (value) {
        case "janeiro":
            console.log("mes 1");
            break
        case "fevereiro":
            console.log("mes 2");
            break
        case "março":
            console.log("mes 3");
            break
        case "abril":
            console.log("mes 4");
            break
        case "junho":
            console.log("mes 5");
            break
        case "julho":
            console.log("mes 6");
            break
        case "agosto":
            console.log("mes 8");
            break
        case "setembro":
            console.log("mes 9");
            break
        case "outubro":
            console.log("mes 10");
            break
        case "novembro":
            console.log("mes 11");
            break
        case "dezembro":
            console.log("mes 12");
            break
        default:
            console.log("Este não é um mês válido!")
    }
}
console.log("=-=-=-=-=-=-=-=-=-=-=-=-")

var listaDeBichos = ["cachorro", "gato"];

function sayAnimal(animal) {

    switch (animal) {
        case "cachorro":
            console.log("woof")
            break
        case "gato":
            console.log("meow")
            break
    }
}

for (value of listaDeBichos) {
    sayAnimal(value);
}
console.log("=-=-=-=-=-=-=-=-=-=-=-=-")
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo "${this.title}" de ${this.author}`
    }
}

let book1 = new Book("O pássaro Secreto", "Marilia Arnaud", 326);
let book2 = new Book("Minha Vida de Rata", "Joyce Carol Oates", 514)
console.log(book1.read())
console.log(book1, book2)

// Herança
class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook("Algoritmos para Viver", "Brian", 500, "Algoritmos");
console.log(itBook);

// Encapsulamento
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person("John Doe");
console.log(person.name);
person.name = "Jane Doe";
console.log(person.name);
