/*
 * SelectionSort
 *
 * Time complexity: (o(n²))
 *
 * In practice you should probably use the Array.prototype.sort() method.
 * Using the native sort means your array is sorted using QuickSort, MergeSort, or
 * InsertionSort depending on the browser and type of data being sorted.
 *
 * Iterate over the array and find the index of the minimum value and place that element in the first
 * position, then repeat the process for all the elements in the array
 *
*/

export default function SelectionSort(arr) {
  const length = arr.length;
  let minIndex;
  let temp;

  for (let i = 0; i < length; ++i) {
    // assume first array element is the minimum value
    minIndex = i;
    for (let j =i; j < length; ++j) {
      // loop over and find the index of the minimum value
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // we have the index of the minimum value
    // Swap the element with current iteration
    if (i !== minIndex) {
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

// SelectionSort([99, 2, 3, 90, 11, 14, 76]); // [2, 3, 11, 14, 76, 90, 99]
