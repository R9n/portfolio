const { createArray, reduceArray } = require('../../utils/helpers');

/* 
Autor: Ronaldo Ponciano
Data: 10/11/2022
Sobre: 
Algoritmo para particionar um array e vários sub arrays de tamanho N informado pelo usuário

Não são criadas novas listas, são calculados os índices de acesso para acessar o array principal.
Isso gera economia de memória
Por exemplo:

Aqui segue uma forma simples e poderosa de eliminar partes de um array
por exemplo, se você precisa excluir o último elemento, ou os últimos 5 elementos de um array
normalmente as pessoas criam outra lista contendo 5 elementos a menos. Porém, isso não é necessário. 
Podemos atigir o mesmo resultado manipulando a propriedade length do objeto Array.prototype.length
Além disso, é mais econômico pois não precisa criar uma lista adicional.

Por exemplo:

Eliminar os últimos 5 elementos da lista
 const array = [1,2,3,4,5,6,7,8,9,10];
 
 Podemos fazer simplemente:  array.length = array.length - 5;

Hardware testado:

Processador: Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz
Ram: 16 GB DDR4()
Disco: SSD 256 Intel
Sistema Operacional: Windows 10
*/


// Testando o tempo que leva para excluir 10 milhões de elementos de um array de 100 milhões 

const array = createArray(1, 100_000_000);

const start1 = Date.now();
const reducedArray1 = [];

for (let i = 0; i < (array.length - 10_000_000); i++) {
    reducedArray1.push(array[i]);
}

const end1 = Date.now();

const start2 = Date.now();
array.length = array.length - 10_000_000;
const end2 = Date.now();

console.log("=================== Resultados ======================");
console.log("=== Tempo usando o jeito convencional (ms): ", end1 - start1);
console.log("===================");
console.log("=== Tempo usando a propriedade length (ms): ", end2 - start2);
console.log("===================");
console.log("Checagem dos resultados:");

console.log("reducedArray1", reducedArray1.length);

console.log("array", array.length);

