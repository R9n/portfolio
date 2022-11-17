const { buildIndexesSet } = require('../../utils/helpers');

/*
Autor: Ronaldo Ponciano
Data: 16/11/2022
Sobre: 
  Algoritmo para fazer a busca de uma ou mais ocorrências de um sub array em um array.

Algoritmo adaptado de: https://www.geeksforgeeks.org/check-whether-an-array-is-subarray-of-another-array/

incremento realizado: Agora o algoritmo devolve todos os índices onde se começa as ocorrencias do
sub array, por exemplo.
listal = [1,2,3,4,5,6,7,3,4,5]
subArray = [3,4,5]

O algoritmo irá devolver o seguinte resultado [{start:2, end:4}, {start:7, end:9}]

Ou seja, temos duas ocorrências, uma iniciando-se no index 2 e indo até o index 4 e outra ocorrência iniciando-se 
na posição 7 e terminando na posição 9

Hardware testado:

Processador: Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz
Ram: 16 GB DDR4()
Disco: SSD 256 Intel
Sistema Operacional: Windows 10

*/

function searchSubArrays(completeArray, searchedArray) {
    let i = 0;
    let j = 0;

    const n = completeArray.length;
    const m = searchedArray.length;
    const allSubArrays = [];

    while (i < n) {

        if (completeArray[i] == searchedArray[j]) {

            i++;
            j++;

            if (j == m) {
                allSubArrays.push({ start: i - searchedArray.length, end: i });
                i++;
                j = 0;
            }
        }
        else {
            i = i - j + 1;
            j = 0;
        }
    }

    return allSubArrays;
}


module.exports = { searchSubArrays }