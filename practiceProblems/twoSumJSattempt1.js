/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//coding brute force method
let tar = 9;
let numbers = [2,15,11,7];


var twoSum = function(nums, target){
    const storedValue = {};

    for(let i = 0; i < nums.length ; i++){
        let complement = target - nums[i];
        console.log(complement);
        if(storedValue[complement] !== undefined){
            return [storedValue[complement], i];
        }
        storedValue[nums[i]] = i;
        console.log(storedValue);
    }

}

console.log(twoSum(numbers,tar));

/*

var threeSum = function(nums, target){
    const storedValue = {};

    for(let i = 0; i < nums.length)
}

*/