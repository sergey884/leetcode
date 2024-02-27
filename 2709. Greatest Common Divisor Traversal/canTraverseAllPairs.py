class UnionFind:
  def __init__(self, n) -> None:
    self.par = [i for i in range(n)]
    self.size = [1] * n
    self.count = n

  def find(self, x):
    if self.par[x] != x:
      self.par[x] = self.find(self.par[x])
    return self.par[x]
  
  def union(self, x, y):
    px, py = self.find(x), self.find(y)
    if px == py:
      return
    
    if self.size[px] < self.size[py]:
      self.par[px] = py
      self.size[py] += self.size[px]
    else:
      self.par[py] = px
      self.size[px] += self.size[py]
    self.count -= 1

class Solution:
  def canTraverseAllPairs(self, nums: list[int]) -> bool:
    uf = UnionFind(len(nums))

    factorIndex = {}
    for i, n in enumerate(nums):
      f = 2
      while f * f <= n:
        print('N: ', f, n)
        if n % f == 0:
          if f in factorIndex:
            uf.union(i, factorIndex[f])
          else:
            factorIndex[f] = i
          while n % f == 0:
            n = n // f
        f += 1

      if n > 1:
        if n in factorIndex:
          uf.union(i, factorIndex[n])
        else:
          factorIndex[n] = i

    print('uf.count: ', uf.count)
    return uf.count == 1

solution = Solution()
nums = [3, 9, 5]
print("canTraverseAllPairs: ", solution.canTraverseAllPairs(nums))