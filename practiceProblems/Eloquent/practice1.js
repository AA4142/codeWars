
const nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums){
    let globalMaxSum = nums[0];
    let localMaxSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        localMaxSum = Math.max(nums[i], localMaxSum + nums[i]);
        console.log(localMaxSum);

        globalMaxSum = Math.max(localMaxSum, globalMaxSum);
    }

    return globalMaxSum;


}

console.log(maxSubArray(nums));
































var maxSub = function(nums){
    //declare the local and global max
    //local max let's us loop
    //global max will auto return if array val is less than 2;
    let localMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++){
        localMax = Math.max(localMax, nums[i] + localMax);

        globalMax = Math.max(globalMax, localMax);
    }

    return globalMax;
}












