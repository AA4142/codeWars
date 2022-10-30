/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//coding brute force method
let tar = 9;
let numbers = [2,15,11,7];


var answer = function twoSum(nums, target){
    //declaring object to hold our numbers and index
    let numObj = {};

    //standard for loop to get through every iteration w/o hitting the end end
    for(i = 0; i < nums.length ; i++){
        //finding the complement for the specific nums[i]
        const complement = target - nums[i];

        //checking to see if we have seen the complement
        if(numObj[complement] !== undefined){
            //this returns the index value of the complement and the current index value
            //of the complemented number
            return[numObj[[complement]], i];
        }
        //setting the value so we can compare future complements
        numObj[nums[i]] = i;
    }
}

console.log(answer(numbers,tar));