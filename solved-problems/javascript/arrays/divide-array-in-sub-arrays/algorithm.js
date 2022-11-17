/*
Autor: Ronaldo Ponciano
Data: 10/11/2022
Sobre: 
Algoritmo para particionar um array e vários sub arrays de tamanho N informado pelo usuário

Não são criadas novas listas, são calculados os índices de acesso para acessar o array principal.
Isso gera economia de memória
Por exemplo:

Dividir o array [1,2,3,4,5] em sub arrays de tamanho 3
Vai gerar os seguintes pares de index [{start: 0, end: 2},{start: 3, end: 4}]

E para o array [1,2,3,4,5,6] irá gerar os seguintes pares [{start: 0, end: 2},{start: 3, end: 5}]

Hardware testado:

Processador: Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz
Ram: 16 GB DDR4()
Disco: SSD 256 Intel
Sistema Operacional: Windows 10
*/


function buildIndexesSet(arraySize, maxIntervalSize) {
    const allIndexes = [];
    if (arraySize < 0) {
        throw new Error(`arraySize ${arraySize} is invalid. Must be greater than 0 `);
    }

    if (arraySize === 0) {
        return []
    }

    if (maxIntervalSize >= arraySize) {
        return [{ start: 0, end: arraySize - 1 }]
    }

    let currentFinalIndex = 0;

    while (currentFinalIndex <= arraySize - 1) {

        const start = currentFinalIndex;
        const end = currentFinalIndex + maxIntervalSize - 1;

        allIndexes.push({ start, end });

        if (end === arraySize - 1) {
            break;
        }

        if (end + maxIntervalSize > arraySize - 1) {
            allIndexes.push({ start: end + 1, end: arraySize - 1 });
            break;
        }

        currentFinalIndex += maxIntervalSize;

    }

    return allIndexes;
}

module.exports = { buildIndexesSet }