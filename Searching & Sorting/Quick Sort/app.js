const quickSort = (arr, start, end) => {

    let pivot, i, j;

    if (start < end) {
        pivot = start;
        i = start;
        j = end;

        while (i < j) {
            if (arr[i] < arr[pivot]) {
                i++;
            }
            if (arr[j] > arr[pivot]) {
                j--;
            }
            if (i < j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        let temp = arr[pivot];
        arr[pivot] = arr[j];
        arr[j] = temp;

        quickSort(arr, start, j - 1);
        quickSort(arr, j + 1, end);

    }

    return arr;
}

const numbers = [2, 4, 3, 1, 8, 6, 7, 9, 5, 10];
console.log(quickSort(numbers, 0, numbers.length - 1));