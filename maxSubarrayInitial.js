/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxTillNow = nums[0], maxActual = nums[0];
        for(let i=1;i<nums.length;i++) {
                if(maxTillNow <= 0) {
                    maxTillNow = Math.max(maxTillNow, nums[i]);
                } else {
                    if(nums[i] > 0) {
                        maxTillNow =  maxTillNow + nums[i];
                    } else {
                        const x = maxTillNow +nums[i];
                        if(x > 0) {
                            maxTillNow = x;
                        } else {
                            maxTillNow = nums[i];
                        }
                    }
                    

                }
           // }
            maxActual = Math.max(maxActual, maxTillNow);
            
        }
    return maxActual;
};
