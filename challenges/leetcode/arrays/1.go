// https://leetcode.com/problems/two-sum/
package main

func twoSum(nums []int, target int) []int {
	hash := make(map[int]int)
	for i, v := range nums {
		if value, ok := hash[v]; ok {
			return []int{value, i}
		}
		compl := target - v
		hash[compl] = i
	}

	return []int{}
}
