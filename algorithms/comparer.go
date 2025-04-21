package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/tyassis/taylon-gym/algorithms/heap_sort"
	"github.com/tyassis/taylon-gym/algorithms/merge_sort"
	"github.com/tyassis/taylon-gym/algorithms/quick_sort"
	"github.com/tyassis/taylon-gym/algorithms/quick_sort_left"
	"github.com/tyassis/taylon-gym/algorithms/shell_short"
)

func main() {
  n := 100000
	values := make([]int, n)
	for i := 0; i < n; i++ {
		values[i] = rand.Intn(200000)
	}

  heap := &heapsort.MinHeap{Slice: values}
  init := time.Now()
  heap.Sort()
  duration := time.Since(init)

  fmt.Println("HeapSort: ", duration)

  init = time.Now()
  mergesort.MergeSort(values)
  duration = time.Since(init)

  fmt.Println("MergeSort: ", duration)

  init = time.Now()
  quicksort.QuickSort(values)
  duration = time.Since(init)

  fmt.Println("QuickSort pivot (left + right / 2 )", duration)

  init = time.Now()
  quicksortleft.QuickSort(values)
  duration = time.Since(init)

  fmt.Println("QuickSort pivot left", duration)

  h := 4
  init = time.Now()
  shellsort.ShellSort(h, values)
  duration = time.Since(init)

  fmt.Println("Shell Sort h = 4", duration)

  h = len(values) / 2
  init = time.Now()
  shellsort.ShellSort(h, values)
  duration = time.Since(init)

  fmt.Println("Shell Sort h = n/2", duration)
}
