// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]

var sequentialDigits = function(low, high) {
    const sequentialNumber = '123456789';
    const lowLength = `${low}`.length;
    const highLength = `${high}`.length;
    let arr = [];
    for(let i=lowLength;i<=highLength;i++) {
        for(let j=0;j<sequentialNumber.length - i+1;j++) {
            const num = sequentialNumber.substr(j,i);
            if(num >= low && num <=high) {
                arr.push(num);
            }
        }
    }
    return arr;
};