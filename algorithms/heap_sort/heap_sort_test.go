package heapsort

import (
	"testing"
)

type testInput struct {
  arg1, expected []int
}

func slicesEqual(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}

var testInputs = []testInput{
  testInput{
    []int{2, 6, 8, 7, 10, 9, 10},
    []int{2, 3, 8, 6, 10, 9, 10, 7},
  },
  testInput{
    []int{2, 6, 8, 7, 10, 9, 10},
    []int{6, 7, 8, 10, 10, 9},
  },
  testInput{
    []int{2, 6, 8, 7, 10, 9, 10},
    []int{2, 6, 7, 8, 9, 10, 10},
  },
}


func TestHeapInsert(t *testing.T)  {
  heap := &MinHeap{testInputs[0].arg1} 
  heap.Insert(3)
  if slicesEqual(heap.Slice, testInputs[0].expected) != true {
    t.Errorf("got %v, wanted %v", heap.Slice, testInputs[0].expected)
  }
}

func TestHeapExtract(t *testing.T) {
  heap := &MinHeap{testInputs[1].arg1}
  heap.Extract()
  if slicesEqual(heap.Slice, testInputs[1].expected) != true {
    t.Errorf("got %v, wanted %v", heap.Slice, testInputs[1].expected) }
}

func TestHeapSort(t *testing.T) {
  heap := &MinHeap{testInputs[2].arg1}
  toBeSortedHeap := &MinHeap{
    Slice: append([]int(nil), heap.Slice...),
  }
  sorted := make([]int, 0)
  for (len(toBeSortedHeap.Slice) > 0) {
    sorted = append(sorted, toBeSortedHeap.Extract())
  }
  if slicesEqual(sorted, testInputs[2].expected) != true {
    t.Errorf("got %v, wanted %v", sorted, testInputs[2].expected) }
}

func TestHeapSortMethod(t *testing.T) {
  heap := &MinHeap{testInputs[2].arg1}
  toBeSortedHeap := &MinHeap{
    Slice: append([]int(nil), heap.Slice...),
  }
  sorted := toBeSortedHeap.Sort()
  if slicesEqual(sorted, testInputs[2].expected) != true {
    t.Errorf("got %v, wanted %v", sorted, testInputs[2].expected) }
}
