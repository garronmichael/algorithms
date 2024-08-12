/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:
https://assets.leetcode.com/uploads/2021/02/14/tree.jpg


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
/*

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
var rightSideView = function(root) {
    const output = []
    let currentLevel = []
    currentLevel.push(root)

    if (root === null) {
        return output
    }

    while (currentLevel.length > 0) {
        let nextLevel = []
        
        output.push(currentLevel[currentLevel.length - 1].val)
        
        while (currentLevel.length > 0) {
            let node = currentLevel.shift()
            if (node.left) nextLevel.push(node.left)
            if (node.right) nextLevel.push(node.right)
        }

        currentLevel = nextLevel
    }

    return output
};

