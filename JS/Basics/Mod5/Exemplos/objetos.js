const pessoa = {
    nome: "Terminator",
    idade: 40,
    cidade: "Los Angeles"
}

// Notação de ponto
console.log(pessoa.nome) // Terminator

// Notação de colchetes
console.log(pessoa["idade"]) //40

// Como desestruturar objetos
const {nome, idade, cidade} = pessoa
console.log("Usando Destructure:")
console.log(nome)
console.log(idade)
console.log(cidade)
console.log("--==--==--==--==--")

const filmes = [
    {
        id: 1,
        titulo: "Parasita",
        descricao: "Ganhador do Oscar, obrigatório assistir",
        duracao: 200
    },
    {
        id: 2,
        titulo: "Vingadores",
        descricao: "Filme hypado demais",
        duracao: 450
    },
    {
        id: 3,
        titulo: "Bacurau",
        descricao: "Western brasileiro hypado",
        duracao: 164
    }
]

const [{ id, titulo, descricao, duracao }] = filmes

filmes.map(filme => console.log(filme.descricao))
