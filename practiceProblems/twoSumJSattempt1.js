/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const numbers = [2,7,11,15]
 const tar = 9

 var twoSum = function(nums, target) {
    //im going to make a hashmap that stores these numbers that I can then reference
    const hashMap1 = new Map();

    //I will now store the values in the hashmap with keys
    for(i in nums){
        hashMap1.set(i, nums[i]);
    }

    const values = [...hashMap1.values()];

    //im going to create target numbers for the different sums that each number would need to hit the actual target
    let indexHolder = [];
    let valueNeeded = 0;

    console.log(target);
    for(x in nums){
        console.log("valueNeeded = target - hashMap1[x] " + (target - hashMap1.get(x)))
        valueNeeded = target - hashMap1.get(x);
        //check if valueNeeded is in the hashmap
        if(values.includes(valueNeeded)){
            console.log("we have the value");
            return true;
        }else{
            console.log("we don't have the value");
            return false;
        }
        
        //how do we return the value of the exact spot?

        //if it is in the hashmap, get the key value of the hashmap
    }

    //I then find out if the hashmap has that value for each particular number

    //then when we find the matching pair we will return their locations with nums[i] and then the key that holds the target location


 }



twoSum(numbers, tar);