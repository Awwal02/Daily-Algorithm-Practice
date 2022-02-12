/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var obj = {}
    var mergedArray = []
    intervals = intervals.sort((x,y) => {
        return x[0] - y[0]
    })
    mergedArray.push(intervals[0])
    let current = 0;
    for(let i=1;i< intervals.length;i++) {
        if(mergedArray[current][1] >= intervals[i][0]){
         var first = mergedArray[current][0]
         var second = Math.max(mergedArray[current][1], intervals[i][1])
         mergedArray.pop()
         mergedArray.push([first, second])   
        } else {
            mergedArray.push(intervals[i])
            current++;
        } 
    }
    return mergedArray;
};
