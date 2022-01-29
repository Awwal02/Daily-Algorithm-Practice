/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    for(let i=0;i<strs.length;i++) {
        let arr = Array(26).fill(0);
        for(let j=0;j<strs[i].length;j++){
            arr[strs[i].charAt(j).charCodeAt(0) - 97]++;
        }
        if(obj[arr]) {
            obj[arr].push(strs[i])
        } else {
            obj[arr] = [strs[i]]
        }
    }
     return Object.values(obj);   
};
