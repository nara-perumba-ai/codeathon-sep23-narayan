/**
 * Finds the best day to buy and sell a stock to maximize profit.
 * @param {number[]} stockPrices - An array of stock prices for each day.
 * @returns {Object} An object containing the buy day, sell day, and max profit.
 */
function doTrade(stockPrices){
    let maxProfit = 0;
    let buyIndex = 0;
    let sellIndex = 0;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0;

    // Loop through each day to find the best buy and sell days
    for(let i = 0; i < stockPrices.length; i++){
        buyPrice = stockPrices[i];
        for(let j = i + 1; j < stockPrices.length; j++){
            sellPrice = stockPrices[j];
            profit = sellPrice - buyPrice;

            // If the profit is greater than the current max profit, update the max profit and buy/sell days
            if(profit > maxProfit){
                maxProfit = profit;
                buyIndex = i;
                sellIndex = j;
            }
        }
    }

    // Return an object containing the buy day, sell day, and max profit
    return {
        buyDay: buyIndex + 1,
        sellDay: sellIndex + 1,
        maxProfit: maxProfit
    };
}

// Example usage:
const stockPrices = [100, 180, 260, 310, 40, 535, 695];
const result = doTrade(stockPrices);
console.log(`Buy on day ${result.buyDay} at price ${stockPrices[result.buyDay - 1]}`);
console.log(`Sell on day ${result.sellDay} at price ${stockPrices[result.sellDay - 1]}`);
console.log(`Max profit: ${result.maxProfit}`);