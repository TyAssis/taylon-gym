// https://leetcode.com/problems/product-of-array-except-self/description/
package main

func productExceptSelf(nums []int) []int {
	n := len(nums)
	prefix := make([]int, n)
	suffix := make([]int, n)
	ans := make([]int, n)

	// prefix[i] = product of nums[0..i-1]
	prefix[0] = 1
	for i := 1; i < n; i++ {
		prefix[i] = prefix[i-1] * nums[i-1]
	}

	// suffix[i] = product of nums[i+1..n-1]
	suffix[n-1] = 1
	for i := n - 2; i >= 0; i-- {
		suffix[i] = suffix[i+1] * nums[i+1]
	}

	// answer[i] = prefix[i] * suffix[i]
	for i := 0; i < n; i++ {
		ans[i] = prefix[i] * suffix[i]
	}

	return ans
}
