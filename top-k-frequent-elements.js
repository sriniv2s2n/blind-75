/**
 * @LeetCode - #347 - https://leetcode.com/problems/top-k-frequent-elements/
 * @ProblemDescription
 * Given an integer array nums and an integer k, return the k most frequent elements. 
 * You may return the answer in any order.
 */

let topKFrequent = function (nums, k) {
    let count;
    let freqMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (freqMap.has(nums[i])) {
            count = freqMap.get(nums[i]);
            count++;
            freqMap.set(nums[i], count);
        } else freqMap.set(nums[i], 1);
    }

    let heap = [];
    let enQueue = (data) => {
        heap.push(data);
        if (heap.length === 1) return;
        else {
            let idx = heap.length - 1;
            let parentIdx;
            while (idx > 0) {
                parentIdx = Math.floor((idx - 1) / 2);
                if (heap[idx].prior > heap[parentIdx].prior) {
                    [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
                    idx = parentIdx;
                } else break;
            }
            return;
        }
    }

    let extractMax = () => {
        if (heap.length === 0) return null;

        [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];

        let max = heap.pop();
        let idx = 0;
        let length = heap.length;
        let leftIdx;
        let rightIdx;
        let leftElem, rightElem, currElem, swapIdx;

        while (true) {
            swapIdx = null;
            leftIdx = (2 * idx) + 1;
            rightIdx = (2 * idx) + 2;
            if (leftIdx < length) {
                currElem = heap[idx];
                leftElem = heap[leftIdx];
                if (leftElem.prior > currElem.prior) swapIdx = leftIdx;

                if (rightIdx < length) {
                    rightElem = heap[rightIdx];
                    if ((swapIdx !== null && rightElem.prior > leftElem.prior) ||
                        (swapIdx === null && rightElem.prior > currElem.prior))
                        swapIdx = rightIdx;
                }
            }
            if (swapIdx === null) break;

            [heap[idx], heap[swapIdx]] = [heap[swapIdx], heap[idx]];
            idx = swapIdx;
        }

        return max;
    }

    for (let [key, val] of freqMap.entries()) {
        enQueue({ value: key, prior: val });
    }

    let result = [];
    while (k > 0) {
        result.push(extractMax().value);
        k--;
    }

    return result;
};