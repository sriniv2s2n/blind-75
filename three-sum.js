/**
 * @LeetCode - #15 - https://leetcode.com/problems/3sum/
 * @ProblemDescription
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

let threeSum = (nums) => {
    let twoSum = (numbers, target) => {
        let end, sum;
        let result = [];
        let visitedTwoSumMap = new Map();
        for (let start = 0; start < numbers.length - 1; start++) {
            if (!visitedTwoSumMap.has(numbers[start])) {
                visitedTwoSumMap.set(numbers[start], true);
                end = numbers.length - 1;
                while (end > start) {
                    sum = numbers[start] + numbers[end];
                    if (sum > target) end--;
                    else if (sum < target) break;
                    else {
                        result.push([numbers[start], numbers[end]]);
                        break;
                    }
                }
            }
        }
        return result;
    }

    nums.sort((a, b) => a - b);
    let visitedThreeSumMap = new Map();
    let final = [];
    for(let i = 0; i <= nums.length - 3; i++) {
        if(!visitedThreeSumMap.has(nums[i])) {
            visitedThreeSumMap.set(nums[i], true);
            final = final.concat(twoSum(nums.slice(i + 1), -nums[i]).map(item => item.concat(nums[i])))
        }
    }
    return final;
}



/**
 * @NaiveApproach
 */
let threeSumNaiveApproach = function (nums) {
    let result = [];
    let ijValue, ijkValue;
    let map = new Map();
    let item, itemKey;
    for (let i = 0; i <= nums.length - 3; i++) {
        for (let j = i + 1; j <= nums.length - 2; j++) {
            ijValue = nums[i] + nums[j];
            for (let k = j + 1; k <= nums.length - 1; k++) {
                ijkValue = ijValue + nums[k];
                if (ijkValue === 0) {
                    item = [nums[i], nums[j], nums[k]].sort();
                    itemKey = item.join(" ");
                    if (map.has(itemKey)) continue;
                    else {
                        result.push(item);
                        map.set(itemKey, true);
                    }
                }
            }
        }
    }

    return result;
};