
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [2,7,11,15]; 
const target = 9;

var twoSum = function(nums, target){
    let numsObj = {}
    
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(numsObj[complement] !== undefined){
            return [numsObj[complement], i];
        }else{
            numsObj[nums[i]] = i;
        }
    }
}

console.log(twoSum(nums,target));