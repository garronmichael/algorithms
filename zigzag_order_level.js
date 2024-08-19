/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:
https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let output = []

    function helper(node, level) {
        
        if (output.length === level) output.push([])
        
        if (level % 2 === 0) {
            output[level].push(node.val)
        } else {
            output[level].unshift(node.val)
        }

        if (node.left) helper(node.left, level + 1)
        if (node.right) helper(node.right, level + 1)
    }

    if (root) helper(root, 0)
    
    return output
};