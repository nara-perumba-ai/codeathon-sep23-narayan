// Write a program to sort the given array of numbers in ascending order. Return the sorted array. Initial array size will be a maximum of 500 elements.
/**
 * Sorts an array of numbers in ascending order using the merge sort algorithm.
 * @param {number[]} arrayToSort - The array to sort.
 * @returns {number[]} The sorted array.
 */
const sortArray = (arrayToSort) => {
    // If the array has fewer than 2 elements, it is already sorted
    if (arrayToSort.length < 2) {
        return arrayToSort;
    }

    // Split the array into two halves
    const middleIndex = Math.floor(arrayToSort.length / 2);
    const leftArray = arrayToSort.slice(0, middleIndex);
    const rightArray = arrayToSort.slice(middleIndex);

    // Recursively sort the two halves
    const sortedLeftArray = sortArray(leftArray);
    const sortedRightArray = sortArray(rightArray);

    // Merge the two sorted halves
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < sortedLeftArray.length && rightIndex < sortedRightArray.length) {
        if (sortedLeftArray[leftIndex] < sortedRightArray[rightIndex]) {
            mergedArray.push(sortedLeftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(sortedRightArray[rightIndex]);
            rightIndex++;
        }
    }
    return mergedArray.concat(sortedLeftArray.slice(leftIndex)).concat(sortedRightArray.slice(rightIndex));
};

