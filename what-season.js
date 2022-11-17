

//  * @param {Date | FakeDate} date real or fake date
//  * @returns {String} time of the year

function getSeason(date) {    
    if (date === undefined) {
        return 'Unable to determine the time of year!'
    }
    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');     
    let mounth = new Date(date).getMonth();
    switch (mounth) {
            case 0:
            case 1:
            case 11:
            return'winter';            
            case 2:
            case 3:
            case 4:
                return'spring';             
            case 5:
            case 6:
            case 7:
               return'summer';            
            default:
               return'autumn';
    };
};




//  * @example
console.log(getSeason(new Date()));
// console.log(getSeason(new Date(2020, 03, 31)));  // => 'spring'
// console.log(getSeason(new Date(2020, 06, 31)));
// console.log(getSeason(new Date(2020, 09, 31)));


// spring, summer, autumn (fall), winter