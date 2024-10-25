/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // solution 2 (same direction but more efficient)
    const hash = {}

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i]
        let sortedWord = word.split("").sort().join("")

        hash[sortedWord] = hash[sortedWord] || []
        hash[sortedWord].push(word)
    }

    return Object.values(hash)

    // solution 1 (breaks on long lists)
    // const hash = {}
    // const output = []

    // for (let i = 0; i < strs.length; i++) {
    //     let word = strs[i]
    //     let sortedWord = word.split("").sort().join("")
    //     let outputIndex

    //     if (hash[sortedWord] || hash[sortedWord] === 0) {
    //         outputIndex = hash[sortedWord]
    //     } else {
    //         outputIndex = Object.keys(hash).length
    //         hash[sortedWord] = outputIndex
    //     }

    //     output[outputIndex] = output[outputIndex] || []
    //     output[outputIndex].push(word)
    // }

    // return output
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), "Expected [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]")
console.log(groupAnagrams([""]), "Expected [[\"\"]]")
console.log(groupAnagrams(["a"]), "Expected [[\"a\"]]")