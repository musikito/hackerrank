/**
*Given five positive integers, find the minimum and maximum values that can be calculated by
*summing exactly four of the five integers.
 *Then print the respective minimum and maximum values as a single line of
 *two space-separated long integers.
*/
//take an array

function minMaxSum(arr){

//sort array
var sortArray = arr.sort(function(a,b){
	return a - b;
});

//add the lower values
var minSum = sortArray.slice(0,4).reduce(function(a,b){
	return a+b;
});

//add the higher values
var maxSum = sortArray.slice(1,5).reduce(function(a,b){
	return a+b;
});

//console.log(sortArray);
console.log(minSum + ' '+maxSum);
}


minMaxSum([1,2,3,4,5]); //expected 10 14
minMaxSum([2,8,1,6,9]);
