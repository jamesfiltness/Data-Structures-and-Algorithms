/*
 * InsertsionSort
 *
 * Time complexity: (o(n²))
 *
 * In practice you should probably use the Array.prototype.sort() method.
 * Using the native sort means your array is sorted using QuickSort, MergeSort, or
 * InsertionSort depending on the browser and type of data being sorted.
 *
 * InserstionSort moves elements in to position one at a time.
 * The outer loop iterates each element of the array.
 * An inner while loop then iterates backwards from the current iteration of the outer
 * loop to zero, comparing the current element with the elements before it and shifts
 * the element down if the previous elements value is lesser.
 *
*/

export default function InsersionSort(arr) {
  const length = arr.length;
  let temp;

  // assume that the first element is already sorted
  for (let i = 1; i < length; ++i) {
    }

  }
}

// InsertionSort([99, 2, 3, 90, 11, 14, 76]); // [2, 3, 11, 14, 76, 90, 99]
