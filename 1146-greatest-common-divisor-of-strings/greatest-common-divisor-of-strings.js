/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */


var gcdOfStrings = function (str1, str2) {
    let string1 = str1;
    let string2 = str2;

    while (string1.length !== string2.length) {
        if (string1.length > string2.length) {
            if (string1.includes(string2)) {
                string1 = string1.replace(string2, " ").trim()
            } else return ''
        } else {
            if (string2.includes(string1)) {
                string2 = string2.replace(string1, " ").trim()
            } else return ''
        }
    }
    return string1 === string2 ? string1 : ''
};