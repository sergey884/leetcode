#include <vector>
#include <unordered_map>
#include <iostream>
using namespace std;

class Solution {
  public: 
  vector<int> twoSum(vector<int>& nums, int target) {
    std::unordered_map<int, int> num_map;

    for (int i = 0; i < nums.size(); i++) {
      int remaining_sum = target - nums[i];
      if (num_map.find(remaining_sum) != num_map.end()) {
        return { num_map[remaining_sum], i };
      } else {
        num_map[nums[i]] = i;
      }
    }

    return {};
  }
};

int main() {
  Solution s;
  vector<int> nums = {2, 7, 11, 15};
  int target = 9;
  vector<int> result = s.twoSum(nums, target);

  if (!result.empty()) {
    for (int i = 0; i < result.size(); i++) {
      cout << result[i] << " ";
    }
    cout << endl;
  }

  return 0;
}
