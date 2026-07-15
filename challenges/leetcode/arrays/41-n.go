// https://leetcode.com/problems/first-missing-positive/description/

package main

import "sort"

func firstMissingPositiveN(nums []int) int {
	sort.Ints(nums) // n * log n sorting breaks the limits of the problem

	ans := 1
	for i, v := range nums {
		if v == ans {
			nums[i] = -1
			ans++
		}
	}

	return ans
}
