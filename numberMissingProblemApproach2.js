//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

//Approach 1

var findDisappearedNumbers = function(arr) {
  // let len = arr.length;
  // let obj = {};
  // let arrFinal = []; 
  // for(let x=0;x<arr.length;x++) {
  //   let n = arr[x];
  //   obj[n] = true;
  // }
  // for(let y=1;y<=arr.length;y++) {
  //   if(!obj[y]) {
  //     arrFinal.push(y);
  //   }
  // }
  let arrFinal = []; 
  for(let x=0;x<arr.length;x++) {
    let n = Math.abs(arr[x]);
    arr[n-1] = -Math.abs(arr[n-1]);
  }
  for(let y=0;y<arr.length;y++) {
    if(arr[y] > 0) {
      arrFinal.push(y+1);
    }
  }
    return arrFinal;
};