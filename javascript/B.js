function descendingSort(arr) {
    return arr.sort((a, b) => b - a);
}

const inputArray = [5, 2, 9, 1, 5, 8];
const sortedArray = descendingSort(inputArray);
console.log(sortedArray); // Output: [9, 8, 5, 5, 2, 1]
