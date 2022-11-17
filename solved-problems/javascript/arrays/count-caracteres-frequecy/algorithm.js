
/*
Autor: Ronaldo Ponciano
Data: 09/11/2022
Sobre: 
  Algoritmo simples para contar quantos caracteres iguais existem em um array.

Estratégia: varrer o array veriicando se cada elemento já foi encontrado ou não
incrementando um contador que no fim dará a frequência de cada elemento.
Por exemplo:
O array [1,2,2,3,4,5,5,4,2] vai gerar o seguinte conjunto:
{
    "1":1,
    "2":3,
    "3":1,
    "4":2,
    "5":2
} 

Hardware testado:

Processador: Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz
Ram: 16 GB DDR4()
Disco: SSD 256 Intel
Sistema Operacional: Windows 10
 
*/

function reduceArraySync(array) {
    const computedElements = {};
    for (const value of array) {
        if (computedElements[value]) {
            computedElements[value] = computedElements[value] + 1;
            continue;
        }
        computedElements[value] = 1;
    }

    return computedElements;
}

module.exports = { reduceArraySync }






