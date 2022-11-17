const fs = require("fs");
const path = require("path");


function writeToDisk(filePath, value) {
    const file = fs.createWriteStream(filePath, { flags: 'a' });
    file.write(`${value}\n`);
    file.end();
}

function createArray(valueToFill, size) {

    let index = 0;
    const array = [];
    while (index < size) {
        const value = valueToFill ?? Math.floor(Math.random() * 100);
        array.push(value);
        index++;
    }
    return array;
}

function buildIndexesSet(arraySize, maxIntervalSize) {
    const allIndexes = [];
    if (arraySize < 0) {
        throw new Error(`arraySize ${arraySize} is invalid. Must be greater than 1 `);
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


async function reduceArray(array) {
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

module.exports = { createArray, writeToDisk, buildIndexesSet, reduceArray }