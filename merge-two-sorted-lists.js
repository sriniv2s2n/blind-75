/**
 * @LeetCode - #21 - https://leetcode.com/problems/merge-two-sorted-lists/
 * @ProblemDescription
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

let mergeTwoLists = function (list1, list2) {
    let prev = new ListNode();
    let head = prev;

    let i = list1;
    let j = list2;

    while (i !== null && j !== null) {
        if (i.val <= j.val) {
            prev.next = i;
            prev = i;
            i = i.next;
        } else {
            prev.next = j;
            prev = j;
            j = j.next;
        }
    }

    if (i !== null) prev.next = i;
    if (j !== null) prev.next = j;

    return head.next;
};