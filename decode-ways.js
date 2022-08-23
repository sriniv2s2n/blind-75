/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let range = (start, end) => {
        return {
            [Symbol.iterator]: () => {
                start = start - 1;
                return {
                    next: () => ({
                        value: (++start).toString(),
                        done: start > end
                    })
                }
            }
        }
    }
    let result = 0;
    let validValues = [...range(1, 26)];
    let memo = new Map();
    let dfs = id => {
        if (id > s.length - 1) {
            result++;
            return;
        }
        if (validValues.find(val => val === s[id])) {
            if (memo.has(id + 1)) result += memo.get(id + 1);
            else {
                dfs(id + 1);
                memo.set(id + 1, result);
            }
        }
        else return;
        if ((id + 1 < s.length) && validValues.find(val => val === (s[id] + s[id + 1]))) {
            if (memo.has(id + 2)) result += memo.get(id + 2);
            else {
                dfs(id + 2);
                memo.set(id + 2, result);
            }
        }
        else return;
    }
    dfs(0);
    return result;
};