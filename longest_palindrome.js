/*
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    // Wrong answer: does not work on long strings, hence the cache but that was not sufficient
    let output = s[0] || ""
    let hash = {}

    for (let i = 0; i < s.length; i++) {
        let word = s[i]
        for (let j = i + 1; j < s.length; j++) {
            let isPalindrome
            word += s[j]

            hash[word] = hash[word] || word.split("").reverse().join("") === word
            isPalindrome = hash[word]           

            if (isPalindrome && word.length > output.length) {
                output = word
            } 
        }
    }

    return output
};