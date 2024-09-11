/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let output = []
    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    if (digits.length === 0) return output

    function recurse(cur, idx) {

        if (cur.length === digits.length) {
            output.push(cur.join(''))
            return
        }

        let possibleLetters = letters[digits[idx]]

        for (let letter of possibleLetters) {
            cur.push(letter)
            recurse(cur, idx + 1)
            cur.pop()
        }
    }

    recurse([], 0)

    return output
};