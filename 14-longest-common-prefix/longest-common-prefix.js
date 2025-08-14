/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix;
    const minimumLetters = strs.map((str)=> str.length).sort()[0]
    const arrayWithoutFirstStr = strs.slice(1)
    for (let nLetters = 1; nLetters <= minimumLetters; nLetters++) {
        const constPrefix = strs[0].slice(0, nLetters);
        if (arrayWithoutFirstStr.filter((str) => str.slice(0, nLetters) === constPrefix).length === arrayWithoutFirstStr.length) {
            commonPrefix = constPrefix
        }
    }


    if (!commonPrefix) {
        return ''
    }

    return commonPrefix
};