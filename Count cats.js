
let n = 0;
 
// function countCats(arr) {
//     let mas = arr.join('').split('');

//     for (let i of mas) {
//         if (i === '^') {
//           n+=1
//         }
//     }
//  if (n === 0) {
//     return 0
//   } else {
//     return n/2;
//   }
// }
function countCats(matrix) {
    return  matrix.flat().filter(i => i === '^^').length;        
}

console.log(countCats([  [0, 1, '^^'], [0, '^^', 2],['^^', 1, 2]]));    // => 3
console.log(countCats([  [0, 1], [0,2],[ 1, 2]])); 
   