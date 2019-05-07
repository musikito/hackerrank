/*
Challenge:
Given an array of integers, find the sum of its elements.
It must return the sum of the array elements as an integer.
*/



/*
We can use a simple loop to iterate thru all elements and add each element’s value 
to a new variable sum and then we can return the sum as the result.
*/

/**
 * 
 * @param {array of integers} ar 
 */
function simpleArraySum(ar) {
   
    var sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}//end of function simpleArraySum

/**
 * We can use JavaScript reduce function and passing a custom functionadd()as argument. 
 * we use functions to avoid code redundancy.
 */
function add(a, b){
	return a + b;
}
function simpleArraySum(ar){
    var sum = ar.reduce(add, 0);

    return sum;

}//end of function simpleArraySum

/**
 * We can even make the code more usable, 
 * cleaner by using ES6 new feature fat arrow, 
 * this would be considered as the best practice and faster approach.
 */

function simpleArraySum(ar){
    var sum = ar.reduce((a,b) => (a + b), 0);

    return sum;


}//end of function simpleArraySum
