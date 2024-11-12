/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    // desired time complexity was O(log(m + n)) but was very complicated; below is O(m + n)
    // it is not necessary to create the merged array since you just use the pointers

    const n = nums1.length + nums2.length
    const isEven = n % 2 === 0
    const target1 = Math.floor(n / 2)
    const target2 = target1 - 1
    let p1 = 0
    let p2 = 0
    const merged = []
    

    while(p1 < nums1.length || p2 < nums2.length) {
        if (nums1[p1] <= nums2[p2] || p2 === nums2.length) {
            merged.push(nums1[p1])
            p1++
        } else {
            merged.push(nums2[p2])
            p2++
        }

        if (merged.length - 1 === target1) {
            if (isEven) {
                return (merged[target1] + merged[target2]) / 2
            } else {
                return merged[target1]
            }
        }
    }
};

