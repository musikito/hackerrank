function staircase(n) {
    for (let i=0; i<=n - 1; i++) {
      console.log(' '.repeat(n-i) + '#'.repeat(i))
      console.log(i);
    }
  }
  
  staircase(3)