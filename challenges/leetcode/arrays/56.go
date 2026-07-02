// https://leetcode.com/problems/merge-intervals/
package main

import "sort"

func max(a int, b int) int {
	if a >= b {
		return a
	}
	return b
}

func merge(intervals [][]int) [][]int {
	const START, END = 0, 1
	result := make([][]int, 0)

	sort.Slice(intervals, func(i, j int) bool {
		return (intervals[i][START] < intervals[j][START]) || ((intervals[i][START] == intervals[j][START]) && (intervals[i][END] == intervals[j][END]))
	})

	for _, interval := range intervals {
		if len(result) == 0 || interval[START] > result[len(result)-1][END] {
			result = append(result, interval)
		} else {
			result[len(result)-1][END] = max(result[len(result)-1][END], interval[END])
		}
	}

	return result
}
