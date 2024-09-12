/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    // wrong answer but reviewed twoSum and threeSum
    // added correct answers below but they were pretty confusing IMO
    let output = []

    function recurse(path, total) {

        if (path.length === 4 && total === target) {
            output.push(path.slice())
            return
        }

        if (path.length > 4) return

        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i])
            total += nums[i]
            recurse(path, total)
            path.pop()
            total -= nums[i]
        }

    }

    recurse([], 0)

    return output

    // correct answer using two pointers

    // var fourSum = function (nums, target) {
    //     nums.sort((a, b) => a - b);
    //     return kSum(nums, target, 0, 4);
    // };
    // function kSum(nums, target, start, k) {
    //     let res = [];
    //     // If we have run out of numbers to add, return res.
    //     if (start === nums.length) {
    //         return res;
    //     }
    //     // There are k remaining values to add to the sum. The
    //     // average of these values is at least target / k.
    //     let average_value = target / k;
    //     // We cannot obtain a sum of target if the smallest value
    //     // in nums is greater than target / k or if the largest
    //     // value in nums is smaller than target / k.
    //     if (nums[start] > average_value || average_value > nums[nums.length - 1]) {
    //         return res;
    //     }
    //     if (k === 2) {
    //         return twoSum(nums, target, start);
    //     }
    //     for (let i = start; i < nums.length; i++) {
    //         if (i === start || nums[i - 1] !== nums[i]) {
    //             for (let subset of kSum(nums, target - nums[i], i + 1, k - 1)) {
    //                 res.push([nums[i], ...subset]);
    //             }
    //         }
    //     }
    //     return res;
    // }
    // function twoSum(nums, target, start) {
    //     let res = [];
    //     let lo = start,
    //         hi = nums.length - 1;
    //     while (lo < hi) {
    //         let curr_sum = nums[lo] + nums[hi];
    //         if (curr_sum < target || (lo > start && nums[lo] === nums[lo - 1])) {
    //             ++lo;
    //         } else if (
    //             curr_sum > target ||
    //             (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
    //         ) {
    //             --hi;
    //         } else {
    //             res.push([nums[lo++], nums[hi--]]);
    //         }
    //     }
    //     return res;
    // }

    // correct answer using a hash
    // const fourSum = function (nums, target) {
    //     function twoSum(start, target) {
    //         let res = [];
    //         let s = new Set();
    //         for (let i = start; i < nums.length; i++) {
    //             if (res.length == 0 || res[res.length - 1][1] != nums[i]) {
    //                 if (s.has(target - nums[i])) {
    //                     res.push([target - nums[i], nums[i]]);
    //                 }
    //             }
    //             s.add(nums[i]);
    //         }
    //         return res;
    //     }
    //     function kSum(start, target, k) {
    //         let res = [];
    //         // If we have run out of numbers to add, return res.
    //         if (start === nums.length) {
    //             return res;
    //         }
    //         // There are k remaining values to add to the sum. The
    //         // average of these values is at least target / k.
    //         let averageValue = Math.floor(target / k);
    //         // We cannot obtain a sum of target if the smallest value
    //         // in nums is greater than target / k or if the largest
    //         // value in nums is smaller than target / k.
    //         if (
    //             nums[start] > averageValue ||
    //             averageValue > nums[nums.length - 1]
    //         ) {
    //             return res;
    //         }
    //         if (k === 2) {
    //             return twoSum(start, target);
    //         }
    //         for (let i = start; i < nums.length; i++) {
    //             if (i === start || nums[i - 1] !== nums[i]) {
    //                 kSum(i + 1, target - nums[i], k - 1).forEach((set) => {
    //                     res.push([nums[i]].concat(set));
    //                 });
    //             }
    //         }
    //         return res;
    //     }
    //     nums.sort((a, b) => a - b);
    //     return kSum(0, target, 4);
    // };
};