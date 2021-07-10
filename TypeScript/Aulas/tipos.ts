// https://www.typescriptlang.org/docs/handbook

// Boolean
const contaPaga: boolean = false;


// Number
const idade: number = 55;
const avaliacao: number = 7.0;

// String
const nome: string = "Zhang WenMing";

// Array
const idades: number[] = [12, 552, 15, 95, 47, 997];
const idades2: Array<number> = [15, 87, 66, 147, 997741];

// Tuple
let jogadores: [string, string, string, boolean];
jogadores = ["Fulano", "Sicrano", "Urano", true]

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any - quando não sei qual a tipagem
const retornoDaAPI: any[] = [123, "Groot", false];

// Void - indica que a função não retorna nada
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const undfnd: undefined = undefined;
const nll: null = null;

//Object
function criar(objeto: object) {
    //...
}
criar({
    nome: "StarLord"
})
// criar("StarLord") // dá erro

// Never
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(): never {
    return erro("algo falhou")
}

// múltiplos tipos, Union Types
const nota: string | number = 20

function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota("10");
exibirNota(10);
exibirNota(nota);
// exibirNota(true) // não é permitido pela Union Type

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNasc: Date;
}

// type Funcionarios = Array<Funcionario>
const funcionarios: Funcionario[] = [{
    nome: "Steve",
    sobrenome: "Rogers",
    dataNasc: new Date()
}, {
    nome: "Tony",
    sobrenome: "Stark",
    dataNasc: new Date()
}, {
    nome: "Thor",
    sobrenome: "Odinson",
    dataNasc: new Date()
}];

function chamarVingadores(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log(funcionario.nome)
    }
}