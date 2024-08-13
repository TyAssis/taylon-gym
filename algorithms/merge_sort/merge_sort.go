package sort

import (
	"fmt"
	"math"
)

func MergeSort(array []int) []int {
  fmt.Println(array)
  length := len(array)
  if length <= 1 {
    return array
  }

  var halfIndex int
  var rest int
  if rest = length % 2; rest == 0 {
    halfIndex = (length / 2) - 1
  } else {
    halfIndex = int(math.Floor(float64(length) / 2))
  }

  breakpoint := halfIndex + 1
  arrayLeftLimit := breakpoint
  arrayLeft := make([]int, arrayLeftLimit)
  arrayRightOffset := func() int {
    if rest == 0 {
      return halfIndex + 1
    }
    return halfIndex
  }() 
  arrayRight := make([]int, arrayRightOffset)

  copy(arrayLeft, array[:breakpoint])
  copy(arrayRight, array[breakpoint:])

  sortedArrayLeft := MergeSort(arrayLeft)
  sortedArrayRight := MergeSort(arrayRight)

  i, j := 0, 0

  var mergedArray []int
  for i < len(sortedArrayLeft) && j < len(sortedArrayRight) {
    if sortedArrayLeft[i] <= sortedArrayRight[j] {
      mergedArray = append(mergedArray, sortedArrayLeft[i])
      i++
    } else {
      mergedArray = append(mergedArray, sortedArrayRight[j])
      j++
    }
  }

  for i < len(sortedArrayLeft) {
    mergedArray = append(mergedArray, sortedArrayLeft[i])
    i++
  }
  for j < len(sortedArrayRight) {
    mergedArray = append(mergedArray, sortedArrayRight[j])
    j++
  }

  return mergedArray
}

