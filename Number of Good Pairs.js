/**
 * @param {number[]} nums
 * @return {number}
 */
// LeetCode 1512
 var numIdenticalPairs = function(nums) {
    let goodPairsCounter = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                goodPairsCounter++;
            }
        }
    }
    return goodPairsCounter;
};