/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //if(x > Math.pow(2,30) || x< -Math.pow(2,-30)) return 0;
    1534236469
    let isNegative = x < 0;
    let num = Math.abs(x);
    let num2 = 0;
    while(num > 0) {
        let num3 = num % 10;
        num = Math.floor(num/10);
        num2 = (num2 * 10) + num3;
    }
    return isNegative ? -num2 : num2;
//     function setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//     return str.substring(0,index) + chr + str.substring(index+1);
// }
//     let numString = Math.abs(x).toString()
//     for(let i=0;i<Math.ceil(numString.length/2);i++) {
//         let endIndex = numString.length-1-i;
//         console.log(endIndex, numString[endIndex])
//         let temp = numString[i];
//         numString = setCharAt(numString, i, numString[endIndex])
//         numString = setCharAt(numString, endIndex, temp)
//     }
//     return isNegative ? -parseInt(numString) : parseInt(numString)
};
