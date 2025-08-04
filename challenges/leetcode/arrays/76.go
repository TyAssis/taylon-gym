package main

import (
	"unicode/utf8"
)

func minWindow(s string, t string) string {
  end := 0
  begin := 0
  minLen, startIndex := int(^uint(0) >> 1), 0
  counter := len(t)
  hash := make(map[rune]int)

  for _, c := range t {
    hash[c]++
  }

  for end < len(s) {
      if (len(t) > len(s)) {
        return ""
      }
      r, size := utf8.DecodeRuneInString(s[end:])
      if hash[r] > 0  {
          counter--
      }
      hash[r]--
      end += size

      for counter == 0 {
        if (end - begin < minLen) {
          startIndex = begin
          minLen = end - begin
        }

        r, size := utf8.DecodeRuneInString(s[begin:])
        if hash[r] == 0 {
          counter++
        }
        hash[r]++
        begin += size
      }
  }

  if minLen == int(^uint(0)>>1) {
    return ""
  }

  return s[startIndex:startIndex+minLen]
}
