class Solution:
    def isValid(self, s: str) -> bool:
        hash = {
            '[': ']',
            '{': '}',
            '(': ')'
        }
        stack = []
        for p in s:
            if p in hash:
                stack.append(hash[p])
            elif stack:
                if p != stack.pop():
                    return False
            else:
                return False

        return len(stack) == 0


print(Solution().isValid('()'))