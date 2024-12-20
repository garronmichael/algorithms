/*
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
Example 2:

Input: citations = [1,3,1]
Output: 1
 

Constraints:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000
*/


/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let maxH = 0
    let left = 0
    let right = citations.length - 1

    citations = citations.sort((a, b) => a - b)

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let citation = citations[mid]
        let count = citations.length - mid
        if (count >= citation) {
            maxH = Math.max(citation, maxH)
            if (count === citation) break
        }
        if (count < citation) {
            right = mid - 1
            maxH = Math.max(count, maxH)
        }
        if (count > citation) left = mid + 1
    }


    return maxH
};