// https://www.typescriptlang.org/docs/handbook/2/objects.html

interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

// função retorna usuário
function getUser() : Usuario{
    return {
        nome: "Vader",
        email: "vader@deathstar.com"
    }
}

function setUser(usuario: Usuario) {
    //...
}