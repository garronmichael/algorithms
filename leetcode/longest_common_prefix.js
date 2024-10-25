/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = ""

    for (let i = 0; i < strs[0].length; i++) {
        output += strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            let curPrefix = strs[j].slice(0, output.length)
            if (output !== curPrefix) {
                return output.slice(0, -1)
            }
        }
    }

    return output
};