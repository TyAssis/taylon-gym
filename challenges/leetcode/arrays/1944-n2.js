/**
 * Topic: Arrays
 * Technique: Transverse from right
 * Problem: Number of Visible People in a Queue
 **/

var canSeePersonsCount = function(heights) {
 const answer = [];

 for (let i = 0; i < heights.length; i++) {
    let visible = 0;
    let j = i+1;
    if (j < heights.length) {
      visible++;
      let maxHeight = heights[j];
      while (heights[j] < heights[i] && j < heights.length) {
        if (heights[j] > maxHeight) {
          visible++;
          maxHeight = heights[j]
        }
        j++;
      }
      if (heights[j] > heights[i] && j != i+1) {
        visible++;
      }
      answer.push(visible);
    } else {
      answer.push(visible);
    }
  }

  return answer;
}

console.log(canSeePersonsCount([10,6,8,5,11,9]));