/**
 * 
 * @param {*} input 
 */

function processData(input) {
    var odd = '';
    var even = '';
    
    var inputs = input.split('\n');
    var length = parseInt(inputs[0]);
    var words = inputs.slice(1);

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if (j % 2) {
                even += words[i][j];
            } else {
                odd += words[i][j];
            }
        }
        
        console.log(odd + ' ' + even);
        odd = '';
        even = '';
    }
} 