// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  /**
        Reverse alice scores

        i=0
        currentRank=0
        iterate over each alice score:
            if alice > score[i]:
                aliceRank=currentRank
            if alice!=score[i]
                i++
            if score[i]!=score[i-1]:
                rank++
    */
  var j = 0;
  var rank = 1;
  var aliceRank = [];
  for (var i = alice.length - 1; i >= 0; i--) {
    while (alice[i] < scores[j]) {
      // if(alice[i]!=scores[j]) {
      if (scores[j] != scores[j - 1]) rank++;
      j++;
      if (j >= scores.length) break;
    }
    aliceRank.unshift(rank);
  }
  return aliceRank;
}
