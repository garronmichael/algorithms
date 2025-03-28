/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    const output = []
    
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        let low = i + 1
        let high = nums.length - 1
        if (i > 0 && nums[i] === nums[i - 1]) continue

        if (nums[i] > 0) break

        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high]
            if (sum > 0) high--
            if (sum < 0) low++
            if (sum === 0) {
                output.push([nums[i], nums[low], nums[high]])
                low++
                high--
                while (nums[low - 1] === nums[low] && low < high) {
                    low++
                }
            }
        }
    }

    return output

    // Wrong answer: time limit exceeded
    // const output = []
    // const hash = {}

    // for (let i = 0; i < nums.length; i++) {

    //     for (let j = i + 1; j < nums.length; j++) {

    //         for (let k = j + 1; k < nums.length; k++) {

    //             let cur = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)

    //             if (nums[i] + nums[j] + nums[k] === 0 && !hash[cur.toString()]) {
    //                 output.push(cur)
    //                 hash[cur.toString()] = cur.toString()
    //             }
    //         }
    //     }
    // }
    
    // return output
};