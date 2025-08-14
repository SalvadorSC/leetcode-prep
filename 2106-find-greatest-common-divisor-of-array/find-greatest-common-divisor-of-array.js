/**
 * @param {number[]} nums
 * @return {number}
 */

var findGCD = function (nums) {
    let gcd = 0;
    const minNumber = Math.min(...nums);
    const maxNumber = Math.max(...nums);
    for (let i = 1; i <= maxNumber; i++) {
        if (minNumber % i === 0 && maxNumber % i === 0) {
            gcd = i
        }
    }
    return gcd;
};