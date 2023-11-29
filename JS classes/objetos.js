// > OBJETO ---- É DEFINIDO POR CHAVE E VALOR
// Outra estrutura de dados
// Vai permitir que a gente guarde diferentes conteúdos dentro de uma mesma variável.
// Iremos acessar por chave que definimos. 





// Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Walisson',
    idade: 26
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)

// Como adicionar um par chave-valor?

pessoa.altura = 1.77

console.log(pessoa)

// Como remover um par chave-valor?

delete pessoa.altura

console.log(pessoa)

// Como percorrer?

for (let chave in pessoa) {
    console.log(chave)
}