// https://leetcode.com/problems/first-missing-positive/description/

package main

import "fmt"

func firstMissingPositive(nums []int) int {
	for i, v := range nums {
		if v < 1 || v > len(nums) {
			nums[i] = 0
		}
	}

	for _, v := range nums {
		absV := v
		if v < 0 {
			absV *= -1
		}
		correctIdx := absV - 1
		if correctIdx > -1 && correctIdx <= len(nums)-1 {
			if nums[correctIdx] > 0 {
				nums[correctIdx] = nums[correctIdx] * -1
			}
			if nums[correctIdx] == 0 {
				nums[correctIdx] = (len(nums) + 1) * -1
			}
		}
	}

	fmt.Println(nums)
	for i, _ := range nums {
		if nums[i] > -1 {
			return i + 1
		}
	}

	return len(nums) + 1
}
