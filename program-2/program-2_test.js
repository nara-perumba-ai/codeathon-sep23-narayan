const assert = require('assert');
const { doTrade } = require('./program-2');

describe('doTrade', function() {
  it('should return the correct buy and sell days and max profit', function() {
    const stockPrices = [100,180,260,310,40,535,695];
    const expectedBuyDay = 1;
    const expectedSellDay = 7;
    const expectedMaxProfit = 655;

    const result = doTrade(stockPrices);

    assert.strictEqual(result.buyDay, expectedBuyDay);
    assert.strictEqual(result.sellDay, expectedSellDay);
    assert.strictEqual(result.maxProfit, expectedMaxProfit);
  });

  it('should return the correct buy and sell days and max profit when there are multiple solutions', function() {
    const stockPrices = [100,180,260,310,40,535,695, 200, 300];
    const expectedBuyDay = 1;
    const expectedSellDay = 7;
    const expectedMaxProfit = 655;

    const result = doTrade(stockPrices);

    assert.strictEqual(result.buyDay, expectedBuyDay);
    assert.strictEqual(result.sellDay, expectedSellDay);
    assert.strictEqual(result.maxProfit, expectedMaxProfit);
  });

  it('should return the correct buy and sell days and max profit when the max profit is negative', function() {
    const stockPrices = [100, 90, 80, 70, 60, 50];
    const expectedBuyDay = 1;
    const expectedSellDay = 1;
    const expectedMaxProfit = 0;

    const result = doTrade(stockPrices);

    assert.strictEqual(result.buyDay, expectedBuyDay);
    assert.strictEqual(result.sellDay, expectedSellDay);
    assert.strictEqual(result.maxProfit, expectedMaxProfit);
  });

  it('should return the correct buy and sell days and max profit when there is only one day of trading', function() {
    const stockPrices = [100];
    const expectedBuyDay = 1;
    const expectedSellDay = 1;
    const expectedMaxProfit = 0;

    const result = doTrade(stockPrices);

    assert.strictEqual(result.buyDay, expectedBuyDay);
    assert.strictEqual(result.sellDay, expectedSellDay);
    assert.strictEqual(result.maxProfit, expectedMaxProfit);
  });

  it('should return the correct buy and sell days and max profit when the stock prices are all the same', function() {
    const stockPrices = [100, 100, 100, 100, 100];
    const expectedBuyDay = 1;
    const expectedSellDay = 1;
    const expectedMaxProfit = 0;

    const result = doTrade(stockPrices);

    assert.strictEqual(result.buyDay, expectedBuyDay);
    assert.strictEqual(result.sellDay, expectedSellDay);
    assert.strictEqual(result.maxProfit, expectedMaxProfit);
  });
});