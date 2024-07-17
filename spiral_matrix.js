/*
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    // solution
    let result = []
    let rows = matrix.length
    let columns = matrix[0].length
    let up = 0
    let left = 0
    let right = columns - 1
    let down = rows - 1

    while (result.length < rows * columns) {

        for (let col = left; col <= right; col++) {
            result.push(matrix[up][col])
        }

        for (let row = up + 1; row <= down; row++) {
            result.push(matrix[row][right])
        }

        if (up !== down) {
            for (let col = right - 1; col >= left; col--) {
                result.push(matrix[down][col])
            }
        }

        if (left !== right) {
            for (let row = down - 1; row > up; row--) {
                result.push(matrix[row][left])
            }
        }
        
        left++
        right--
        up++
        down--
    }

    return result


    // failed solution 1
    // let output = []
    // let totalEls = matrix.length * matrix[0].length
    // let r = 0
    // let c = 0
    // let rMax= matrix.length
    // let cMax = matrix[0].length
    // let cMin = 0
    // let rMin = 0

    // while (output.length - 1 < totalEls) {

    //     // first row
    //     for (; c < cMax; c++) {
    //         output.push(matrix[r][c])
    //     }

    //     // increment r; remove smallest row
    //     c--
    //     r++
    //     rMin++
        
    //     // last column
    //     for (; r < rMax; r++) {
    //         output.push(matrix[r][c])
    //     }

    //     // decrement c; remove biggest col
    //     r--
    //     c--
    //     cMax--

    //     // last row
    //     for (; c >= cMin; c--) {
    //         output.push(matrix[r][c])
    //     }


    //     // decrement r; remove biggest row
    //     c++
    //     r--
    //     rMax--
    

    //     // first column
    //     for (; r >= rMin; r--) {
    //         output.push(matrix[r][c])
    //     }

    //     // increment c; remove smallest col
    //     r++
    //     c++
    //     cMin++
    // }

    // return output
};

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), "Expected [1,2,3,6,9,8,7,4,5]")
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), "Expected [1,2,3,4,8,12,11,10,9,5,6,7]")