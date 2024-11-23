/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

Example 1:


Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 

Constraints:

1 <= n <= 9
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    // did not pass tests but attempted to reimplement solution based concepts 
    // const board = new Array(n).fill(new Array(n).fill('.')) // breaks because the row arrays are all the same array instance
    const board = Array.from({length: n}, () => Array(n).fill("."))

    const output = []

    function backtrack(row, cols, diags, antidiags, board) {
        if (row === n) {
            let solution = []
            for (let i = 0; i < board.length; i++) {
                solution.push(board[i].join(''))
            }
            output.push(solution)
            return
        }

        for (let col = 0; col < n; col++) {
            const diag = row - col
            const antidiag = row + col
            const hasQueen = (
                cols.has(col)
                || diags.has(diag)
                || antidiags.has(antidiag)
            )

            if (!hasQueen) {
                cols.add(col)
                diags.add(diag)
                antidiags.add(antidiag)
                board[row][col] = 'Q'

                backtrack(row + 1, cols, diags, antidiags, board)
                
                board[row][col] = '.'
                cols.delete(col)
                diags.delete(diag)
                antidiags.delete(antidiag)
            }
        }
    }
    
    backtrack(0, new Set(), new Set(), new Set(), board)

    return output  
};