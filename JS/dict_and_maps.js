/**
 * Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. 
 * You will then be given an unknown number of names to query your phone book for. 
 * For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; 
 * if an entry for  is not found, print Not found instead.
 * @param {*} input 
 */


function processData(input) {
    _input_array = input.split('\n');
    var n = parseInt(_input_array[0]);
    var searchSize = _input_array.length - parseInt(n);
    var phoneBook = {};
    
    for(i = 1; i <= n; i++){
        var info = _input_array[i].split(' ');
        phoneBook[info[0]] = info[1];
    }
    
    for(y = 1; y < searchSize; y++){
        var name = _input_array[y + n];
        if(phoneBook.hasOwnProperty(name)){
            console.log(name + '=' + phoneBook[name]);  
        } else {
            console.log('Not found');
        }
    }
   
    
} 