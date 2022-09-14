/**
 * @LeetCode - #322 - https://leetcode.com/problems/coin-change/
 */

let coinChange = function (coins, amount) {
  let numberOfCoins = Array.from({ length: amount + 1 }, () => Infinity);
  numberOfCoins[0] = 0;
  for (let amt = 1; amt <= amount; amt++) {
    for (let coin = 0; coin < coins.length; coin++) {
      if (amt - coins[coin] >= 0)
        numberOfCoins[amt] = Math.min(
          numberOfCoins[amt],
          1 + numberOfCoins[amt - coins[coin]]
        );
    }
  }
  return numberOfCoins[amount] !== Infinity ? numberOfCoins[amount] : -1;
};
