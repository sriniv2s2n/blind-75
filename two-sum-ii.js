/**
 * @LeetCode - #167 - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @ProblemDescription
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. 
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.
 */

 let twoSumII = function(numbers, target) {
    
    let indexMap = new Map();
    for(let i = 0; i < numbers.length; i++) {
        if(indexMap.has(numbers[i])) indexMap.get(numbers[i]).push(i + 1);
        else indexMap.set(numbers[i], [i + 1]);
    }
    
    let comp;
    for(let i = 0; i < numbers.length; i++) {
        comp = target - numbers[i];
        if(indexMap.has(comp)) {
            if(comp === numbers[i]) {
                if(indexMap.get(comp).length > 1) return indexMap.get(comp);
            } else {
                return [indexMap.get(numbers[i])[0], indexMap.get(comp)[0]]
            }
        }
    }
};