function toWeirdCase(string) {    
    let arr = string.split(' ').map(a => a.split('')).map(s =>
        s.map((p, l) => l % 2 === 0 ? p.toUpperCase() : p.toLowerCase()
        )
    );  
     let result =arr.map(e=>e.join(''))
    
return result.join(' ')
}

// (toWeirdCase('This is a test'));  // ''ThIs Is A TeSt');');
console.log(toWeirdCase('This is a test'));  // 'ThIs');
// console.log(toWeirdCase( "Weird string case" )); // "WeIrD StRiNg CaSe");





// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string
// with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero - ith index is even, therefore that character should be upper cased
// and you need to start over for each word.
// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words.Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


// for (i = 0; i < string.length; i++){
    //     console.log([string[i]]);
        
    // }


    // for (let i = 0; i < string.length; i++){
    //     i % 2 === 0 ? arr.push(string[i].toUpperCase()) : arr.push(string[i].toLowerCase())        
    // }

    // console.log(arr);