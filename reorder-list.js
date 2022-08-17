/**
 * @LeetCode - #143 - https://leetcode.com/problems/reorder-list/
 * @ProblemDescription
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 */

let reorderList = function (head) {


    let traverse = nodeHead => {
        let start = nodeHead;
        let newStart = start.next;
        let node = start;
        let newEnd = start;
        while (node.next) {
            newEnd = node;
            node = node.next;
        }
        if (start === newEnd) return;
        let end = node;
        start.next = end;
        end.next = newStart;
        newEnd.next = null;
        traverse(newStart);
    }

    traverse(head);
};