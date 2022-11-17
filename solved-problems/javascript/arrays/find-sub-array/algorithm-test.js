const { searchSubArrays } = require('./algorithm');
const { createArray } = require('../../utils/helpers');

const array1 = []; // array vazio 
const array2 = [1, 2, 3]; // array que não possui subarray 
const array3 = [2, 3, 4]; // array que é exatamente o array procurado
const array4 = [1, 2, 3, 4, 5]; // array que possui o sub array procurado
const array5 = [1, 2, 4, 3, 2, 4]; // array que possui o sub array procurado mas em reverso,
// ou seja, ele possui o sub array 2,3,4. Porém,
// começa na posição 4 e termina na posição 2
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 6, 4, 23, 2, 5, 4, 4, 3, 2]; // array que possui os dois
// últimos casos tratados acima

const subArray = [2, 3, 4]; // sub array que vamos buscar nos arrays acima


console.log('Logic tests');

console.log('========= Test case 1:');
console.log('Result', searchSubArrays(array1, subArray), '\n');

console.log('========= Test case 2:');
console.log('Result', searchSubArrays(array2, subArray), '\n');

console.log('========= Test case 3:');
console.log('Result', searchSubArrays(array3, subArray), '\n');

console.log('========= Test case 4:');
console.log('Result', searchSubArrays(array4, subArray), '\n');

console.log('========= Test case 5:');
console.log('Result', searchSubArrays(array5, subArray), '\n');

console.log('========= Test case 6:');
console.log('Result', searchSubArrays(array6, subArray), '\n');


const part1LongArray = createArray(1, 25_000_000);
const part2LongArray = createArray(2, 25_000_000);
const searchedArray = createArray(8, 12_500_00);
const part4LongArray = createArray(5, 25_000_000);

const finalArray = [...part1LongArray, ...part2LongArray, ...searchedArray, ...part4LongArray, ...searchedArray];
// an array with 100_000_000 (100 millions of elements)
// we will perform a search for an array of 12_500_000 elements

console.log('\nperformance test\n');

console.log(`Searching for subarray of size ${searchedArray.length} in a array of size ${finalArray.length}`);

const start = Date.now();

const result = searchSubArrays(finalArray, searchedArray)
console.log('result', result)
const end = Date.now();

const totalTime = (end - start) / 1000;

console.log('Time to find', totalTime);
