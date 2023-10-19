function descendingSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const inputArray = [5, 2, 9, 1, 5, 8];
const sortedArray = descendingSort(inputArray);
console.log(sortedArray); // Output: [9, 8, 5, 5, 2, 1]
