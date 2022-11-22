/*
 * @param {number[]} prices
 * @return {number}
 */
const prices = [7,1,5,3,6,4]

 var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxDiff = 0;

    for (right ; right < prices.length; right++){
        if(prices[right] > prices[left]){
            let difference = prices[right] - prices[left];
            maxDiff = Math.max(maxDiff, difference);
        }else{
            left = right;
        }
    }
    return maxDiff;
    
};

console.log(maxProfit(prices));