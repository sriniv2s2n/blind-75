let eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = 0;
    let [prevStart, prevEnd] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = intervals[i];
        if (currStart < prevEnd) {
            //Overlap exists
            //Adjust PrevStart and PrevEnd 
            if (currEnd >= prevEnd) {
                //If Current End is greater than Previous End
                //Keep prevStart and prevEnd as it is
            } else {
                //If Current End is lesser than Previous End
                //Update prevStart and prevEnd to currStart and currEnd
                prevStart = currStart;
                prevEnd = currEnd;
            }
            result++;
        } else {
            //No Overlap exists
            //Adjust prevStart and prevEnd to current interval
            [prevStart, prevEnd] = intervals[i];
        }
    }
    return result;
};