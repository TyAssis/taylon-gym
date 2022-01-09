function merge(leftArray, rightArray) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArray = [];
  
  while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex])
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex])
      rightIndex++;
    }
  }
 
  return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

function mergeSort(array) {
    if (array.length <= 1) {
      return array; 
    }

    const middleIndex = Math.floor(array.length / 2);
    
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, array.length);

    const sortedArray = merge(mergeSort(leftArray), mergeSort(rightArray));
    
    return sortedArray;
}

function maximumToys(prices, k) {
    // Write your code here
    // solving with merge sort
    const sortedPrices = mergeSort([...prices]);
    console.log(sortedPrices);
    
    const amount = k;
    let spent = 0;
    let toyIndex = 0;
    let boughtToys = 0;

    while ((spent < amount) && (toyIndex < sortedPrices.length)) {
      if (sortedPrices[toyIndex] <= (amount - spent)) {
        spent += sortedPrices[toyIndex];
        boughtToys++;
      }
      toyIndex++;
    }
    
    return boughtToys;
}