/*
Given an array of strings wordsDict and two strings that already exist in the array word1 and word2, return the shortest distance between the occurrence of these two words in the list.

Note that word1 and word2 may be the same. It is guaranteed that they represent two individual words in the list.

 

Example 1:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
Example 2:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "makes"
Output: 3
 

Constraints:

1 <= wordsDict.length <= 105
1 <= wordsDict[i].length <= 10
wordsDict[i] consists of lowercase English letters.
word1 and word2 are in wordsDict.
*/

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    let idx1 = -1
    let idx2 = -1
    let min = wordsDict.length

    // a little messy
    for (let i = 0; i < wordsDict.length; i++) {
        if (word1 === wordsDict[i]) {
            if (word1 === word2 && idx1 > -1) {
                min = Math.min(min, Math.abs(idx1 - i))
            }
            idx1 = i
        }
        if (word2 === wordsDict[i]) idx2 = i
        if (idx1 > -1 && idx2 > -1 && word1 !== word2) {
            min = Math.min(min, Math.abs(idx1 - idx2))
        }     
    }

    return min
};