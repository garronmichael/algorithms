/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    // Wrong answer: almost all cases handled but does not handle multiple correct dictionary components but only one is viable
    // let t = ''
    
    // for (let i = 0; i < wordDict.length; i++) {
    //     let j = 0
    //     t = wordDict[i]

    //     if (s === t) {
    //         return true
    //     }

    //     while (j < wordDict.length) {
    //         let word = wordDict[j]

    //         if (s.includes(t + word)) {
    //             t += word
    //             j = 0
    //                 if (t === s) {
    //                     return true
    //                 }
    //         } else {
    //             j++
    //         }
    //     }
    // }

    // return false

    // Wrong answer: does not pass test cases where the necessary dictionary components are not the biggest ones. Ex: "abcd" | ["a","abc","b","cd"]
    // let left = 0
    // let right = s.length + 1
    
    // while (right > -1) {
    //     let slice = s.slice(left, right)

    //     for (let i = 0; i < wordDict.length; i++) {
    //         let word = wordDict[i]

    //         if (word === slice) {
    //             s = s.slice(right)
    //             left = 0
    //             right = s.length + 1

    //             break;
    //         }
    //     }

    //     right--
    // }

    // return s.length === 0
};