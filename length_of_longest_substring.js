/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let maxLength = 0
    const hash = {}

    for (let right = 0; right < s.length; right++) {
        let rightLetter = s[right]
        while (hash[rightLetter]) {
            let leftLetter = s[left]
            delete hash[leftLetter]
            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)
        hash[rightLetter] = rightLetter
    }

    return maxLength
};

console.log(lengthOfLongestSubstring("abcabcbb"), "Expected 3")
console.log(lengthOfLongestSubstring("bbbbb"), "Expected 1")
console.log(lengthOfLongestSubstring("pwwkew"), "Expected 3")