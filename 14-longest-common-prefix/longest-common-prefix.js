/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix;
    const minimumLetters = strs.map((str)=> str.length).sort()[0] // strs.reduce(function (a, b) {return a.length <= b.length ? a : b;})
    const arrayWithoutFirstStr = strs.slice(1)
    for (let nLetters = 1; nLetters <= minimumLetters; nLetters++) {
        
        if (arrayWithoutFirstStr.filter((str) => str.slice(0, nLetters) === strs[0].slice(0, nLetters)).length === arrayWithoutFirstStr.length) {
            commonPrefix = strs[0].slice(0, nLetters)
        }
    }


    if (!commonPrefix) {
        return ''
    }

    return commonPrefix
};