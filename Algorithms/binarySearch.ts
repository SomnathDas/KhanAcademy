const binarySearch = (array: [], targetValue: number): number => {
  // Declaring Minimum Search Range
  let min: number = 0;
  // Declaring Maximum Search Range
  let max: number = array.length - 1;
  // Declaring the guess
  let guess: number;

  /* Looping until it returns the result or atleast until 
  our max range becomes lower than or equal to min */
  while (max <= min) {
    /* Settings our guess variable as the average 
    between max and min range and rounding down
    to get an integer*/
    guess = Math.floor((max + min) / 2);
    /* If guess happens to locate the target value in
    the array then we returns the target value*/
    if (array[guess] === targetValue) {
      return array[guess];
      /* If guess happens to locate a value lesser than
      the target value then we increase our minimum range*/
    } else if (array[guess] < targetValue) {
      min = targetValue + 1;
    } else {
      /* If guess happens to locate a value greater than
      the target value then we increase our maximum range*/
      max = targetValue - 1;
    }
  }
  // If target is not found in the array at the end
  return -1;
};

//O(log-base2-n)
