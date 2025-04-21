package mergesort

func sortArray(nums []int) []int {
  mergeSort(nums, 0, len(nums)-1)
  return nums
}

func mergeSort(nums []int, low int, high int) {
  if low < high {
    mid := low + (high-low)/2
    mergeSort(nums, low, mid)
    mergeSort(nums, mid+1, high)
    L := make([]int, mid-low+1)
    R := make([]int, high-mid)
    copy(L, nums[low:mid+1])
    copy(R, nums[mid+1:high+1])
    i, j, k := 0, 0, low
    for i < len(L) && j < len(R) {
      if L[i] < R[j] {
        nums[k] = L[i]
        i++
      } else {
        nums[k] = R[j]
        j++
      }
      k++
    }
    for i < len(L) {
      nums[k] = L[i]
      i++
      k++
    }
    for j < len(R) {
      nums[k] = R[j]
      j++
      k++
    }
  }
}
