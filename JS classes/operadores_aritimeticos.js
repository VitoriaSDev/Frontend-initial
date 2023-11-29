let numero1 = 20;
let numero2 = 2;

let primeiroNumero = 100;
let segundoNumero = 10;

// Adição:                  +
// Subtração:               -
// Multiplicação:           *
// Divisão:                 /
// Exponenciação:           **
// Resto da divisão:        %


const soma = primeiroNumero + segundoNumero;
console.log('Soma =', soma);  //Pode-se fazer dessa forma, criando uma constante, porém por questões de boas práticas e para obter um código mais limpo podemos fazer da seguinte maneira:


console.log('Subtração=', primeiroNumero - segundoNumero);
console.log('Multiplicação=', primeiroNumero * segundoNumero);
console.log('Divisão=', primeiroNumero / segundoNumero);
console.log('Exponenciação=', primeiroNumero ** segundoNumero);
console.log('Resto da divisão=', primeiroNumero % 3);



// Precedência de operadores: 
// assim como na própria aritimética no estudo da matemática temos uma ordem de operação a seguir e na programação não é diferente, veja a seguir:

// 1. Radiciação e exponenciação
// 2. Multiplicação e divisão
// 3. Soma e subtração
console.log(3 + 7 * 3);           // Primeiro ele multiplicou e depois somou, assim como é a ordem matemática
console.log((3 + 7) * 3);           // O parentêsis definiu uma "prioridade" para a soma, portanto ele fez a soma primeiro e depois a multiplicação.



// Biblioteca Math
console.log(Math.PI);             //Math. chama uma sugestão, nesse caso por exemplo podemos chamar o valor de PI.
console.log(Math.sqrt(16));

//Lembrete: explorar a documentação
// 1. JavaScript mdn
// 2. Javascript mdn math


