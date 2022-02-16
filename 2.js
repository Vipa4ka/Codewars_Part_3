var Alphabet = {
  BINARY:        '01', //2
  OCTAL:         '01234567',  //8
  DECIMAL:       '0123456789',  //10
  HEXA_DECIMAL:  '0123456789abcdef', //16
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz', //26
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ', //26
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', // 52
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'  //62
};

function convert(input, source, target) {
    let a = input.split(''); 
    let pp = [];
    let n = [];
    if (source === target) {
         result = input;
    } else {
        let f = 0;
        for (let i = 1; i <= a.length; i++) {
            let d = source.indexOf(a[i - 1]); 
            let p = a.length - i; 
            let rez = d * Math.pow(source.length, p);  
            f += rez;    
        }
        red(f, target.length);
        function red(a, b) {
            if (Math.trunc(a / b) === 0) {
                pp.push(a)
            } else {
                pp.push(a % b)
                a = Math.trunc(a / b); 
                if (a >= b) {
                    red(a, b);
                } else {
                    pp.push(a)
                }}}    
        let reverse = pp.reverse(); 
        for (let j = 0; j < reverse.length; j++) {
            for (let i = 0; i < target.length; i++) {
                if (i == reverse[j]) {
                    n.push(target[i])
                }}}    
         return n.join('')
    }
    return result
};





// console.log(convertBase(1010, 10));

// convert('abcd', Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); //'320048'
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// convert("15", Alphabet.DECIMAL, Alphabet.BINARY);  // should return "1111"
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
// console.log(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER));
; // should return "bb"
console.log(convert("1337", Alphabet.DECIMAL, Alphabet.BINARY)); // should return "10100111001"
// console.log(convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL)); // should return "320048"
// console.log(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER)); // should return "SAME"

// function convert(input, source, target) {
//     let a = input.split(''); 
//     let pp = [];
//     let n = [];
//     if (source === target) {
//          result = input;
//     } else {
//         let f = 0;
//         for (let i = 1; i <= a.length; i++) {
//             let d = source.indexOf(a[i - 1]);  // индекс буквы в алфавите
//             let p = a.length - i; // степень для формулы
//             let rez = d * Math.pow(source.length, p)  // формула перевода каждой буквы
//             f += rez;  // плюсует всю сумму       
//         }
//         // console.log(f)  // вся сумма  297
//         // let l = Math.trunc(f / target.length) //целая; 18
//         // let o = f % target.length; //остаток   9
        
//         red(f, target.length);
//         function red(a, b) {
//             // console.log(a)       // полная сумма
//             // console.log(b)      // длина алфавита
//             // let qqq = a % b;    // остаток   
//             // console.log(qqq)
//             // let fff = Math.trunc(a / b); //целое число
//             if (Math.trunc(a / b) === 0) {
//                 pp.push(a)
//             } else {
//                 // console.log(fff)
//                 pp.push(a % b)
//                 // console.log(pp);
//                 a = Math.trunc(a / b);    // меняем еа след новую сумму            
//                 // console.log(a)
//                 if (a > b) {
//                     red(a, b);
//                 } else {
//                     pp.push(a)
//                     // console.log(pp)
//                 }
//             }
//         }   
    
//         let reverse = pp.reverse()
//         // let rdr=[target]
//         // let target = target
//         // console.log(rdr)

    
        
        
//         // console.log(reverse)
//         // console.log(n)
//         for (let j = 0; j < reverse.length; j++) {
//             for (let i = 0; i < target.length; i++) {
//                 //  console.log(i);
//                 //   console.log(reverse[j]);
//                 if (i == reverse[j]) {
//                     // console.log(i);
//                     // n.push(target[i].toLocaleUpperCase())
//                     n.push(target[i])
//                 }
//             }
//         }    
//          return n.join('')
//     }}

