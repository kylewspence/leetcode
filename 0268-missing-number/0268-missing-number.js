/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let expectedSum = 0;
let foundSum = 0;
for (let i = 0; i < nums.length; i++){
expectedSum += i + 1;
foundSum += nums[i];
}
return expectedSum - foundSum;
}
    
    

