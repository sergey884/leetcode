from typing import List

class Solution:
  def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
    seats.sort()
    students.sort()
    
    res = 0
    for i in range(len(students)):
      res += abs(students[i] - seats[i])
      
    return res
  
  
seats = [4, 1, 5, 9]
students = [1, 3, 2, 6]
solution = Solution()
print('minMovesToSeat: ', solution.minMovesToSeat(seats, students))
