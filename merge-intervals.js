/**
 * @LeetCode - #56 - https://leetcode.com/problems/merge-intervals/
 * @ProblemDescription
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */


let mergeIntervals = function (intervals) {

    //range[min, max]
    let inRange = (range, num) => {
        if (num >= range[0] && num <= range[1]) return true;
        return false;
    }

    //Sort the intervals increasing based on Min Value
    intervals.sort((a, b) => a[0] - b[0]);

    let sequence = [];

    for (let i = 0; i < intervals.length; i++) {
        //For every interval check with last sequence
        if (sequence.length === 0) sequence.push(intervals[i]);
        else {
            let prevSequence = sequence[sequence.length - 1];
            if (inRange(prevSequence, intervals[i][0])) {
                sequence[sequence.length - 1] = [prevSequence[0], Math.max(prevSequence[1], intervals[i][1])];
            } else sequence.push(intervals[i]);
        }
    }

    return sequence;
};