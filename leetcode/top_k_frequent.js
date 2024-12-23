/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.


Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hash = {}
    const buckets = Array.from({length: nums.length + 1}, () => [])
    let output = []

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }

    for (let num in hash) {
        let count = hash[num]
        buckets[count].push(parseInt(num))
    }

    for (let j = buckets.length - 1; j > -1; j--) {
        let bucket = buckets[j]
        output = output.concat(bucket)
        if (output.length === k) {
            break
        }
    }

    return output
};