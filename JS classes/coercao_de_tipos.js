// > COERÇÃO (CONVERSÃO) DE TIPOS

// Coerção Explícita (Manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);                                // Dessa forma convertemos o tipo da varíavel de number para string.
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('2020'));                                                  // Coerção de String para Number.


console.clear();



// Coerção Implícita (Automática)

// Teoricamente não se pode somar número com texto, o comportamento do JavaScript então será converter tudo para texto e concatenar (juntar) os dois.

console.log(10 + '1');       // Nessa caso resultará em 101, pois o '1' está em formato de texto.

// Qual será a saída desse código?
let n = 1 + '1';             // Resultará em 11.

console.log(n);

n = n - 1;                   // Resultará em 10 pois o resultado de 'n' anteriormente era 11, então 11(n) - 1 = 10.
               

console.log(2 + 3 + 4 + '5'); // Resultará em 95, pois a operação deu 9 juntando com 5 (que está em formado de texto).


