const { searchValue } = require('./algorithm');
const { writeToDisk, createArray } = require('../../utils/helpers');


function createTestArray(arraySize, valueToFill, searchedValue) {

    const array = createArray(valueToFill, arraySize);
    array.push(searchedValue); //puts 1 in the end of array to force the worse case

    return array;
}

function createPartitions(arraySize) {
    const partitions = [];
    const tenPercent = Math.floor(arraySize * 0.10);
    const twentyPercent = Math.floor(arraySize * 0.20);
    const thirtyPercent = Math.floor(arraySize * 0.30);
    const fortyPercent = Math.floor(arraySize * 0.40);
    const fiftyPercent = Math.floor(arraySize * 0.50);
    const sixtyPercent = Math.floor(arraySize * 0.60);
    const seventyPercent = Math.floor(arraySize * 0.70);
    const eightyPercent = Math.floor(arraySize * 0.80);
    const ninetyPercent = Math.floor(arraySize * 0.90);
    const oneHundredPercent = arraySize;

    partitions.push(tenPercent);
    partitions.push(twentyPercent);
    partitions.push(twentyPercent);
    partitions.push(thirtyPercent);
    partitions.push(fortyPercent);
    partitions.push(fiftyPercent);
    partitions.push(sixtyPercent);
    partitions.push(seventyPercent);
    partitions.push(eightyPercent);
    partitions.push(ninetyPercent);
    partitions.push(oneHundredPercent);

    return partitions;
}

async function runComparison(array, searchedValue, partitionSize) {

    const start1 = Date.now();
    const resultMyAlgorithm = await searchValue(array, searchedValue, partitionSize);
    const end1 = Date.now();

    const myAlgorithmTime = end1 - start1;

    const start2 = Date.now();
    const resultIncludes = array.includes(searchedValue);
    const end2 = Date.now();

    const includesTime = end2 - start2;

    return {
        myAlgorithm: {
            time: myAlgorithmTime,
            hasFound: resultMyAlgorithm
        },
        includes: {
            time: includesTime,
            hasFound: resultIncludes
        }
    }

}

function parseResults(arrayResults, numberOsTests) {

    const myALResults = {};
    const includesResults = {};

    arrayResults.forEach((result) => {
        const myALKeys = Object.keys(result.myAlg);
        const includesKeys = Object.keys(result.includes);

        myALKeys.forEach((size) => {

            const partitions = Object.keys(result.myAlg[size]);

            myALResults[size] = {};

            partitions.forEach((partition) => {
                myALResults[size][partition] = (result.myAlg[size][partition]) / numberOsTests;
            });
        });

        includesKeys.forEach((size) => {
            includesResults[size] = (result.includes[size]) / numberOsTests;
        });

    });

    writeToDisk('results\\includes.txt', JSON.stringify(includesResults));
    writeToDisk('results\\myalg.txt', JSON.stringify(myALResults));
}

async function test(numberOfTestsToRun) {

    const arraySizesToTest = [1_000_000, 10_000_000, 20_000_000, 30_000_000, 40_000_000, 50_000_000, 60_000_000, 70_000_000, 80_000_000, 90_000_000, 100_000_000];

    const valueToFill = 0;
    const searchedValue = 1;
    const resultFilePath = 'results\comparison-search-includes.txt';

    const allResults = {
        myAlg: {},
        includes: {}
    };

    arraySizesToTest.forEach((size) => {
        allResults.myAlg[size] = {};
        allResults.includes[size] = 0;
    });


    console.log('Running tests for arrays of sizes', arraySizesToTest)

    for (let i = 0; i < numberOfTestsToRun; i++) {

        console.log(`Running test ${i + 1} of ${numberOfTestsToRun}`);

        for (const arraySize of arraySizesToTest) {

            let partitions = createPartitions(arraySize);

            let array = createTestArray(arraySize, valueToFill, searchedValue);

            let comparisonResult;

            for (const partition of partitions) {

                comparisonResult = await runComparison(array, searchedValue, partition);

                if (allResults.myAlg[arraySize][partition] == undefined) {
                    allResults.myAlg[arraySize][partition] = 0;
                }

                allResults.myAlg[arraySize][partition] += comparisonResult.myAlgorithm.time;

            }
            allResults.includes[arraySize] += comparisonResult.includes.time;
            comparisonResult = null;
            array = null;
            partitions = null;
        }
    }


    console.log('All test ran successfully!')
    parseResults([allResults], numberOfTestsToRun)
}

test(2);