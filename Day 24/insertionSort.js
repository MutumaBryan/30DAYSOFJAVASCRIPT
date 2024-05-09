class InsertionSort{
  constructor(arrayToBeSorted){
    this.arrayToBeSorted = arrayToBeSorted;
  }

  sortByShiftingLeft(){
    let itemsToSortAscending = this.arrayToBeSorted.slice();
    const loops = itemsToSortAscending.length;

    for (let currentIndex = 1; currentIndex < loops; currentIndex++) {
      const currentValue = itemsToSortAscending[currentIndex];
      let previousIndex = currentIndex - 1;

      while( previousIndex >=0 && itemsToSortAscending[previousIndex] > currentValue ){
        itemsToSortAscending[previousIndex + 1] = itemsToSortAscending[previousIndex];
        previousIndex--;
      }
      itemsToSortAscending[previousIndex + 1] = currentValue;
    }
    return itemsToSortAscending;
  }

  sortByShiftingRight(){
    const itemsToSortDescending = this.arrayToBeSorted.slice();
    const loops = itemsToSortDescending.length;

    for (let currentIndex = 1; currentIndex < loops; currentIndex++) {
      const currentValue = itemsToSortDescending[currentIndex];
      let previousIndex = currentIndex - 1;

      while( previousIndex >=0 && itemsToSortDescending[previousIndex] < currentValue ){
        itemsToSortDescending[previousIndex + 1] = itemsToSortDescending[previousIndex];
        previousIndex--;
      }
      itemsToSortDescending[previousIndex + 1] = currentValue;
    }
    return itemsToSortDescending;
  }
}
const testInsertionSort = [9,8,7,6,5,4,3,2,1,0];
const insertionSort = new InsertionSort(testInsertionSort);

const resultAscendingSort = insertionSort.sortByShiftingLeft();
const resultDescendingSort = insertionSort.sortByShiftingRight();
console.log(resultAscendingSort);
console.log(resultDescendingSort);