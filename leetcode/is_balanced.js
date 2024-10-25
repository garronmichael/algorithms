/*
Given a binary tree, determine if it is 
height-balanced
.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
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
 * @return {boolean}
 */
var isBalanced = function(root) {

    // works for some cases but is wrong; confused about definition of "height balanced binary" tree
    let minDepth = Number.MAX_VALUE
    let maxDepth = Number.MIN_VALUE

    if (root === null) return true

    function recurse(node, depth) {
        
        if (node.left === null || node.right === null) {
            if (depth < minDepth) minDepth = depth
            if (depth > maxDepth) maxDepth = depth
        }

        if (node.left) recurse(node.left, depth + 1)
        if (node.right) recurse(node.right, depth + 1)
    }

    recurse(root, 1)

    return maxDepth - minDepth < 2
};