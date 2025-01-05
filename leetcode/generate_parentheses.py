"""
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]


Constraints:

1 <= n <= 8
"""
class Solution:
    def generateParenthesis(self, n: int) :
        output = []

        def _backtrack(cur, num_open, num_close):
            if len(cur) == n * 2:
                output.append(cur)
                return

            if num_open == num_close:
                cur.append('(')
                _backtrack(cur[:], num_open + 1, num_close)

            elif num_open > num_close and num_open < n:
                cur.append('(')
                _backtrack(cur[:], num_open + 1, num_close)
                cur.pop()
                cur.append(')')
                _backtrack(cur[:], num_open, num_close + 1)

            elif num_open > num_close and num_open == n:
                cur.append(')')
                _backtrack(cur[:], num_open, num_close + 1)

            """
            Optimized solution conditionals
            if num_open < n:
                cur.append('(')
                _backtrack(cur[:], num_open + 1, num_close)
                cur.pop()
            if num_close < num_open:
                cur.append(')')
                _backtrack(cur[:], num_open, num_close + 1)
                cur.pop()
            """

        _backtrack(['('], 1, 0)

        return output

solution = Solution()
solution.generateParenthesis(3)


