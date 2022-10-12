
testPrices = [7,1,5,3,6,4]

var maxProfit = function(prices){
    let left = 0;
    let right = 1;
    let profit = 0;
    let totalProfits = 0;

    while(right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right] - prices[left]; 
            console.log(profit);
            totalProfits = totalProfits + profit;
            console.log(totalProfits);
            left += 1;
        }else{
            left = right;
        }
        right += 1;
    }

    return totalProfits

}

console.log(maxProfit(testPrices));