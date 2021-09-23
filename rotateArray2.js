// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// // Example 1:

// // Input: nums = [1,2,3,4,5,6,7], k = 3
// // Output: [5,6,7,1,2,3,4]
// // Explanation:
// // rotate 1 steps to the right: [7,1,2,3,4,5,6]
// // rotate 2 steps to the right: [6,7,1,2,3,4,5]
// // rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    
    var rotateAll = function(arr, start, end) {
        while(start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        
        return arr;
    }
    k = k% nums.length;
    nums = rotateAll(nums, 0, nums.length-1);
    nums = rotateAll(nums,0,k-1);
    nums = rotateAll(nums,k, nums.length -1);
    
    return nums;
    
};

// [1,2,3,4,5,6,7]
//     , k = 3

// [5,6,7,1,2,3,4]