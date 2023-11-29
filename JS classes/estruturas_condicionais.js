// > ESTRUTURAS CONDICIONAIS 

const idade = 20;

if (idade >= 18) {                                      
    console.log('Você é maior de idade!');
} else {
    console.log ('Você é menor de idade');
}

// OBS: Note que, no JavaScript a estrutura condicional é if + perêntesis + chaves.

console.clear() //Lembrando que esse comando serve para limpar as saídas anteriores.


// Vejamos um outro exemplo: 
let media = 2

if(media >= 7) {
    console.log('Aprovado(a)');
} else if (media >= 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}
