function countSwaps(a) {
  // Write your code here
  let swap = true;
  let tally = 0;
  
  while (swap) {
    swap = false;
    let nextIndex = 0;

    for (let currentIndex = 0; currentIndex < a.length - 1; currentIndex++) {
      nextIndex = currentIndex + 1;
      if (a[currentIndex] > a[nextIndex]) {
        [a[currentIndex], a[nextIndex]] = [a[nextIndex], a[currentIndex]];
        swap = true;
        tally++;   
      }
    }  
  }

  console.log(`Array is sorted in ${tally} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);

  return;
}
