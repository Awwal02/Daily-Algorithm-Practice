/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets =[]
    let tripletsInserted = {}
    if(nums.length < 3) return []
    nums = nums.sort((x,y) => x-y);
    function checkTripletsInserted(x,y,z) {
        var stringsPaired = [`${x}${y}${z}`,`${x}${z}${y}`,`${y}${x}${z}`,`${y}${z}${x}`,`${z}${x}${y}`,`${z}${y}${x}`];
        for(let m of stringsPaired){
            if(tripletsInserted[m]) return true;
        }
        return false;
    }
    for(let i=0;i<nums.length-2;i++) {
        if(i === 0 || (i > 0 && nums[i] !== nums[i-1])){
            
            let left = i+1;
            let right = nums.length -1;
            let numToFind = -nums[i];
            let leftPlusRight = nums[left] + nums[right];
            while(left < right) {
                if(leftPlusRight === numToFind) {
                    
                    triplets.push([nums[i], nums[left], nums[right]]);
                    tripletsInserted[`${nums[i]}${nums[left]}${nums[right]}`] = true;
                    while (left < right && nums[left] == nums[left+1]) left++;
                    while (left < right && nums[right] == nums[right-1]) right--;
                    left++; right--;
                } else if(leftPlusRight > numToFind) {
                    right--;
                } else {
                    left++;
                }
                leftPlusRight = nums[left] + nums[right];
            }
        }
    }
    return triplets;
}
