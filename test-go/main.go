// https://leetcode.com/problems/merge-intervals/
package main

import (
	"fmt"
	"sort"
)

func mergeOverlapping(slc [][]int, first int, last int) [][]int {
	if last == first {
		return slc
	}

	if slc[first][1] >= slc[last][0] {
		var newLast int
		if slc[last][1] > slc[first][1] {
			newLast = slc[last][1]
		} else {
			newLast = slc[first][1]
		}
		slc[first] = []int{slc[first][0], newLast}
		slc = append(slc[:first+1], slc[first+2:]...)
		return slc
	}

	slc = mergeOverlapping(slc, first, ((last-first)/2)+first)
	slc = mergeOverlapping(slc, ((last-first)/2)+first+1, last)

	for i, _ := range slc {
		slc = mergeOverlapping(slc, i, i+1)
	}
	return slc
}

func merge(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i, j int) bool { return intervals[i][0] < intervals[j][0] })
	return mergeOverlapping(intervals, 0, len(intervals)-1)
}

func main() {
	fmt.Println(merge([][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}}))
}
