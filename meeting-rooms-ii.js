/**
 * @LeetCode - #253 - https://aaronice.gitbook.io/lintcode/sweep-line/meeting-rooms-ii
 * @ProblemDescription
 * Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), find the minimum number of conference rooms required.
 */

let minMeetingRooms = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);
    let minRooms = 0;
    let isRoomAvailable;
    let roomAvailabilityMap = new Map();
    for (let i = 0; i < intervals.length; i++) {
        isRoomAvailable = false;
        let [start, end] = intervals[i];
        for (let [room, roomEndTime] of roomAvailabilityMap.entries()) {
            if (start >= roomEndTime) {
                isRoomAvailable = true;
                roomAvailabilityMap.set(room, end);
                break;
            }
        }
        if (!isRoomAvailable) {
            minRooms++;
            roomAvailabilityMap.set(minRooms, end);
        }
    }
    return minRooms;
}

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
console.log(minMeetingRooms([[7, 10], [2, 4]]));
console.log(minMeetingRooms([[0, 15], [10, 20], [20, 30], [25, 50]]));
console.log(minMeetingRooms([[0, 15]]));