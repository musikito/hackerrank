/*
You are given an array of integers of size N.
You need to print the sum of the elements in the array, 
keeping in mind that some of those integers may be quite large.
*/

function aVeryBigSum(ar) {
	var sum = ar.reduce((a, b) => Number(a) + Number(b), 0);
	return sum
}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
