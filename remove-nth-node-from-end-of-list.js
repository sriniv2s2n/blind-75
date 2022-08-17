/**
 * @LeetCode - #19 - https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @ProblemDescription
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

let removeNthFromEnd = function (head, n) {
    let len = 0;
    let node = head;
    while (node) {
        len++;
        node = node.next;
    }

    let nodeFromStart = len - n + 1;
    let count = 0;
    let prevNode = null;
    node = head;
    while (node) {
        count++;
        if (count === nodeFromStart) {
            if (prevNode) {
                prevNode.next = node.next;
                node.next = null;
            } else {
                head = node.next;
                node.next = null;
            }
            break;
        } else {
            prevNode = node;
            node = node.next;
        }
    }
    return head;
};