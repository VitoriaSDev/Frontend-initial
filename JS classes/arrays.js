// > ARRAYS (Estrutura de dados)

// - Como criar um array?

let arr = ['Walisson', 26, 1.77, true];


// - Como acessar os elementos do array

console.log('Primeiro elemento:', arr[0]);


// - Como obter o tamanho do array

console.log('Tamanho do array:', arr.length);


// - Percorrendo array

for (let i = 0; i < Array.length; i++) {
    console.log(arr[i]);
}


for (let elemento of arr) {
    console.log(elemento);
}


for (let indice in arr) {
    console.log(indice, arr[indice]);
}

console.clear ()

// MÉTODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29];
let arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2));
console.log (arr1.slice(2));

// Adicionando elementos: push | shift

console.log('Antes de adicionar:', arr2)

arr2.push(10);

console.log('Depois de adicionar:', arr2);

// Removendo elementos: pop | shift 

console.log('Antes de remover:', arr2);

arr2.pop() // Removerá o último elemento

// Concatenando arrays: concat

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));

// Buscanso elementos: indexOf | lastIndexOf

let indiceDoElemento34 = arr1.indexOf(34);

console.clear ()

// Descobrindo a existência de um elemento: includes

console.log(arr1);

console.log(arr1.includes(10));

// Invertendo o arrays: reverse

console.log('array1 normal', arr1);

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido);
