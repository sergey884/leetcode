class Solution:
  def simplifyPath(self, path: str) -> str:
    stack = []
    for item in path.split('/'):
      if item == '..':
        if stack:
          stack.pop()
      elif item and item != '.':
        stack.append(item)

    return '/' + '/'.join(stack)


solution = Solution()
print('simplifyPath: ', solution.simplifyPath('/home/')) # /home
