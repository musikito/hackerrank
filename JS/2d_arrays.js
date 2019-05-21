function main() {
    var arr = [];
    var maxTotal;

    for (var arr_i = 0; arr_i < 6; arr_i++) {
        arr[arr_i] = readLine().split(' ');
        arr[arr_i] = arr[arr_i].map(Number);
    }

    for (var i = 0; i < (arr.length - 2); i++) {
        for (var y = 0; y < (arr.length - 2); y++) {

            var total = parseInt(arr[i][y]) + parseInt(arr[i][y + 1]) + parseInt(arr[i][y + 2]) + parseInt(arr[i + 1][y + 1]) + parseInt(arr[i + 2][y]) + parseInt(arr[i + 2][y + 1]) + parseInt(arr[i + 2][y + 2]);

            if (!maxTotal && maxTotal != 0) {
                maxTotal = total;
            }

            if (total > maxTotal) {
                maxTotal = total;
            }
        }
    }

    console.log(maxTotal);
}