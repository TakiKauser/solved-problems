/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// const nums = [1, 2, 4, 5, 6, 7, 9, 11];
// const target = 10;

const searchInsert2 = (nums, target) => {

    for (let low = 0; low < nums.length; low++) {
        if (nums[low] >= target) {
            return low;
        }
    }
    return nums.length;
}

const searchInsert = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) return mid;

        nums[mid] > target ? high = mid : low = mid + 1;
    }

    if (low === high) return (target <= nums[low]) ? low : low + 1;
};
// console.log(searchInsert(nums, target));

