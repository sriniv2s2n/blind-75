/**
 * @LeetCode - #647 - https://leetcode.com/problems/palindromic-substrings/
 */

let countSubstrings = (s) => {
    let count = s.length;

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
            if (isPalindrome(s.slice(i, i + groupBy))) count++;
        }
        groupBy++;
    }

    return count++;
}