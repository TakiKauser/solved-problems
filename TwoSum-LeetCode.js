/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const store = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let requiredIndex = target - num;
        if (requiredIndex in store) {
            return [store[requiredIndex], i];
        } else {
            store[num] = i;
        }
    }
    return [];
};