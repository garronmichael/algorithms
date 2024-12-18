"""
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.


Example 1:


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
"""

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # divide and conquer into rows, cols and boxes
        # for row in range(9):
        #     set_row = set()
        #     for col in range(9):
        #         if board[row][col] == '.':
        #             pass
        #         elif board[row][col] in set_row:
        #             return False
        #         else:
        #             set_row.add(board[row][col])

        # for col in range(9):
        #     set_col = set()
        #     for row in range(9):
        #         if board[row][col] == '.':
        #             pass
        #         elif board[row][col] in set_col:
        #             return False
        #         else:
        #             set_col.add(board[row][col])

        # for box_row in range(0, 9, 3):
        #     for box_col in range(0, 9, 3):
        #         set_box = set()
        #         for row in range(box_row, box_row + 3, 1):
        #             for col in range(box_col, box_col + 3, 1):
        #                 if board[row][col] == '.':
        #                     pass
        #                 elif board[row][col] in set_box:
        #                     return False
        #                 else:
        #                     set_box.add(board[row][col])

        # return True

        # optimized: iterate over all cells once and verify against the sets for rows, cols and boxes
        rows = [set() for i in range(9)]
        cols = [set() for i in range(9)]
        boxes = [set() for i in range(9)]

        for row in range(9):
            for col in range(9):
                val = board[row][col]
                box = ((row // 3) * 3) + (col // 3)
                if val == '.':
                    continue
                elif val in rows[row] or val in cols[col] or val in boxes[box]:
                    return False
                else:
                    rows[row].add(val)
                    cols[col].add(val)
                    boxes[box].add(val)

        return True

