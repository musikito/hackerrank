function hourglassSum(arr) {
  let f = Math.pow((arr.length - 2),2);
  let max;
  let sum;

  for(var i = 0; i < f; i++) {
    if(i < 4) {
      sum = arr[0][i] + arr[0][i+1] + arr[0][i+2];
      sum += arr[1][i+1];
      sum += arr[2][i] + arr[2][i+1] + arr[2][i+2];
      if (sum > max) {
        max = sum;
      } else if (!max) {
        max = sum;
      }
    } else if (i < 8 && i >= 4) {
      sum = arr[1][i-4] + arr[1][i-3] + arr[1][i-2];
      sum += arr[2][i-3];
      sum += arr[3][i-4] + arr[3][i-3] + arr[3][i-2];
      if (sum > max) {
        max = sum;
      }
    } else if (i < 12 && i >= 8) {
      sum = arr[2][i-8] + arr[2][i-7] + arr[2][i-6];
      sum += arr[3][i-7];
      sum += arr[4][i-8] + arr[4][i-7] + arr[4][i-6];
      if (sum > max) {
        max = sum;
      }
    } else if (i >= 12) {
      sum = arr[3][i-12] + arr[3][i-11] + arr[3][i-10];
      sum += arr[4][i-11];
      sum += arr[5][i-12] + arr[5][i-11] + arr[5][i-10];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}