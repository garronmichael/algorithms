/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    if (x < 2) {
        return x
    }
    
    let left = 2, right = Math.floor(x / 2), pivot, current
    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2)
        current =  pivot * pivot
        if (current > x) {
            right = pivot - 1
        } else if (current < x) {
            left = pivot + 1
        } else {
            return pivot
        }
    }

    return right
};

console.log(mySqrt(4), "Expected 2")
console.log(mySqrt(8), "Expected 2")
console.log(mySqrt(26), "Expected 5")