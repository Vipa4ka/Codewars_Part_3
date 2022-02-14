function bingo(ticket, win) {
    let arr = [];
    ticket.map(g => {
        let f = g[0].split('');
        let v = f.filter((o, p) => f.indexOf(o) === p);        
        v.map(o => {
            if (o.charCodeAt() === g[1]) {
                arr.push(o.charCodeAt());                
            };            
        })  
    })
    return arr.length >= win ? 'Winner!' : 'Loser!';      
}



console.log((bingo([['CQQ', 80], ['TH', 73], ['HVGH', 78], ['OVP', 82], ['TDA', 81]], 1))); //'Loser!'
// console.log((bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))); //'Loser!'
// console.log((bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))); //'Winner!'
// console.log((bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))); //'Loser!'
// console.log(bingo([['ZOHWA', 89], ['HFWAMH', 86], ['IH', 80], ['SKEMLOJ', 84], ['RQD', 82], ['FGUJU', 87], ['OANVPRV', 72], ['RXHLUPAP', 82], ['ZPTHR', 70], ['WE', 70]], 2));   // 'Loser!');




// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket.Each subarray has both a string and a number within it.
//  If the character code of any of the characters in the string matches the number, you get a mini win.
//  Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided(win). 
// If your total is more than or equal to(win), return 'Winner!'.Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.