/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    var count =0;
    for(let i=0;i< nums.length;i++) {
        var product = nums[i];
        var j= i+1;
        while(product < k) {
            count++;
            product *= nums[j];
            j++;
        }
    }
    return count;
};
