package main

import "fmt"

func appendIfNotExists(slice []int, value int) []int {
    exists := make(map[int]struct{})
    for _, v := range slice {
        exists[v] = struct{}{}
    }

    if _, found := exists[value]; found {
        return slice
    }

    return append(slice, value)
}

func main() {
  twoSums([]int{3,2,4}, 6);
}

func twoSums(nums []int, target int) []int {
    indices := make([]int, 0)

    for i, num := range nums {
        for j, nun := range nums {
            if i == j {
                continue
            }
            if target == num + nun {
                fmt.Println(i, j)
                indices = appendIfNotExists(indices, i)
                indices = appendIfNotExists(indices, j)
            }
        }
    }
    fmt.Print(indices)
    return indices 
}
