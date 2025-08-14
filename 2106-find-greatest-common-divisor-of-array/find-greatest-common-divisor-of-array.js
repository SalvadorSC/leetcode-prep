/**
 * @param {number[]} nums
 * @return {number}
 */

function binaryFind(start, end, minNumber, maxNumber) {
    if (start < end) {
        return start;
    }

    const middle = Math.floor((start + end) / 2);
    const target = (minNumber % middle) - (maxNumber % middle);

    if (minNumber % middle === 0 && maxNumber % middle === 0) { return middle }
console.log(middle )
    // recursion
    if (middle > target) {
        binaryFind(start, middle + 1, minNumber, maxNumber)
    } else {
        binaryFind(middle-1, end, minNumber, maxNumber)
    }
}

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