/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:
https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // optimized
    const rows = new Array(9).fill().map(() => new Set)
    const cols = new Array(9).fill().map(() => new Set)
    const boxes = new Array(9).fill().map(() => new Set)

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c]

            if (val === '.') {
                continue
            }

            if (rows[r].has(val)) {
                return false
            }

            rows[r].add(val)

            if (cols[c].has(val)) {
                return false
            }

            cols[c].add(val)

            let boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3)

            if (boxes[boxIdx].has(val)) {
                return false
            }

            boxes[boxIdx].add(val)
        }

    }

    return true

    // solution 1
    // const rows = board
    // const cols = []
    // const subBoxes = []
    // for (let row = 0; row < board.length; row++) {
    //     for (let col = 0; col < board[row].length; col++) {
    //         let number = board[row][col]
    //         cols[col] = cols[col] || []
    //         cols[col].push(number)


    //         let subBoxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)
    //         subBoxes[subBoxIndex] = subBoxes[subBoxIndex] || []
    //         subBoxes[subBoxIndex].push(number)
    //     }
    // }

    // return isValidSudokuMatrix(rows) && isValidSudokuMatrix(cols) && isValidSudokuMatrix(subBoxes)
};

var isValidSudokuMatrix = function(matrix, type) {

    for (let i = 0; i < matrix.length; i++) {
        let hash = {}
        for (let j = 0; j < matrix[i].length; j++) {
            let number = matrix[i][j]
            if (Number.isInteger(parseInt(number)) && hash[number]) {

                return false
            }

            hash[number] = number
        }
        hash = {}
    }

    return true
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]), "Expected true")
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]), "Expected false")
