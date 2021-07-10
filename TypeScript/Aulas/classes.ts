// https://www.typescriptlang.org/play?#code/
// json = "compilerOptions"  ==> "target": es5  --> transpila para EcmaScript 5 
class Data {
    // public dia: number;
    // private mes: number;
    // protected ano: number;

    constructor(public dia: number, private mes: number, private ano: number = 1970) {  // 1970 é o valor default do parametro ano
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2021)
console.log(data.dia)
// console.log(data.mes) // mes é privado - POO

const data2 = new Data(1, 1);  // data2 = 01/01/1970

// Exemplo prático
class Carro {
    
    private velAtual: number = 0;

    constructor (
        public marca: string,
        public modelo: string,
        private velMax: number = 220
    ) {}

    private alterarVel(delta: number){
        const novaVelocidade = this.velAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velMax) {
            this.velAtual = novaVelocidade;
        } else {
            this.velAtual = delta > 0 ? this.velMax : 0
        }
    }

    acelerar() {
        this.alterarVel(5);
        }  
        
    frear() {
        this.alterarVel(-5);
    }
}


const carro = new Carro("GM", "Prisma", 180);
// carro.velAtual = 400;  --> n é possível mudar pois é private
carro.acelerar();
carro.frear();

// Herança
class Camaro extends Carro {
    turbo = false

    constructor() {
        super("GM", "Camaro", 250);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
