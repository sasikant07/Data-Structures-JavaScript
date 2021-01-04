const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

const numbers = [2, 4, 3, 1, 8, 6, 7, 9, 5, 10];
console.log(insertionSort(numbers));