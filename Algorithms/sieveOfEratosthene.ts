const sieveOfEratosthenes = (n: number): number[] => {
  // Generate an boolean array from 0 to n
  // All True value will be prime in the end, composite numbers will be marked as false
  let primeTruth: boolean[] = Array.from({ length: n + 1 }, (_, i) => {
    return true;
  });
  // Declare a prime number array which will store the result
  let primeArr: number[] = [];
  // Starting with smallest prime number 2
  for (let i = 2; i * i <= n; i++) {
    // If primeTruth[i] is not changed, then it is a prime
    if (primeTruth[i] == true) {
      for (let j = i * i; j < n; j += i) {
        // Marking all the multiples of i as false
        primeTruth[j] = false;
      }
    }
  }
  // Storing values
  for (let k = 2; k < primeTruth.length; k++) {
    // All the true values[Prime] will be stored
    if (primeTruth[k] == true) {
      primeArr.push(k);
    }
  }
  // Returning the array
  return primeArr;
};
