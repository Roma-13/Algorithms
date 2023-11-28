function countTrues(arr) {

    const count = arr.reduce((calculator, currentValue) => {
      if (currentValue === true) {
        return calculator + 1;
      }
      return calculator;
    }, 0);
  
    return count;
  }
  
  const inputArray = [true, true, false, true, true, false, true];
  const trueCount = countTrues(inputArray);
  
  console.log(`მასივში True ების რაოდენობა: ${trueCount}`);