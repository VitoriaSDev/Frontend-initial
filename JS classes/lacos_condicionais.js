// > LAÇOS CONDICIONAIS

const input = require('readline-sync');

const numeroSorteado = 5;         //DICA: definimos um número manualmento mas para melhorar isso poderíamos usar Math. e chamar um RANDOM.

let numero = Number(input.question('Qual número você escolhe?'));  // Percaba que a gente precisou converter pois a função Input seria lida como String.

console.log(numero, typeof numero);

while (numero !== numeroSorteado) {                                        // While - enquanto a resposta estiver diferente do número correto irá aparecer a mensagem condicionada.
    console.log ('Você errou! Tente novamente...')

    numero = Number(input.question('Qual número você escolhe?'));
}

console.log('Você acertou!!!');