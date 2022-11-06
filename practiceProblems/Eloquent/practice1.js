const prices = [7,1,5,3,6,4]

//this works but it sucks it does not scale well if the arrays get bigger
/*
var maxProfit = function(prices){
    let maxDiff = 0;
    for(let i = 0; i + 1 < prices.length ; i++){
        let x = i + 1
        for(x; x < prices.length; x++){
            let tempDiff = prices[x] - prices[i];
            if(tempDiff > maxDiff){
                maxDiff = tempDiff;
            }
        }


    }
    return maxDiff;
}
*/

// =================================================================================

var maxProfit = function(prices){
    let right = 1, left = 0, maxProfit = 0;

    while(right < prices.length){
        if(prices[left] < prices [right]){
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        }else{
            left = right;
        }
        right += 1;
    }
    return maxProfit;
}

console.log(maxProfit(prices));