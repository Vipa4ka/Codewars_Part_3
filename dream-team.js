function createDreamTeam(members) {
    let arr = [];
    if (members.length === 0) {
        return false;
    } else {
        for (let i = 0; i < members.length; i++) {
            if (typeof (members[i]) === 'string') {
                let name = members[i].trim().toUpperCase();
                arr.push(name.slice(0, 1));
            };      
        };
    return arr.sort().join('');
    };
};

    

//  * @example
//   console.log(createDreamTeam([]));
console.log(createDreamTeam(['Matt', 'Ann', ' dmitry', 'Max']));  //=> 'ADMM'
//  console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])); //  => 'LOO'
   
