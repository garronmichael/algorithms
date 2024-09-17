/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generatePascalsTriangle = function(numRows) {
    let output = []
    let count = 0
    
    while (count < numRows) {
        let row = new Array(count + 1)

        if (count < 2) {
            row.fill(1)
        } else {
            row[0] = 1
            row[row.length - 1] = 1
            for (let i = 1; i < row.length - 1; i++) {
                let prevRow = output[count - 1]
                row[i] = prevRow[i - 1] + prevRow[i] 
            }
        }

        output.push(row)
        count++
    }

   return output 
};

// Solution
var generate = function (numRows) {
    // Return type is an array of arrays.
    const triangle = [];
    // Base case; first row is always [1].
    triangle.push([]);
    triangle[0].push(1);
    for (let rowNum = 1; rowNum < numRows; rowNum++) {
        const row = [];
        const prevRow = triangle[rowNum - 1];
        // The first row element is always 1.
        row.push(1);
        // Each triangle element (other than the first and last of each row)
        // is equal to the sum of the elements above-and-to-the-left and
        // above-and-to-the-right.
        for (let j = 1; j < rowNum; j++) {
            row.push(prevRow[j - 1] + prevRow[j]);
        }
        // The last row element is always 1.
        row.push(1);
        triangle.push(row);
    }
    return triangle;
};