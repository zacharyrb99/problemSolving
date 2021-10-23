// add whatever parameters you deem necessary
const freqCounterNums = num => {
    const freqCount = {};

    for (let char of num) {
        freqCount[char] = (freqCount[char] + 1) || 1;
    }

    return freqCount;
}

function sameFrequency(num1, num2) {
    const num1FreqCount = freqCounterNums(`${num1}`);
    const num2FreqCount = freqCounterNums(`${num2}`);

    for (let key in num1FreqCount) {
        if (!num2FreqCount[key]) return false;
        if (num1FreqCount[key] !== num2FreqCount[key]) return false;
    }

    return true;

    console.log(num1FreqCount, num2FreqCount);
}
