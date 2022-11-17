const { buildIndexesSet } = require('./algorithm');

const array1 = [];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const partition1 = 1;
const partition2 = 2;
const partition3 = 3;


const teste1 = buildIndexesSet(array1.length, partition1);
const teste2 = buildIndexesSet(array1.length, partition2);
const teste3 = buildIndexesSet(array1.length, partition3);

const teste4 = buildIndexesSet(array2.length, partition1);
const teste5 = buildIndexesSet(array2.length, partition2);
const teste6 = buildIndexesSet(array2.length, partition3);

const teste7 = buildIndexesSet(array3.length, partition1);
const teste8 = buildIndexesSet(array3.length, partition2);
const teste9 = buildIndexesSet(array3.length, partition3);

console.log(`Result teste 1 for a partition of size ${partition1} and a array of size ${array1.length}`, teste1);
console.log(`Result teste 2 for a partition of size ${partition2} and a array of size ${array1.length}`, teste2);
console.log(`Result teste 3 for a partition of size ${partition3} and a array of size ${array1.length}`, teste3);

console.log(`Result teste 4 for a partition of size ${partition1} and a array of size ${array2.length}`, teste4);
console.log(`Result teste 5 for a partition of size ${partition2} and a array of size ${array2.length}`, teste5);
console.log(`Result teste 6 for a partition of size ${partition3} and a array of size ${array2.length}`, teste6);

console.log(`Result teste 7 for a partition of size ${partition1} and a array of size ${array3.length}`, teste7);
console.log(`Result teste 8 for a partition of size ${partition2} and a array of size ${array3.length}`, teste8);
console.log(`Result teste 9 for a partition of size ${partition3} and a array of size ${array3.length}`, teste9);
