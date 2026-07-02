/**
 * Topic: Arrays
 * Technique: Transverse from right | Monotonic stack
 * Problem: Number of Visible People in a Queue
 * https://www.youtube.com/watch?v=nzRG4dV4F_8
 **/

var canSeePersonsCount = function(heights) {
  const answer = [];
  // monotonic decreasing stack
  const stack = [];
  
  for (let i = heights.length - 1; i >= 0; i--) {
    let visible = 0;
    while (stack[stack.length - 1] < heights[i]) {
      stack.pop();
      visible++
    }

    // The horizon is reached, I'm not higher than it to pop it. Count it.
    if (stack.length > 0) {
      visible++;
    }

    answer[i] = visible;
    stack.push(heights[i])
  } 

  return answer;
}

console.log(canSeePersonsCount([10,6,8,5,11,9]))