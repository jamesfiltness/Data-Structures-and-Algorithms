/*
 * BubbleSort
 *
 * Time complexity: (o(n²))
 *
 * In practice you should probably use the Array.prototype.sort() method.
 * Using the native sort means your array is sorted using QuickSort, MergeSort, or
 * InsertionSort depending on the browser and type of data being sorted.
 *
 * The outer loop controls how many passes of the array are performed (always equal to
 * the length of the array).
 *
 * The inner loop iterates over, compares and swaps elements.
 *
 * After the first iteration of the outer loop the largest number will have been sorted
 * in to the last position of the array (i.e. [2, 1, 9, 11, 3, 99, 4, 8] becomes
 * [1, 2, 9, 3, 11, 4, 8, 99]) and on the second iteration the second largest number
 * will have been sorted in to the penultimate position (i.e. [1, 2, 3, 9, 4, 8, 11, 99])
 * and so on.
 *
 * There is no need for the inner loop to iterate elements that have already
 * been sorted so a small optimisation below of subtracting the outer loops current iteration
 * from the amount of times the inner loop needs to run means that elements that have already
 * been sorted are not sorted again.
 *
 * BubbleSort is so named because the largest numbers appear to bubble up to the top of the array:
 *
 * [2,1,9,11,3,99,4,8] // 1 is less than 2 - swap:
 * [1,2,9,11,3,99,4,8] // 9 is greater than 2 - don't swap:
 * [1,2,9,11,3,99,4,8] // 11 is greater than 9 - don't swap:
 * [1,2,9,11,3,99,4,8] // 3 is less than 11 - swap:
 * [1,2,9,3,11,99,4,8] // 99 is greater than 11 - don't swap:
 * [1,2,9,3,11,99,4,8] // 4 is less than 99: swap:
 * [1,2,9,3,11,4,99,8] // 8 iess less than 99: swap:
 * [1,2,9,4,11,4,8,99] // outer loop completes its first iteration - largest number sorted in to correct position
 *
*/

export default function BubbleSort(arr) {
  const length = arr.length;
  let temp;

  for (let i = 0; i < length; ++i) {
    for (let j =0; j < length -1 -i; ++j) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

// BubbleSort([2,1,9,11,3,99,4,8]); // [1, 2, 3, 4, 8, 9, 11, 99]
