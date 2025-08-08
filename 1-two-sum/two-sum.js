/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let solution;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && j !== i) {
                return solution = [i, j]
            }
        }
    }
};