/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    console.log(nums.length); 
    var lmj = nums[0];
    if(nums.length === 1) return true;
    var x = false;
    if(lmj === 0) return false;
    for(let i=lmj;i>=1;i--){
        var n = nums.slice(i);
        x = x || canJump(n)
        if(x) break;
    }
    return x;
    
};
