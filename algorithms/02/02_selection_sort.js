// Selection Sort - O(log n^2)
// Parameter:
// 1. random array

const findSmallest = (array) => {
  let smallestElement = array[0];
  let smallestIndex = 0;

  for(let i = 0; i < array.length; i++){  
    if(array[i] < smallestElement){
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  let smallSet = [smallestElement, smallestIndex];
  return smallSet;
};

const array = [5, 3, 6, 2, 10, 11, 33, 2, 74];
findSmallest(array);