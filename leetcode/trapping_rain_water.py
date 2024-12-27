class Solution:
    def trap_rain_water(self, height):
        # two pointer, single pass
        maxLeft = 0
        maxRight = 0
        left = 0
        right = len(height) - 1
        area = 0

        while left < right:
            if height[left] < height[right]:
                if height[left] > maxLeft:
                    maxLeft = height[left]
                else:
                    area += maxLeft - height[left]
                left += 1
            else:
                if height[right] > maxRight:
                    maxRight = height[right]
                else:
                    area += maxRight - height[right]
                right -= 1

        return area

        # naive implementation (wrong)
        # left = 0
        # right = 0
        # n = len(height)
        # totalWater = 0
        # curWater = 0
        #
        # while height[left] == 0:
        #     left += 1
        #     right += 1
        #
        # while right < n:
        #     if height[right] >= height[left]:
        #         totalWater += curWater
        #         curWater = 0
        #         left = right
        #     curWater += height[left] - height[right]
        #     right += 1
        #
        # return totalWater

solution = Solution()
print(6 == solution.trap_rain_water([0,1,0,2,1,0,1,3,1,2]))