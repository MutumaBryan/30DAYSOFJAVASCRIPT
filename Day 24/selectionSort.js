class SelectionSort {
  constructor (arrayToBeSorted){
    this.arrayToBeSorted = arrayToBeSorted;
  }

  sortInAscendingOrder() {
    // pass the array by value to prevent conflict with other methods in the class
    const copiedArray = this.arrayToBeSorted.slice();
    let minimumChecker;

    for (let currentIndex = 0; currentIndex < copiedArray.length; currentIndex++) {
      let itemToBeSorted = currentIndex;
      minimumChecker = currentIndex;

      while(itemToBeSorted < copiedArray.length) {  
        if (copiedArray[itemToBeSorted] < copiedArray[minimumChecker]) {
          minimumChecker = itemToBeSorted;
          itemToBeSorted++;
        }
        itemToBeSorted++;
      }

      if (copiedArray[currentIndex] !== copiedArray[minimumChecker]) {
        [copiedArray[currentIndex], copiedArray[minimumChecker]] = [copiedArray[minimumChecker], copiedArray[currentIndex]]; 
      }
    }
    return copiedArray;
  }

  sortingInDescendingOrder() {
    const newArray = this.sortInAscendingOrder().slice();
    let maximumIndex;

    for (let currentIndex = 0; currentIndex < newArray.length; currentIndex++) {
      let itemToBeSorted = currentIndex;
      maximumIndex = currentIndex;
      
      while (itemToBeSorted < newArray.length) {
        if (newArray[itemToBeSorted] > newArray[maximumIndex]) {
          maximumIndex = itemToBeSorted;
          itemToBeSorted ++;
        }
        itemToBeSorted ++;
      }

      if (newArray[currentIndex] !== newArray[maximumIndex]) {
        [newArray[currentIndex], newArray[maximumIndex]] = [newArray[maximumIndex], newArray[currentIndex]];
      }
    }

    return newArray;
  }
}
const testSelectionSort = [9,8,7,6,5,4,3,2,1,0];
const selectionSorter = new SelectionSort(testSelectionSort);

const resultAscending = selectionSorter.sortInAscendingOrder();
const resultDescending = selectionSorter.sortingInDescendingOrder();
console.log(resultAscending);
console.log(resultDescending);