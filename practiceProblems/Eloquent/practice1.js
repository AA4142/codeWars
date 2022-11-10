const nums = [-1,0,3,5,6,7,8,9,12];
const target = 9

var search = function(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((right + left) / 2);

        if(nums[mid] === target){
            return mid;
        }else if(target < nums[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}

console.log(search(nums,target));