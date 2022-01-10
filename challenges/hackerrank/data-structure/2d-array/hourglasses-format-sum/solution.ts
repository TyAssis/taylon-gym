function findHourGlassByIndex(arr: Array<Array<number>>, x: number, y: number): Array<number> {
  const xLimit = x + 2;
  const yLimit = y + 2;

  if (arr[xLimit] == undefined) return null;
  if (arr[xLimit][yLimit] == undefined) return null;
  
  const excludedIndexes: Array<Array<number>> = [[x + 1, y], [x + 1, y + 2]];
  
  const hourglass = [];

  for (let xIndex = x; xIndex <= xLimit; xIndex++) {
    for (let yIndex = y; yIndex <= yLimit; yIndex++) {
      if (!excludedIndexes.find(([exX, exY]) => (exX === xIndex) && (exY === yIndex))) {
        hourglass.push(arr[xIndex][yIndex]);        
      }
    }
  }
  
  return hourglass;
}

function hourglassSum(arr: number[][]): number {
    // Write your code here
    const hourglasses = [];
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr[x].length; y++) {
        const hourglass = findHourGlassByIndex(arr, x, y);
        if (hourglass) {
          hourglasses.push(hourglass);        
        }
      }
    }
    
    const sums = hourglasses.map(hourglassToSum => hourglassToSum.reduce((sum, curr) => sum += curr, 0));
    return sums.reduce((maxSum, currentSum) => {
      return Math.max(maxSum, currentSum);
    });
}