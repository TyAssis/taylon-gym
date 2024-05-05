package sort

type MinHeap struct {
  slice []int
}

func (heap *MinHeap) Insert(num int) {
  heap.slice = append(heap.slice, num) 
  heap.heapifyUp(len(heap.slice)-1)
}

func (heap *MinHeap) Extract() int {
  minValue := heap.slice[0]
  heap.slice[0] = heap.slice[len(heap.slice)-1]
  heap.slice = heap.slice[:len(heap.slice)-1]
  heap.heapifyDown(0)
  return minValue
}

func (heap *MinHeap) heapifyUp(index int) {
  parent := heap.getParent(index)
  if (heap.slice[index] > heap.slice[parent]) {
    return
  }
  heap.slice[index], heap.slice[parent] = heap.slice[parent], heap.slice[index]
  heap.heapifyUp(parent)
}

func (heap *MinHeap) heapifyDown(index int) {
  leftIndex := heap.getLeft(index) 
  rightIndex := heap.getRight(index) 
  var childIndexToCompare int

  if (leftIndex < len(heap.slice)-1) {
    if (heap.slice[leftIndex] < heap.slice[rightIndex]) {
      childIndexToCompare = leftIndex 
    } else {
      childIndexToCompare = rightIndex
    }
    if (heap.slice[index] < heap.slice[childIndexToCompare]) {
      return
    }
    heap.slice[index], heap.slice[childIndexToCompare] = heap.slice[childIndexToCompare], heap.slice[index] 
    heap.heapifyDown(childIndexToCompare)
  }
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
