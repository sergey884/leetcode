from typing import List
from collections import Counter

class Solution:
  def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
    count = {}
    
    for student in students:
      if student not in count:
        count[student] = 0
      count[student] += 1

    for i in range(len(sandwiches)):
      if count.get(sandwiches[i], 0) == 0:
        return len(sandwiches) - i
      count[sandwiches[i]] -= 1
      
    return 0
  
students = [1, 1]
sandwiches = [0, 1]
solution = Solution()
print('countStudents: ', solution.countStudents(students, sandwiches))
