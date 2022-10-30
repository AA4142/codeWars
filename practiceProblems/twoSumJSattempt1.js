/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//coding brute force method

let tar = 9;
let numbers = [2,15,11,7];



function twoSum(nums, target) {
    let numObj = {};
    for(let i = 0 ; i < nums.length; i++){
        let complement = target - nums[i];
        if(numObj[complement] !== undefined){
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
        console.log(numObj)
    }
}

twoSum(numbers, tar);