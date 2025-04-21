package insertion_sort

import "testing"

type testInput struct {
  arg1, expected []int
}

var testInputs = []testInput{
  testInput{
    []int{1002, 101, 5, 91, 2, 203, 7, 6, 20, 9, 32, 501, 19230, 4023},
    []int{2, 5, 6, 7, 9, 20, 32, 91, 101, 203, 501, 1002, 4023, 19230},
  },
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


func TestInsertionSort(t *testing.T)  {
  for _, test := range testInputs {
    if result := InsertionSort(test.arg1); slicesEqual(result, test.expected) != true {
      t.Errorf("got %v, wanted %v", result, test.expected)
    }
  }
}
