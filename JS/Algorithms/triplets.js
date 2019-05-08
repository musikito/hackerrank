/*
It must return an array of two integers, the first being Alice's score and the second being Bob's.
compareTriplets has the following parameter(s):

a: an array of integers representing Alice's challenge rating
b: an array of integers representing Bob's challenge rating

*/

function compareTriplets(a, b) {
    let alice = 0, bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) alice += 1;
        if (a[i] < b[i]) bob += 1
    }
    return [alice, bob]

}// end of function compareTriplets
