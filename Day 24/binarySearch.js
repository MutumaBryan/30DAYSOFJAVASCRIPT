class BinarySearch{
  constructor(queryToSearchAgainst, ...arrayToBeSearched){
    if(!Array.isArray(arrayToBeSearched)){
      throw console.error('You have not passed an array');
    }
    this.arrayToBeSearched = arrayToBeSearched;
    this.queryToSearchAgainst = queryToSearchAgainst;
  }

  sortArrayByShiftingLeft(arrayToBeShifted){
    let lengthOfArrayToBeShifted = arrayToBeShifted.length;

    for (let currentIndex = 1; currentIndex < lengthOfArrayToBeShifted; currentIndex++) {
      let currentValue = arrayToBeShifted[currentIndex];
      let previousValueIndex = currentIndex - 1;

      while (previousValueIndex >=0 && arrayToBeShifted[previousValueIndex] > currentValue) {
        arrayToBeShifted[previousValueIndex + 1] = arrayToBeShifted[previousValueIndex];
        previousValueIndex--;
      }

      arrayToBeShifted[previousValueIndex + 1] = currentValue;
    }
  return arrayToBeShifted;
  }

  getMiddle(arrayToBeSplit){
    let lastIndex = arrayToBeSplit.length - 1;
    let middleIndex;
    if(lastIndex%2 === 0) middleIndex = lastIndex/2;
    middleIndex = Math.floor(lastIndex/2);

    return middleIndex;
  }
  
  splitArrayMethod(splitArray){
    const left = [];
    const right = [];

    let middleIndex = this.getMiddle(splitArray);
    if(this.queryToSearchAgainst === splitArray[middleIndex]) return this.queryToSearchAgainst;
    else if(this.queryToSearchAgainst >= splitArray[middleIndex]){
      right = splitArray.filter((element, i) => i >= middleIndex);
      return right;
    }
    else{
      left = splitArray.filter((element, i) => i < middleIndex);
      return left;
    }
  }

  checkIfFound(){
    const sortedArray = this.sortArrayByShiftingLeft(this.arrayToBeSearched);
    let loops = Math.ceil(Math.log2(this.arrayToBeSearched.length));
    console.log(sortedArray);
    for (let index = 0; index < loops; index++) {
      console.log(sortedArray);
      if (this.queryToSearchAgainst === this.splitArrayMethod(sortedArray)) {
        return `Your number exists`;
      }
      else if(this.splitArrayMethod(sortedArray) === 'undefined'){
        return -1;
      }
      else {
        sortedArray = [];
        sortedArray = this.splitArrayMethod(sortedArray)
        this.splitArrayMethod(sortedArray);
      }
    }
  }
}
const testArray = [9, 7, 5, 3, 2, 1];
const binarySearch = new BinarySearch(7, testArray);

const result = binarySearch.checkIfFound();
console.log(result);