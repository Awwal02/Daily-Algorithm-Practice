// https://leetcode.com/problems/pascals-triangle/
//Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(num) {
    let arr = new Array(num);
  for(let i=0;i<num;i++) {
    arr[i] = new Array(i + 1);
    for(let j=0;j<=i;j++) {
      if(j === 0 || j=== i) {
        arr[i][j] = 1;
      } else {
        let num2 = 0;
        if(arr[i-1][j-1]) {
          num2 =arr[i-1][j-1];
        }
        if(arr[i-1][j]) {
          num2 += arr[i-1][j];
        }
        arr[i][j] = num2;
      }
    }
  }
    return arr;
};