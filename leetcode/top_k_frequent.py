"""
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
"""
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # naive approach
        count = {}
        output = []
        for num in nums:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1

        sorted_count = sorted(count.items(), key=lambda x: x[1])

        while len(output) < k:
            output.append(sorted_count.pop()[0])

        return output

        # bucket sort
        count = {}
        bucket_list = [[] for value in range(len(nums))]
        output = []

        for num in nums:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1

        for num, freq in count.items():
            bucket_list[freq - 1].append(num)

        for i in range(len(bucket_list) - 1, -1, -1):
            if bucket_list[i]:
                for item in bucket_list[i]:
                    output.append(item)

        return output[:k]

