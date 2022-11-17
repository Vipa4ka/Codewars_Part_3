
function solution(word) {

    const words = word.filter(a => a.length > 1);   

    const fistLast = words.map(e => {
        return e[0] + e.slice(-1);
    });
    const notRepitElArray = deleteRepitEl(fistLast); 
    const first = notRepitElArray.map(e => {
        return e[0];
    });    
    const last = notRepitElArray.map(e => {
        return e.slice(-1)
    });

    // console.log('fistLast', fistLast);
    // console.log("notRepitElArray", notRepitElArray);
    // console.log('first', first);
    // console.log('last', last);

    const sum = first.concat(last)
    // console.log(sum.length);
    
    

    if (first.sort().join('') == last.sort().join('') && sum.length>4) {
        return false
    }
    else {        
        findEl(last, first);
        findEl(first, last);

        
        // console.log(sum.length);
        
        if (sum.length < 5) {
            return true
        } 
        return first.sort().join('') == last.sort().join('')   
    //     console.log('first', first);
    // console.log('last', last);
     }  
        
              
    
 
}
function deleteRepitEl(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}


function findEl(a, b) {
        // console.log(a);
        // console.log(b);
        
        a.map((item, ind, arr) => {
            // console.log(b);
            // console.log(item);
            if (!b.includes(item) && a.length > 2) {
                arr.splice(ind, 1);
            }
            // } else if (b.includes(item)) {
            //     arr.splice(ind, 1);
            //     a.splice(ind, 1);
            // }
        })
    } 

console.log(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]));    // true)

 
console.log(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]));  //, false)
 

console.log(solution(["screen", "desire", "theater", "excess", "night"]));  ///, true)

console.log(solution(["engine", "endure", "elite", "excess"]));   ///, true)

console.log(solution(["east", "e", "e", "t", "t", "e", "time"]));   //// true)
 
console.log(solution(["no", "dog", "on", "good"]));   ///   , false)