class Solution:
    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:
        cars = sorted(zip(position, speed))
        times = [(target - p) / s for p, s in cars]
        fleets = 0
        while len(times) > 1:
            lead = times.pop()
            if lead < times[-1]:
                fleets += 1
            else:
                times[-1] = lead

        return fleets + len(times)



solution = Solution()
print(solution.carFleet(10, [1, 0, 3, 5], [4, 2, 3, 2]))