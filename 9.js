function rgb(r, g, b) {
    let f = [r, g, b]
    let i = [];    
    f.map(a => {
        if (a > 255) {
            a = 255;
        } else if (a < 0) {
            a = '00';        
        } else if (a < 16) {
            a ='0'+ a.toString(16);            
        }    
        i.push(a.toString(16));        
    })    
return i.join('').toUpperCase()    
}



// // rgb(173,255,47)
// (rgb(0, 0, -20))
// // (rgb(15,17,16))

   console.log(rgb(0,0,0)); // '000000')
   console.log(rgb(0, 0, -20)); //  '000000')
   console.log(rgb(6,263,259)); // 'FFFFFF')
   console.log(rgb(173,255,47)); // 'ADFF2F')  

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in
//  a hexadecimal representation being returned.Valid decimal values for RGB are 0 - 255. 
//  Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3