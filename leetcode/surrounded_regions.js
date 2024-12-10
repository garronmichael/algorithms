/*
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.



Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:

https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg

In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]

Output: [["X"]]



Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var surroundedRegions = function(board) {
    if (board === null || board.length === 0) return

    const borders = []
    const numRows = board.length
    const numCols = board[0].length

    for(let row = 0; row < numRows; row++) {
        borders.push([row, 0])
        borders.push([row, numCols - 1])
    }

    for(let col = 0; col < numCols; col++) {
        borders.push([0, col])
        borders.push([numRows - 1, col])
    }

    // console.log({borders})

    borders.forEach((pair) => dfs(board, pair[0], pair[1]))


    function dfs(board, row, col) {
        // console.log({board, row, col})
        if (board[row][col] !== 'O') return

        board[row][col] = 'C'
        if (col < numCols - 1) dfs(board, row, col + 1)
        if (col > 0) dfs(board, row, col - 1)
        if (row < numRows - 1) dfs(board, row + 1, col)
        if (row > 0) dfs(board, row - 1, col)
    }

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (board[row][col] === 'O') {
                board[row][col] = 'X'
            }
            if (board[row][col] === 'C') {
                board[row][col] = 'O'
            }
        }
    }
};