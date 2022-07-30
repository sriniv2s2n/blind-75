/**
 * @LeetCode - #1 - https://leetcode.com/problems/two-sum/
 * @ProblemDescription
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

let twoSum = (nums, target) => {
    let indexMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(indexMap.has(nums[i])) indexMap.get(nums[i]).push(i);
        else indexMap.set(nums[i], [i]);
    }

    let comp;
    for(let i = 0; i < nums.length; i++) {
        comp = target - nums[i];
        if(indexMap.has(comp)) {
            if(comp === nums[i]) {
                if(indexMap.get(comp).length > 1) return indexMap.get(comp);
            } 
            else return [i, indexMap.get(comp)[0]]
        }
    }
}