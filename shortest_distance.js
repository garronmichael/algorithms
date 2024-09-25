/*
Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

 

Example 1:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
Example 2:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
 

Constraints:

2 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] consists of lowercase English letters.
word1 and word2 are in wordsDict.
word1 != word2
*/

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {

    // brute force
    // let min = Number.MAX_VALUE

    // for (let i = 0; i < wordsDict.length; i++) {

    //     if (word1 === wordsDict[i]) {
    //         for (let j = 0; j < wordsDict.length; j++) {
    //             if (word2 === wordsDict[j]) {
    //                 min = Math.min(min, Math.abs(i - j))
    //             }
    //         }

    //     }
    // }

    // return min

    // one pass

    let min = wordsDict.length
    let idx1 = -1
    let idx2 = -1

    for (let i = 0; i < wordsDict.length; i++) {

        if (word1 === wordsDict[i]) idx1 = i
        if (word2 === wordsDict[i]) idx2 = i
        
        if (idx1 !== -1 && idx2 !== -1) min = Math.min(min, Math.abs(idx1 - idx2))
    }

    return min
};