package sort

// import "fmt"

func InsertionSort(unsorted []int) []int {
  sorted := make([]int, len(unsorted))
  copy(sorted, unsorted);

  for i := 0; i < len(sorted); i++ {
    target := sorted[i]
    j := i - 1
    for j >= 0 && sorted[j] > target {
      sorted[j + 1] = sorted[j]
      j--
    }
    sorted[j + 1] = target
  }

  return sorted
}

