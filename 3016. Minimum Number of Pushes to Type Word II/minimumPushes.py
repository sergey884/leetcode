class Solution:
  def minimumPushes(self, word: str) -> int:
    frequency = [0] * 26

    for i in range(len(word)):
      frequency[ord(word[i]) - ord('a')] += 1

    frequency.sort(reverse = True)
    print('frequency: ', frequency)

    totalPushes = 0
    for i in range(26):
      if frequency[i] == 0:
        break

      totalPushes += (i // 8 + 1) * frequency[i]

    return totalPushes


word = "xyzxyzxyzxyz"
solution = Solution()
print('minimumPushes: ', solution.minimumPushes(word))
