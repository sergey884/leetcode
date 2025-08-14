/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  const charFrequency = {};
  let maxLength = 0;
  let maxCharCount = 0;
  let left = 0;

   for (let right = 0; right < s.length; right++) {
      if (!charFrequency[s[right]]) {
         charFrequency[s[right]] = 0;
      }
      charFrequency[s[right]]++;

      maxCharCount = Math.max(maxCharCount, charFrequency[s[right]]);

      const isValid = right - left + 1 - maxCharCount;
      if (isValid > k) {
         charFrequency[s[left]]--;
         left++;
      }

      maxLength= Math.max(maxLength, right - left + 1);
   }

   return maxLength;
};


const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s, k)); // 4
