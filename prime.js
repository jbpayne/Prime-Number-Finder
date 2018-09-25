let userNum = process.argv[2];

const listPrimes = (maxNum) => {
  let allPrimes = [2];
  for (num = 3; num <= maxNum; num += 2) {
    let notPrime = false;
    for (index = 1; index < Math.sqrt(allPrimes.length); index++) {
      if (num % allPrimes[index] === 0) {
        notPrime = true;
        break;
      }
    }
    if (notPrime === false) { 
      allPrimes.push(num);
    }
  } 
  return allPrimes;
} 

console.log("\nHere are all the prime numbers between 1 and " + userNum + ":\n");
let startTime = Date.now();
console.log(listPrimes(userNum));
console.log("\nThis calculation took " + ((Date.now() - startTime) / 1000) + " seconds.")