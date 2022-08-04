/**
 * @LeetCode - #128 - https://leetcode.com/problems/longest-consecutive-sequence/
 * @ProblemDescription
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 */
//TimeComplexity - O(n)
let longestConsecutive = function (nums) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i]);
    }

    let max = 0;
    let count, seq
    for (let i = 0; i < nums.length; i++) {
        count = 1;
        if (map.has(nums[i] - 1)) continue;//It is not start of sequnce
        else { //It is start of sequence
            seq = nums[i];
            while (true) {
                if (map.has(seq + 1)) {
                    seq = seq + 1;
                    count++
                } else break;
            }
        }
        max = Math.max(max, count);
    }

    return max;
};


/**
 * @NaiveApproach
 * @TimeComplexity - O(nlogn) + O(n)
 */
let longestConsecutiveNaiveApproach = function (nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    let arry = Array.from(new Set(nums));
    let max = 1;
    let count = 1;
    for (let i = 0; i < arry.length - 1; i++) {
        if (arry[i + 1] - arry[i] === 1) count++;
        else {
            max = Math.max(max, count);
            count = 1;
        }
    }
    max = Math.max(max, count);
    return max;
};