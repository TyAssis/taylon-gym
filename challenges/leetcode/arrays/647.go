// Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

package main

func countSubstrings(s string) int {
	count := 0
	for i := 0; i < len(s); i++ {
		count++
		for j := 0; j < 2; j++ {
			l, r := i-j, i+1
			for l >= 0 && r < len(s) && s[l] == s[r] {
				count++
				l--
				r++
			}
		}
	}
	return count
}
