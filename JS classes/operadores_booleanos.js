// > OPERADORES BOOLEANOS

// Igualdade:                   == (ou ===)
// Desigualdade:                != (ou !==)
// Maior que:                   >
// Maior ou igual:              >=
// Menor que:                   <
// Menor ou igual:              <=

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(numero == 10);
console.log(10 == '10');       // A resposta será true, porém nesse caso estamos comparando o número 10 ao texto 10. O correto é usar a opção ===.
console.log(10 === '10');       // Então por boa prática, para evitar erros, a recomendação é utilizar ===.

// Para comparar a desigualdade também temos a mesma situação, portanto recomenda-se utilizar !==.


// DICA: para melhor visualização do console é possível utilizar:
console.clear()  // Os resultados anteriores serão apagados.




// > Conjunções Lógicas

// AND => &&
// Caso Samuel
let idade = 26;
let temCNH = true;

const samuPodeDigir = idade >= 18 && temCNH === true;

console.log('O Samuel pode dirigir?', samuPodeDigir);

// Caso Valentina
idade = 16;
temCNH = false;

const valPodeDirigir = idade >= 18 && temCNH === true;

console.log('A Valentina pode dirigir?', valPodeDirigir);



// OR ==> ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;



// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso);  // Devido a presença do !, ao imprimir ele irá inverter a resposta false que definimos e irá tornar ela true.

