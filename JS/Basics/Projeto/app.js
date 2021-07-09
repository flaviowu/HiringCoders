
// Se for Sim, mostra as categorias disponíveis, pergunta qual ela escolhe
//Se não, mostra todos os livros crescente pela quantidade de páginas
// Pegar input do usuário
const livros = require("./database");
const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja Buscar um Livro? (S/N) ");

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis:")
    console.log("Romance", "/História", "/Política")
    
    const entradaCategoria = readline.question("Qual Categoria? ")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b)=> a.paginas - b.paginas)
    console.log("Essas são todas os livros disponíveis:")
    console.table(livrosOrdenados)

}




