/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var zigZagConvert = function(s, numRows) {

    // after seeing solution
    let output = []
    let row = 0
    let step = 1

    if (numRows === 1 && numRows > s.length) return s

    // create equal num arrays as rows
    for (let i = 0; i < numRows; i++) {
        output.push([])
    }

    for (let i = 0; i < s.length; i++) {
        // add the current letter to current row
        output[row].push(s[i])
        // increment the row
        row += step

        if (row === 0 || row === numRows - 1) {
            step = -step
        }
    }

    // combine arrays and return
    return output.flat().join("")


    // wrong answer
    // const hash = {}
    // let count = 0
    // let output = []
    // let zig = true

    // if (numRows === 1) return s

    // // create equal num arrays as rows
    // while (count < numRows) {
    //     hash[count] = []
    //     count++
    // }

    // count = 0

    // // for each letters
    // for (let i = 0; i < s.length; i++) {
    //     let letter = s[i]
    //     let row

    //     if (count === numRows) {
    //         zig = false
    //         count = count - 2
    //     } else if (count === 0) {
    //         zig = true
    //     }

    //     if (zig) {
    //         row = hash[count]
    //         count++ 

    //     } else {
    //         row = hash[count]
    //         count--
    //     }


    //     // add to the row
    //     row.push(letter)
    // }

    // // combine arrays and return
    // return Object.values(hash).flat().join("")
};