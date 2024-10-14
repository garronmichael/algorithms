/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // sentinel node
    let pseudoHead = new ListNode(0, head)
    let node = pseudoHead
    while (node) {
        while (node.next && node.next.val === val) {
            node.next = node.next.next
        }
        node = node.next
    }

    return pseudoHead.next

    // naive approach
    // let node

    // while (head && head.val === val) {
    //     head = head.next
    // }

    // node = head 

    // while (node) {
    //     while (node.next && node.next.val === val) {
    //         node.next = node.next.next
    //     }
    //     node = node.next
    // }
    
    // return head
};