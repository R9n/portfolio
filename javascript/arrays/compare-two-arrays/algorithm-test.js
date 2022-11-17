const { isArraysEquals } = require('./algorithm');
const { createArray } = require('../../utils/helpers');
async function test() {

    console.log('==================== Criandos dados para testes ====================');
    console.log('==================== Creating test data ====================');

    const teste1 = [1, 2, 3, 4, 5];
    const teste2 = [1, 2, 3, 4, 5];
    const teste3 = [5, 4, 3, 2, 1];
    const teste4 = [4, 2, 5, 1, 3];
    const teste5 = [1, 2, 3];
    const teste6 = [];
    const teste7 = createArray(1, 100_000_000);
    const teste8 = createArray(undefined, 100_000_000);
    const teste9 = createArray(1, 100_000_000);

    console.log('==================== Iniciando testes de lógica ====================');
    console.log('==================== Starting logic tests ====================');

    const isTeste1EqualTeste2 = await isArraysEquals(teste1, teste2);

    console.log('isTeste1EqualTeste2', isTeste1EqualTeste2);

    const isTeste1EqualTeste3 = await isArraysEquals(teste1, teste3);

    console.log('isTeste1EqualTeste3', isTeste1EqualTeste3);

    const isTeste1EqualTeste4 = await isArraysEquals(teste1, teste4);

    console.log('isTeste1EqualTeste4', isTeste1EqualTeste4);

    const isTeste1EqualTeste5 = await isArraysEquals(teste1, teste5);

    console.log('isTeste1EqualTeste5', isTeste1EqualTeste5);

    const isTeste1EqualTeste6 = await isArraysEquals(teste1, teste6);

    console.log('isTeste1EqualTeste6', isTeste1EqualTeste6);

    console.log('==================== Iniciando teste de performance (para arrays 100 milhões de elementos) ====================');
    console.log('==================== Starting performance test (for 100 millions elements arrays) ====================\n\n');

    const startTeste1 = Date.now();

    const isTeste7EqualTeste8 = await isArraysEquals(teste7, teste8);

    const endTest1 = Date.now();

    console.log(`==================== Elapsed Time:${(endTest1 - startTeste1) / 1000} seconds ====================`);
    console.log(`==================== Tempo decorrido:${(endTest1 - startTeste1) / 1000} segundos ====================`);
    console.log(`==================== isTeste7EqualTeste8 ?: ${isTeste7EqualTeste8} ====================`);

    console.log(`========================================================================================`);

    const startTeste2 = Date.now();

    const isTeste7EqualTeste9 = await isArraysEquals(teste7, teste9);

    const endTest2 = Date.now();

    console.log(`==================== Elapsed Time:${(endTest2 - startTeste2) / 1000} seconds ====================`);
    console.log(`==================== Tempo decorrido:${(endTest2 - startTeste2) / 1000} segundos ====================`);
    console.log(`==================== isTeste7EqualTeste9 ?: ${isTeste7EqualTeste9} ====================`);

}


test();