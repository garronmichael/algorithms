/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:
https://assets.leetcode.com/uploads/2024/08/29/screenshot-2024-08-29-202743.png

Input: root = [1,null,2,3]

Output: [1,3,2]

Explanation:



Example 2:
https://assets.leetcode.com/uploads/2024/08/29/tree_2.png

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [4,2,6,5,7,1,3,9,8]

Explanation:



Example 3:

Input: root = []

Output: []

Example 4:

Input: root = [1]

Output: [1]

 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let output = []


    function recurse(node) {
        if (node === null) return

        if (node.left) recurse(node.left)
        output.push(node.val)
        if (node.right) recurse(node.right)
    }

    recurse(root)

    return output
};