var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

// function convert(input, source, target) {
//      console.log(input);
//     // console.log(source.length);
//     // console.log(target.length);

//     const parsed = parseInt(input, source.length); 
//     // const pars = parseInt(parsed, target.length);
//     console.log(parsed) 
//     if (target.length > 10) {
//         for ( let d in target)
//        console.log(target[d]) 
//     }
//     // else {
//     //     // console.log(parsed) 
//     // }



    
    
// }





function val(c)
{
    if (c >= '0'.charCodeAt() &&
        c <= '9'.charCodeAt())
        return (c - '0'.charCodeAt());
    else
        return (c - 'A'.charCodeAt() + 10);
}
function toDeci(str, b_ase)
{
    let len = str.length;     
    let power = 1;
    let num = 0;
    let i;
    for(i = len - 1; i >= 0; i--)
    {
        if (val(str[i].charCodeAt()) >= b_ase)
        {
            document.write("Invalid Number");
            return -1;
        }
 
        num += val(str[i].charCodeAt()) * power;
        power = power * b_ase;
    }
    console.log(num);
}
// Driver code
let str = "320048";
let b_ase = 16;
 
document.write("Decimal equivalent of "+
               str + " in base "+ b_ase +
               " is " + toDeci(str, b_ase));

// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); //'320048'


// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// convert("15", Alphabet.DECIMAL, Alphabet.BINARY);  // should return "1111"
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"