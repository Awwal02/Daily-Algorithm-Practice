/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return []
    // if(nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
    //     return [[nums[0],nums[1],nums[2]]]
    // }
    var obj = {}
    var insertedObj = {}
    var triplets = []
    var tripletsSame = []
    var doubletUsed = []
    for(let i=0;i<nums.length;i++) {
        if(obj[nums[i]] === undefined) obj[nums[i]] = [i]
        else obj[nums[i]].push(i)
    }
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            // console.log(nums[i],nums[j])
            let sum = nums[i] + nums[j]
            if(obj[-sum] !== undefined) {
                
                var arr = obj[-sum];
                for(let x in arr) {
                    x = parseInt(x)
                    if((i !== x) && (j !== x) && (i !== j) && (nums[x] + nums[i] + nums[j] === 0) ) {
                        console.log(i,j,x)
                        // var same = false;
                        // if(nums[i] === nums[j] && nums[j] === nums[x]){
                        //     same= true
                        //     if(!tripletsSame.includes(nums[i])) {
                        //         tripletsSame.push(nums[i])
                        //     }
                        // }
                        // else{
                            // !same &&
                        if(insertedObj[`${nums[x]},${nums[i]},${nums[j]}`] === undefined)
                            triplets.push([nums[x],nums[i],nums[j]])
                            insertedObj[`${nums[x]},${nums[i]},${nums[j]}`] = true
                        insertedObj[`${nums[i]},${nums[j]},${nums[x]}`] = true
                        insertedObj[`${nums[i]},${nums[x]},${nums[j]}`] = true
                        insertedObj[`${nums[x]},${nums[j]},${nums[i]}`] = true
                        insertedObj[`${nums[j]},${nums[x]},${nums[i]}`] = true
                        insertedObj[`${nums[j]},${nums[i]},${nums[x]}`] = true
                        
                        // }
                    }
                }
                
            }
        }
    }
    // for(let x of tripletsSame){
    //     triplets.push([x,x,x])
    // }
    return triplets;
    // var triplets = []
    // for(let i=0;i<nums.length;i++) {
    //    for(let j=1;j<nums.length;j++) {
    //        obj[nums[i] + nums[j]] = [nums[i],nums[j]]
    //    }
    // }
    // console.log(obj)
    // for(let x in obj) {
    //     for(let i=0;i<nums.length;i++) {
    //         if(parseInt(x) === -nums[i]) {
    //             console.log('here')
    //             console.log(obj[x])
    //             obj[x].push(nums[i])
    //             triplets.push(obj[x])
    //         }
    //     }
    // }
    // // for(let i of nums) {
    // //     if(obj[`${(-i)}`]) {
    // //         console.log('reached here')
    // //        const tripletArray = [...obj[`${(-i)}`], i]
    // //        triplets.push(tripletArray)
    // //     }
    // // }
    // console.log(triplets);
    // return triplets;
};

// [] // []
// [1] // []
// [1,2] // []
// [1,2,3] // []
// [-1,1,0] // [[-1,1,0]]
//  [-1,0,1,2,-1,-4] // [[-1,-1,2],[-1,0,1]]
// {-1-> 1, 0->0,1->-1,2->-2, -1-> 1, -4 -> 4}
