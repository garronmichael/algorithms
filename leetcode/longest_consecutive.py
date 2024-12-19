"""
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
"""

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        # time out exception
        # longest = 1
        # seen = set()
        # min = None
        # max = None

        # if len(nums) < 2:
        #     return len(nums)

        # for i in range(len(nums)):
        #     seen.add(nums[i])
        #     min = nums[i] if min == None or nums[i] < min else min
        #     max = nums[i] if max == None or nums[i] > max else max

        # while min < max:
        #     if longest > len(seen) // 2:
        #         break

        #     cur_longest = 0
        #     while min in seen:
        #         cur_longest += 1
        #         min += 1
        #     longest = cur_longest if cur_longest > longest else longest
        #     min += 1

        # return longest

        # O(n)
        if len(nums) < 2:
            return len(nums)

        nums_set = set(nums)
        longest = 1
        for num in nums_set:
            if num - 1 not in nums_set:
                cur_longest = 0
                while num in nums_set:
                    cur_longest += 1
                    num += 1
                longest = max(cur_longest, longest)

        return longest



