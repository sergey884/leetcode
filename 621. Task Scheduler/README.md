# [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/description/)

You are given an array of CPU `tasks`, each represented by letters A to Z, and a cooling time, `n`. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: **identical** tasks must be separated by at least `n` intervals due to cooling time.

​Return the minimum number of intervals required to complete all tasks.


### Example 1:
> Input: tasks = ["A","A","A","B","B","B"], n = 2
>
> Output: 8
>
> Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
>
> After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.


### Example 2:
> Input: tasks = ["A","C","A","B","D","B"], n = 1
>
> Output: 6
>
> Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
>
> With a cooling interval of 1, you can repeat a task after just one other task.


### Example 3:
> Input: tasks = ["A","A","A", "B","B","B"], n = 3
>
> Output: 10
>
> Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
>
> There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.


### Constraints:
- `1 <= tasks.length <=` $10^4$
- `tasks[i]` is an uppercase English letter.
- `0 <= n <= 100`


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const leastInterval = (tasks, n) => {
  const frequency = {};
  for (const task of tasks) {
    frequency[task] = frequency[task] + 1 || 1;
  }

  let maxVal = 0;
  let maxValCount = 0;

  for (const key in frequency) {
    if (frequency[key] > maxVal) {
      maxVal = frequency[key];
      maxValCount = 1;
    } else if (frequency[key] === maxVal) {
      maxValCount++;
    }
  }

  // Example ["A","A","A","B","B","C"], n = 2
  // A _ _ A _ _ A
  // Find the number of parts separated by A: partCount = count(A) - 1 = 2
  // Determine the number of empty slots: emptySlots = partCount * n = 4
  // Identify the number of tasks to be placed into those slots: availableTasks = tasks.length - count(A) = 3.
  // Determine the number of idles: idles = max(0, emptySlots - availableTasks) = 1
  // Determine the number of required slots: tasks.length + idles = 6 + 1 = 7

  const partCount = maxVal - 1;
  const partLength = n - (maxValCount - 1);
  const emptySlots = partCount * partLength;
  const availableTasks = tasks.length - maxVal * maxValCount;
  const idles = Math.max(0, emptySlots - availableTasks);

  return tasks.length + idles;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def leastInterval(self, tasks: List[str], n: int) -> int:
    count = Counter(tasks)
    maxHeap = [-cnt for cnt in count.values()]
    heapq.heapify(maxHeap)

    time = 0
    q = deque()
    while maxHeap or q:
      time += 1
      if maxHeap:
        cnt = 1 + heapq.heappop(maxHeap)
        if cnt:
          q.append([cnt, time + n])
      if q and q[0][1] == time:
        heapq.heappush(maxHeap, q.popleft()[0])

    return time
```