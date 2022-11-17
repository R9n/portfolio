const { buildIndexesSet } = require('../../utils/helpers');

/*
Autor: Ronaldo Ponciano
Data: 09/11/2022
Sobre: 
  Algoritmo para fazer a busca de um valor em uma lista a partir do particionamento da mesma.
 
Estratégia: Bucar o valor 1 na lista [2,3,4,5,6,7,8,9,7,6,4,1]
A lista é dividida (utilizando índices) em 3 listas [2,3,4,5][6,7,8,9,][7,6,4,1] (Número N de listas é configurável)
E então são feitas N buscas simultâneas nas N listas geradas ao mesmo tempo
Importante ressaltar que NÃO SÃO GERADAS N LISTAS, A divisão é apenas lógica.
É feita manipulando os índices e isso gera uma grande economia de memória.

Importante observar que o número de N de subdivisões influencia diretamente na  performa do algoritmo
Um estudo comparativo está incluído neste diretório. 
Esse estudo tem o intuito apenas de dar UMA NOÇÃO do resultado, não servindo como afirmação
para dizer se é melhor ou pior (paar tal deverá ser feita uma análise da complexidade, o que não é
o objetivo aqui)

Hardware testado:

Processador: Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz
Ram: 16 GB DDR4()
Disco: SSD 256 Intel
Sistema Operacional: Windows 10

*/

async function checkForValuePresence(array, searchedValue, indexesSet) {

    for (let i = indexesSet.start; i <= indexesSet.end; i++) {

        if (array[i] === searchedValue) {
            return true;
        }
    }
    return false;
}

async function searchValue(array, value, numberOfPartitions) {

    const allPartitionsIndexes = buildIndexesSet(array.length, numberOfPartitions);

    const hasFoundResults = await Promise.all(allPartitionsIndexes.map(async (indexSet) => {
        return checkForValuePresence(array, value, indexSet);
    }));

    return hasFoundResults.reduce((previousValue, currentValue) => previousValue || currentValue, false);

}

module.exports = { searchValue }






