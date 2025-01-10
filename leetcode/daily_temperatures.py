class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        output = [0] * len(temperatures)
        stack = []

        for cur_day, cur_temp in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < cur_temp:
                    prev_day = stack.pop()
                    output[prev_day] = cur_day - prev_day
            stack.append(cur_day)

        return output


solution = Solution()
print(solution.dailyTemperatures([66, 69, 68, 67, 70, 69]) == [1, 3, 2, 1, 0, 0])
print(solution.dailyTemperatures([66, 69, 70]) == [1, 1, 0])