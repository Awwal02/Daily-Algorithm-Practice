// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const rotate = function(nums, index) {
    const num2 = [];
    const k = index % nums.length;
  for(let i=0; i < nums.length;i++) {
      let x =nums.length - k + i;
      // console.log(x);
      if(x >= nums.length) {
          x = x - nums.length;
      }
      num2[i] = nums[x];
      // console.log(num2);
  }
    console.log(num2);
};