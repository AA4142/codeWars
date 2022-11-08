const nums = [-1,0,3,5,9,12];
const target = 9

var search = function(nums,target){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(search(nums, target));