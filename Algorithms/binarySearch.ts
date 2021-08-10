const binarySearch = (array: [], targetValue: number): number => {
  // Declaring Minimum Search Range
  let min: number = 0;
  // Declaring Maximum Search Range
  let max: number = array.length - 1;
  // Declaring the middle value
  let mid: number;

  /* Looping until it returns the result or atleast until 
  our max range becomes lower than or equal to min */
  while (min <= max) {
    /* Settings our mid variable as the average 
    between max and min range and rounding down
    to get an integer*/
    mid = Math.floor((max + min) / 2);
    /* If mid happens to locate a value greater than
      the target value then we increase our maximum range*/
    if (targetValue < array[mid]) {
      max = mid - 1;
      /* If mid happens to locate a value lesser than
      the target value then we increase our minimum range*/
    } else if (targetValue > array[mid]) {
      min = mid + 1;
    } else {
      /* If mid happens to locate the target value in
    the array then we returns the mid value referring
    to the position of that element in the array*/
      return mid;
    }
  }
  // If target is not found in the array at the end
  return -1;
};

//O(log-base2-n)
