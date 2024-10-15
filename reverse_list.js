/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // recursive
    if (head === null || head.next === null) {
        return head
    }
    let reversed = reverseList(head.next)
    head.next.next = head
    head.next = null
    return reversed


    // iterative optimized
    // if (head === null) return head

    // let prev = null
    // let cur = head
    // while (cur) {
    //     let next = cur.next
    //     cur.next = prev
    //     prev = cur
    //     cur = next
    // }

    // return prev

    // iterative
    // let queue = []
    // let node = head

    // if (head === null) return head

    // while (node) {
    //     queue.push(node)
    //     node = node.next
    // }

    // head = queue[queue.length - 1]

    // for (let i = queue.length - 1; i >= 0; i--) {
    //     let node = queue[i]
    //     node.next = queue[i - 1] || null
    // }

    // return head
};