const { reduceArray } = require('../../utils/helpers');
/*
Autor: Ronaldo Ponciano
Data: 09/11/2022
Sobre:  
Algoritmo para verificar se duas listas são compostas por elementos iguais,
independente da ordem dos elementos nas listas. Por exemplo:
[1,2,3] é igual a [2,3,1] que é igual á [3,2,1]

Implementação focada em performance.

Estratégia: A estratégia utilizada aqui foi reduzir ambas as listas a um conjunto
de caracteres/número de ocorrências e depois comparar os consjuntos gerados, por exemplo:

As listas [1,2,3,3] e [3,2,1,3] geram o conjunto { 1:1, 2:1, 3:2 }

Hardware testado:

Processador: Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz
Ram: 16 GB DDR4()
Disco: SSD 256 Intel
Sistema Operacional: Windows 10
*/


async function isArraysEquals(array1, array2) {

    if (array1?.length != array2?.length) {
        return false;
    }

    const [reducedArray1, reducedArray2] = await Promise.all([reduceArray(array1), reduceArray(array2)]);

    const reducedArray1Keys = Object.keys(reducedArray1);

    for (const key of reducedArray1Keys) {
        if (!reducedArray2[key]) {
            return false;
        }
        if (reducedArray2[key] !== reducedArray1[key]) {
            return false;
        }
    }

    return true;
}





module.exports = { isArraysEquals }