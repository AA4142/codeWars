/*
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [1,2,3,4];

 var containsDuplicate = function(nums) {
    let numsObj = {};

    for(let i = 0; i < nums.length; i++){
        if(numsObj[nums[i]] !== undefined){
            return true;
        }else{
            numsObj[nums[i]] = i;
        }
    }
    return false;
 }
console.log(containsDuplicate(nums));