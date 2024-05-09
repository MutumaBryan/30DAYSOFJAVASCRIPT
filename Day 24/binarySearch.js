class BinarySearch{
  constructor(queryToSearchAgainst, arrayToBeSearched){
    if(!Array.isArray(arrayToBeSearched)){
      throw new Error('You have not passed an array'); //check if type of data to be searched through is an array
    }
    this.arrayToBeSearched = arrayToBeSearched; //assign array to global bloack
    this.queryToSearchAgainst = queryToSearchAgainst; // assign query to global block
  }

  // sort array using insertion sort to ensure the list is ordered before search
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

 // find the median for splitting
  getMiddle(arrayToBeSplit){
    let lastIndex = arrayToBeSplit.length - 1;
    let middleIndex;
    if(lastIndex%2 === 0) middleIndex = lastIndex/2;
    middleIndex = Math.floor(lastIndex/2);

    return middleIndex;
  }

// split array into two and return the query or half the array most likely to contain the query
  splitArrayMethod(splitArray){
    let middleIndex = this.getMiddle(splitArray);
    
    if(this.queryToSearchAgainst === splitArray[middleIndex]) return this.queryToSearchAgainst;

    else if( this.queryToSearchAgainst > splitArray[middleIndex] ){
      const right = splitArray.filter((element, i) => i > middleIndex);
      return right;
    }

    else{
      const left = splitArray.filter((element, i) => i <= middleIndex);
      return left;
    }
  }

// check if what returned after splitting is what we need or if not there either split it again or return -1 if the list is complete
  checkIfFound(){
    let sortedArray = this.sortArrayByShiftingLeft(this.arrayToBeSearched);
    let loops = Math.ceil(Math.log2(this.arrayToBeSearched.length));

    for (let index = 0; index < loops; index++) {
      if (this.queryToSearchAgainst === this.splitArrayMethod(sortedArray)) {
        return `Your number exists`;
      }
      else if(this.splitArrayMethod(sortedArray).length === 0){
        return -1;
      }
      else {
        sortedArray = this.splitArrayMethod(sortedArray)
        this.splitArrayMethod(sortedArray);
      }
    }
  }
}
const testArray = [9, 7, 5, 3, 2, 1, 10];
const binarySearch = new BinarySearch(5, testArray);

const result = binarySearch.checkIfFound();
console.log(result);