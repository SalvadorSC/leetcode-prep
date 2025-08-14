/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = '';
    const minimumLetters = strs.map((str)=> str.length).sort()[0]
    const choppedArr = strs.slice(1)
    for (let nLetters = 1; nLetters <= minimumLetters; nLetters++) {
        const constPrefix = strs[0].slice(0, nLetters);
        if (choppedArr.filter((str) => str.slice(0, nLetters) === constPrefix).length === choppedArr.length) {
            commonPrefix = constPrefix
        }
    }

    return commonPrefix
};