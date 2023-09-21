// DefineWrite a program that finds the best days to buy and sell stocks to maximize profit, given an array of stock prices. Return the maximum profit that can be made. If no profit can be made, return -1.
// Example: [100,180,260,310,40,535,695]
// Output: Buy on day 5 at price 40 Sell on day 7 at price 695 Max profit: 655

function doTrade(){
    let maxProfit =0;
    let buyIndex =0;
    let sellIndex =0;
    let buyPrice =0;
    let sellPrice =0;
    let profit =0;
    let stockPrices = [100,180,260,310,40,535,695];
    for(let i=0;i<stockPrices.length;i++){
        buyPrice = stockPrices[i];
        for(let j=i+1;j<stockPrices.length;j++){
            sellPrice = stockPrices[j];
            profit = sellPrice - buyPrice;
            if(profit > maxProfit){
                maxProfit = profit;
                buyIndex = i;
                sellIndex = j;
            }
        }
    }
    console.log("Buy on day "+(buyIndex+1)+" at price "+stockPrices[buyIndex]);
    console.log("Sell on day "+(sellIndex+1)+" at price "+stockPrices[sellIndex]);
    console.log("Max profit: "+maxProfit);

}