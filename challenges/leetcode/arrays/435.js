/**
 * Topic: Arrays
 * Technique: Sorting to Solve
 * Problem: Non-overlapping Intervals
 */

/**
 * 
 A lógica está certa, mas meu algoritmo é n2
 pois estou usando splice que é n (reeordena o array) e pelo array (n)
 Eu também estava ordenando pelo começo do interval, não o fim. 
 Porém o que importa são as comparações do fim do último intervalo válido.
 Se eu ordeno pelo começo, pode ser que os finais dos intervalos não estejam em ordem crescente.
 */
var WRONG_eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let i = 0, count = 0;
  while (i < intervals.length - 1) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      count++;
      intervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return count;   
};

var eraseOverlapIntervals = function(intervals) {
    let res = 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let prev_end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (prev_end > intervals[i][0]) {
            res++;
        } else {
            prev_end = intervals[i][1];
        }
    }
    return res;    
};

console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]))