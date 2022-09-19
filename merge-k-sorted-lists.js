/**
 * @LeetCode - #23 - https://leetcode.com/problems/merge-k-sorted-lists/
 */

let mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  let mergeLLHelper = (l1, l2) => {
    let head = new ListNode();
    let curr = head;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        curr.next = l1;
        curr = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        curr = l2;
        l2 = l2.next;
      }
    }

    if (l1 !== null) curr.next = l1;
    if (l2 !== null) curr.next = l2;
    return head.next;
  };

  let merge = lists;
  while (merge.length > 1) {
    let newMerge = [];
    for (let i = 0; i < merge.length; i = i + 2) {
      let l1 = merge[i];
      let l2 = i + 1 < merge.length ? merge[i + 1] : null;
      newMerge.push(mergeLLHelper(l1, l2));
    }
    merge = [...newMerge];
  }
  return merge[0];
};
