/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverseInteger = function(x) {
    // solved with method functions but idk if that was "allowed"
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)
    const isNegative = x < 0
    let reversedX = +Math.abs(x).toString().split('').reverse().join('')
    reversedX = isNegative ? reversedX * -1 : reversedX

    return reversedX < min || reversedX > max ? 0 : reversedX
};