// https://leetcode.com/problems/daily-temperatures/

package main

func dailyTemperatures(temperatures []int) []int {
	answer := make([]int, len(temperatures))
	stack := [][]int{}

	for i, t := range temperatures {
		for len(stack) > 0 && stack[len(stack)-1][1] < t {
			lastTemperature := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			answer[lastTemperature[0]] = i - lastTemperature[0]
		}
		stack = append(stack, []int{i, t})
	}

	return answer
}
