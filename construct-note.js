// add whatever parameters you deem necessary
const freqCounter = string => {
    const freqCount = {};

    for (let char of string) {
        freqCount[char] = (freqCount[char] + 1) || 1;
    }

    return freqCount;
}

function constructNote(msg, chars) {
    const msgFreqCount = freqCounter(msg);
    const charsFreqCount = freqCounter(chars);

    for (let key in msgFreqCount) {
        if (!charsFreqCount[key]) return false;
        if (msgFreqCount[key] > charsFreqCount[key]) return false;
    }

    return true;
}
