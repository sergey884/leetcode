# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger:
#    def __init__(self, value=None):
#        """
#        If value is not specified, initializes an empty list.
#        Otherwise initializes a single integer equal to value.
#        """
#
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def add(self, elem):
#        """
#        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
#        :rtype void
#        """
#
#    def setInteger(self, value):
#        """
#        Set this NestedInteger to hold a single integer equal to value.
#        :rtype void
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        ""
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """

class Solution:
  def depthSumInverse(self, nestedList) -> int:
    def getMaxDepth(nestedList):
      maxDepth = 1
      for item in nestedList:
        if not item.isInteger() and len(item.getList()) > 0:
          maxDepth = max(maxDepth, 1 + getMaxDepth(item.getList()))
      
      return maxDepth
    
    def sumDepthNestedList(nestedList, depth):
      sum = 0
      for item in nestedList:
        if item.isInteger():
          sum += item.getInteger() * depth
        else:
          sum += sumDepthNestedList(item.getList(), depth - 1)
      
      return sum
    
    maxDepth = getMaxDepth(nestedList)
      
    return sumDepthNestedList(nestedList, maxDepth)


nestedList = [[1,1],2,[1,1]]
solution = Solution()
print('depthSumInverse: ', solution.depthSumInverse(nestedList))
