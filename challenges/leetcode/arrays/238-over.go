// https://leetcode.com/problems/product-of-array-except-self/description/
package main

func times(nums []int) *int {
	if len(nums) == 0 {
		return nil
	}
	product := 1
	for _, v := range nums {
		product *= v
	}
	return &product
}

func productExceptSelfOver(nums []int) []int {
	const PREFIX, SUFFIX = 0, 1
	products := make([][]*int, len(nums))
	answers := make([]int, len(nums))

	for i := range products {
		products[i] = make([]*int, 2)
	}

	for i, _ := range nums {
		if i-1 >= 0 {
			if products[i-1][PREFIX] != nil {
				products[i][PREFIX] = new(int)
				*products[i][PREFIX] = *products[i-1][PREFIX] * nums[i-1]
			} else {
				products[i][PREFIX] = times(nums[:i])
			}
		}
	}

	for i, _ := range nums {
		idx := len(nums) - 1 + i
		if idx+1 <= len(nums)-1 {
			if products[idx+1][SUFFIX] != nil {
				products[idx][SUFFIX] = new(int)
				*products[idx][SUFFIX] = *products[idx+1][SUFFIX] * nums[idx+1]
			} else {
				products[idx][SUFFIX] = times(nums[idx+1:])
			}
		}
	}

	for i, _ := range nums {
		answers[i] = 1
		if products[i][PREFIX] != nil {
			answers[i] *= *products[i][PREFIX]
		}
		if products[i][SUFFIX] != nil {
			answers[i] *= *products[i][SUFFIX]
		}
	}

	return answers
}
