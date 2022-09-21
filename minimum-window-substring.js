/**
 * @LeetCode - #76 - https://leetcode.com/problems/minimum-window-substring/
 */

let minWindow = function (s, t) {
  if (t.length > s.length) return "";

  let freqCounter = (str) => {
    let freqMap = {};
    for (let i = 0; i < str.length; i++)
      freqMap[str[i]] = (freqMap[str[i]] || 0) + 1;
    return freqMap;
  };

  let isMatch = (sMap, tMap) => {
    let keys = Object.keys(tMap);
    for (let i = 0; i < keys.length; i++) {
      if (sMap[keys[i]] === undefined || sMap[keys[i]] < tMap[keys[i]])
        return false;
    }
    return true;
  };

  let result = s + "1";
  let tFreqMap = freqCounter(t);
  let left = 0;
  let right = t.length - 1;
  let sFreqMap = freqCounter(s.slice(left, right + 1));

  while (right < s.length) {
    if (isMatch(sFreqMap, tFreqMap)) {
      let subStr = s.slice(left, right + 1);
      if (subStr.length < result.length) result = subStr;
      while (true) {
        sFreqMap[s[left]] = sFreqMap[s[left]] - 1;
        left++;
        if (isMatch(sFreqMap, tFreqMap)) {
          let subStr = s.slice(left, right + 1);
          if (subStr.length < result.length) result = subStr;
        } else {
          break;
        }
      }
    } else {
      right++;
      sFreqMap[s[right]] = (sFreqMap[s[right]] || 0) + 1;
    }
  }

  if (result.length === s.length + 1) return "";
  return result;
};
