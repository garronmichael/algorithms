/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = []
    function recurse(array) {
        if (array.length === n * 2) {
            let s = array.join('')
            if (isValid(s)) {
                output.push(s)
                return
            }
            return
        }

        array.push('(')
        recurse(array.slice())
        array.pop()
        array.push(')')
        recurse(array.slice())
    }

    recurse([])
    
    return output
};

function isValid(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (count < 0) return false
        if (s[i] === '(') {
            count++
        } else {
            count--
        }
    }
    return count === 0
}