/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = '';
    const minimumLetters = strs.map((str)=> str.length).sort()[0]
    for (let nLetters = 1; nLetters <= minimumLetters; nLetters++) {
        // const constPrefix = strs[0].slice(0, nLetters);
        if (strs.slice(1).filter((str) => str.slice(0, nLetters) === strs[0].slice(0, nLetters)).length === strs.slice(1).length) {
            commonPrefix = strs[0].slice(0, nLetters)
        }
    }

    return commonPrefix
};