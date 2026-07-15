// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
package main

func maxProfit(prices []int) int {
	i := 0
	min := prices[0]
	max := prices[0]
	best := 0

	for i < len(prices) {
		if prices[i] < min {
			min = prices[i]
			max = 0
		}
		if prices[i] > max {
			max = prices[i]
			if best < max-min {
				best = max - min
			}
		}
		i++
	}

	return best
}
