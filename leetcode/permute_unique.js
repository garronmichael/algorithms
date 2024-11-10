/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let output = []
    let hash = {}

    function backtrack(cur, idx) {
        if (cur.length === nums.length) {
            let s = cur.toString()
            if (!hash[s]) {
                hash[s] = s
                output.push([...cur])
            }

            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (!idx.includes(i)) {
                cur.push(nums[i])
                idx.push(i)
                backtrack(cur, idx)
                cur.pop()
                idx.pop()
            }
        }
    }

    backtrack([], [])

    return output
};