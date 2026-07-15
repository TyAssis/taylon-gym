/**
 * Topic: Arrays
 * Technique: Precomputation
 * Problem: Split Array Largest Sum
 */

// COMEBACK

var splitArray = function(nums, k) {
  const largestSubArraySize = Math.ceil(nums.length / k);
  const subarraySizes = (nums.length - largestSubArraySize) / k - 1;
  let mininumSumOfSubarray = Number.NEGATIVE_INFINITY;
  let startLargestSubarrayIndex = 0;
  let initialSumIndex = 0;
  let endSumIndex = 0;
  for (let i = 0; i + largestSubArraySize < nums.length - 1; i += subarraySizes - 1) {
    initialSumIndex = i;
    if (i  ) {
      endSumIndex = initialSumIndex + largestSubArraySize;
    } else {
      endSumIndex = initialSumIndex + subarraySizes;
    }
    const sum = nums.slice(initialSumIndex, endSumIndex + 1).reduce((acc, curr, idx) => nums[idx] + acc, 0)
    if (sum < mininumSumOfSubarray) {
      mininumSumOfSubarray = sum;
    }
    startLargestSubarrayIndex += subarraySizes;
  }

  return sum;
};