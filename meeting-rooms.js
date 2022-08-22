/**
 * @LeetCode - #252 - https://aaronice.gitbook.io/lintcode/sweep-line/meeting-rooms
 * @ProblemDescription
 * Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.
 */

let canAttendMeeting = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]); //Sort intervals based on Start Time in Non-Decreasing Order
    for (let i = 1; i < intervals.length; i++) {
        let [currStart] = intervals[i];
        let [_, prevEnd] = intervals[i - 1];
        if (currStart < prevEnd) return false;
    }
    return true;
}