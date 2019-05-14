/**
 * Write a function or functions that console.logs the ratios for positive, negative, and zero numbers in that order
 * @param {array of numbers} arr 
 * This is quite simple problem. 
 * All we need to do is count the number of positives, negatives, and zeros. I
 * n order to traverse the array, we’ll use the map function.
 */
function plusMinus(arr) {
    let positives = 0, negatives = 0, zeros = 0;
    const len = arr.length || 0;
     
    if (len > 0 && len <= 100) {
         arr.map((elem, key) => {
              if (elem > 0) {
                   positives++;
              } else if (elem < 0) {
                   negatives++; 
              } else {
                   zeros++;
              }
                 
              return elem; 
         }); 
    } 
    
    console.log((positives / len) || 0);
    console.log((negatives / len) || 0);
    console.log((zeros / len) || 0);      
}