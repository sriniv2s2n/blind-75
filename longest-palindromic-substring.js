/**
 * @LeetCode - #5 - https://leetcode.com/problems/longest-palindromic-substring/
 */

let longestPalindrome = s => {
    let maxLen = 1;
    let result = s[0];

    let isPalindrome = str => {
        let i = 0;
        let j = str.length - 1;
        while (i <= j) {
            if (str[i] !== str[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    let groupBy = 2;
    while (groupBy <= s.length) {
        for (let i = 0; i <= s.length - groupBy; i++) {
            let substr = s.slice(i, i + groupBy);
            if (isPalindrome(substr) && substr.length > maxLen) {
                maxLen = substr.length;
                result = substr;
            }
        }
        groupBy++;
    }

    return result;
}