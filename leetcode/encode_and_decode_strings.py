"""
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).



Example 1:

Input: dummy_input = ["Hello","World"]
Output: ["Hello","World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Example 2:

Input: dummy_input = [""]
Output: [""]


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] contains any possible characters out of 256 valid ASCII characters.


Follow up: Could you write a generalized algorithm to work on any possible set of characters?
"""
class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        # naive approach - use delimiter of sufficient complexity or non-ASCII
        # output = ""
        # first = True
        # for s in strs:
        #     if first:
        #         output += s
        #         first = False
        #     else:
        #         output += '101010100' + s

        # return output

        # use string length and a delimiter
        output = ""
        for s in strs:
            output += str(len(s)) + '/' + s

        return output

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings.
        """
        # naive approach - use delimiter of sufficient complexity or non-ASCII
        # return s.split('101010100')

        # use string length and a delimiter
        strs = []
        i = 0
        while i < len(s):
            delim = s.find('/', i)
            length = int(s[i:delim])
            cur_s = s[delim + 1: delim + 1 + length]
            strs.append(cur_s)
            i = delim + 1 + length
        return strs

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))