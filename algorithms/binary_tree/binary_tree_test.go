package binary_tree

import "testing"

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
    []int{3, 2, 1, 4, 5, 6},
    []int{1, 2, 3, 4, 5, 6},
  },
  {
    []int{10, 31, 34, 13, 12, 3, 1, 2, 4, 5},
    []int{1, 2, 3, 4, 5, 10, 12, 13, 31, 34},
  },
  {
    []int{1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5},
    []int{1, 1, 1, 2, 3, 4, 1, 1, 3, 4, 2, 5},
  },
}


func TestBinarySearchInsertions(t *testing.T)  {
  var rootNode *Node 
  inputs :=  []int{3, 2, 1, 4, 5, 6}
  inOrdeTransversing :=  []int{1, 2, 3, 4, 5, 6}

  for _, input := range inputs {
    if rootNode == nil {
      rootNode = &Node{value: input}
      continue
    }
    rootNode.insert(input)
  }

  if result := rootNode.getNodesInOrder(); slicesEqual(result, inOrdeTransversing) != true {
    t.Errorf("got %v, wanted %v", result, inOrdeTransversing)
  }
}
