/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    var minRotations = function(target, a, b) {
        var swap =0;
        for(let i=0;i<a.length;i++) {
            if(target !== a[i]) {
                if(target === b[i]){
                    swap++;
                } else {
                    return 10000;
                }
            }
            
        }
        return swap;
    }
    var x=  Math.min(minRotations(tops[0],tops,bottoms), minRotations(tops[0],bottoms,tops),minRotations(bottoms[0],tops,bottoms),minRotations(bottoms[0],bottoms,tops))
    if(x === 10000) {
        x =-1;
    }
    return x;
};


// [2,1,1,3,2,1,2,2,1]
// [3,2,3,1,3,2,3,3,2]
