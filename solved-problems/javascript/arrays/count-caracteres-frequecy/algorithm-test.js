const { reduceArraySync } = require('./algorithm');

const array1 = []; // não tem nenhum caracter
const array2 = [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 2, 2, 5, 6, 6, 6]; // Tem três 6's, dois 2's, cinco 4's e cinco 1's 
const array3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2];// tem seis 2's e nove 9's 


const result1 = reduceArraySync(array1);
const result2 = reduceArraySync(array2);
const result3 = reduceArraySync(array3);

console.log('========== Resultados:');
console.log('Elementos no primeiro array:', result1);
console.log('\n=========================\n');

console.log('Elementos no segundo array:', result2);
console.log('\n=========================\n');

console.log('Elementos no terceiro array:', result3);
console.log('\n=========================\n');
