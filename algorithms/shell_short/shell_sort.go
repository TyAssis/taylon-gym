package sort

func ShellSort(gap int, slice []int) []int {
  sorted := make([]int, len(slice))
  copy(sorted, slice)
  
  for gap > 0 {
    for i := gap; i < len(sorted); i++ {
      target := sorted[i]
      j := i - gap
      for j >= 0 && sorted[j] >= target {
        sorted[j + gap] = sorted[j]
        j-=gap
      }
      sorted[j + gap] = target
    }
    gap = gap / 2
  }

  return sorted
}

