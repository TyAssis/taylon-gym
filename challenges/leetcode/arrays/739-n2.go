// It does not pass on LeetCode. Check 739.go
// https://leetcode.com/problems/daily-temperatures/

package main

func dailyTemperaturesN2(temperatures []int) []int {
	answer := make([]int, len(temperatures))
	for i := 0; i < len(temperatures); i++ {
		answer[i] = 0
		for j := i; j < len(temperatures); j++ {
			if temperatures[j] > temperatures[i] {
				answer[i] = j - i
				break
			}
		}
	}
	return answer
}
