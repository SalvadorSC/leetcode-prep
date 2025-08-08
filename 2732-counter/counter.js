/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function (n) {
    let timesCalled = 0;
    return function () {
        let result = n + timesCalled
        timesCalled++
        return result
    };
};



