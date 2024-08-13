package binary_tree

import "fmt"

type Node struct {
  value int
  left *Node
  right *Node
}

func (n *Node) insert(num int) {
  if num < n.value {
    if (n.left != nil) {
      n.left.insert(num)
    } else { 
      n.left = &Node{value: num}
    }
  } else { 
    if (n.right != nil) {
      n.right.insert(num)
    } else {
      n.right = &Node{value: num}
    }
  }
}

func (n *Node) getNodesInOrder() []int {
  values := []int{}

  if n.left != nil {
    leftNodesValues := n.left.getNodesInOrder()
    for _, value := range leftNodesValues {
      values = append(values, value) 
    } 
  }

  values = append(values, n.value)

  if n.right != nil {
    rightNodesValues := n.right.getNodesInOrder()
    for _, value := range rightNodesValues {
      values = append(values, value) 
    } 
  }

  return values
}

func printTree(n *Node) {
  if n == nil {
    return
  }
  printTree(n.left)
  fmt.Printf("%d ", n.value)
  printTree(n.right)
}

func (n *Node) contains(num int) bool {
  if n.value == num {
    return true
  }
  if num < n.value && n.left != nil {
    return n.left.contains(num)
  }
  if num > n.value && n.right != nil {
    return n.right.contains(num)
  }
  return false
}

