package quicksortleft

func quickSort(slice []int, left int, right int) []int {
  if (left >= right) {
    return slice
  }
  
  pivot := slice[left]
  pLeft := left
  pRight := right
  for (left <= right) {
    for (slice[left] < pivot) {
      left++
    }

    for (slice[right] > pivot) {
      right--
    }

    if (left <= right) {
      slice[left], slice[right] = slice[right], slice[left]
      left++
      right--
    }
  }

  partitionPoint := left
  quickSort(slice, pLeft, partitionPoint - 1)
  quickSort(slice, partitionPoint, pRight)

  return slice
}

func QuickSort(slice []int) []int {
  sliceToSort := make([]int, len(slice))
  copy(sliceToSort, slice)
  lastIndex := len(sliceToSort) - 1
  left := 0
  right := lastIndex
  return quickSort(sliceToSort, left, right)
}

