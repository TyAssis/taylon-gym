package heapsort

type MinHeap struct {
  Slice []int
}

func (heap *MinHeap) Insert(num int) {
  heap.Slice = append(heap.Slice, num) 
  heap.heapifyUp(len(heap.Slice)-1)
}

func (heap *MinHeap) Extract() int {
  minValue := heap.Slice[0]
  heap.Slice[0] = heap.Slice[len(heap.Slice)-1]
  heap.Slice = heap.Slice[:len(heap.Slice)-1]
  heap.heapifyDown(0)
  return minValue
}

func (heap *MinHeap) heapifyUp(index int) {
  parent := heap.getParent(index)
  if (heap.Slice[index] > heap.Slice[parent]) {
    return
  }
  heap.Slice[index], heap.Slice[parent] = heap.Slice[parent], heap.Slice[index]
  heap.heapifyUp(parent)
}

func (heap *MinHeap) heapifyDown(index int) {
  leftIndex := heap.getLeft(index) 
  rightIndex := heap.getRight(index) 
  var childIndexToCompare int

  if (leftIndex < len(heap.Slice)-1) {
    if (heap.Slice[leftIndex] < heap.Slice[rightIndex]) {
      childIndexToCompare = leftIndex 
    } else {
      childIndexToCompare = rightIndex
    }
    if (heap.Slice[index] < heap.Slice[childIndexToCompare]) {
      return
    }
    heap.Slice[index], heap.Slice[childIndexToCompare] = heap.Slice[childIndexToCompare], heap.Slice[index] 
    heap.heapifyDown(childIndexToCompare)
  }
}

func (heap *MinHeap) Sort() []int {
  toBeSortedHeap := &MinHeap{
    Slice: append([]int(nil), heap.Slice...),
  }
  sorted := make([]int, 0)
  for (len(toBeSortedHeap.Slice) > 0) {
    sorted = append(sorted, toBeSortedHeap.Extract())
  }
  return sorted
}

func (heap *MinHeap) getParent(index int) int {
  return (index - 1) / 2
}

func (heap *MinHeap) getLeft(index int) int {
  return (index * 2) + 1
}

func (heap *MinHeap) getRight(index int) int {
  return (index * 2) + 2
}
