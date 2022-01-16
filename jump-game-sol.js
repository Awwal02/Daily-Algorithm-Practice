/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums, index=0, memo={}) {
    // if(memo[index] !== undefined) return memo[index];
    // var lmj = nums[0];
    // if(nums.length === 1) {
    //     memo[index] = true;
    //     return true;
    // }
    // var x = false;
    // if(lmj === 0) {
    //     memo[index] = false;
    //     return false;
    // }
    // for(let i=lmj;i>=1;i--){
    //     console.log(i)
    //     var n = nums.slice(i);
    //     x = x || canJump(n,i)
    //     if(x) break;
    // }
    // return x;
    let x = false;
    // if(memo[index] !== undefined) return memo[index]
    // if(nums[0] === 0 && nums.length !== 1) {
    //     memo[index] = false;
    //     return false;
    // }
    // if(nums.length === 1) {
    //     memo[index] = true;
    //     return true;
    // }
    // var lmj = nums[0];
    // for(let i=1;i<=lmj;i++) {
    //     x = x +canJump(nums.slice(i),index+i, memo)
    //     if(x) {
    //         memo[index] = true;
    //         return true;
    //     }
    // }
    // return false;
    let max = 0;
    for(let i=0;i<nums.length;i++) {
        if(i > max) return false;
        max = Math.max(nums[i]+i, max);
    }
    return true;
};
