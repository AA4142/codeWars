


/**
 * @param {number[]} prices
 * @return {number}
 */


const testprices = [7,1,5,3,6,4]
//we need to create two pointers that are going to go through the list and find the max diff
//left pointer to hold lower number at 0 and then right pointer to start on the second day
//we also need something to hold the max value


 var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let profit = 0;
    let maxDiff = 0;

    while(right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right] - prices[left]
            maxDiff = Math.max(maxDiff, profit);
            
        }else{
            left = right;
        }
        right += 1;
    }
   
    return(maxDiff);
    
};

console.log(maxProfit(testprices));