/*Given an integer, , perform the following conditional actions:

    If n is odd, print Weird
    If n is even and in the inclusive range of 2 to 5, print Not Weird
    If n is even and in the inclusive range of 6 to 20, print Weird
    If n is even and greater than 20, print Not Weird
*/

function main() {
    var N = parseInt(readLine());

    if (N%2 != 0 || (N > 5 && N < 21))
        console.log("Weird");
    else
        console.log("Not Weird")

}
