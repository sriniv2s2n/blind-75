/**
 * @LeetCode - #139 - https://leetcode.com/problems/word-break/
 */

let wordBreak = function (s, wordDict) {
  let dp = Array.from({ length: s.length + 1 }, () => false);
  dp[s.length] = true;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      if (
        i + wordDict[j].length <= s.length &&
        s.slice(i, i + wordDict[j].length) === wordDict[j]
      ) {
        dp[i] = dp[i + wordDict[j].length];
      }
      if (dp[i]) break;
    }
  }
  return dp[0];
};
