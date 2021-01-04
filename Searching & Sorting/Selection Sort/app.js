const selectionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

const numbers = [2, 4, 3, 1, 8, 6, 7, 9, 5, 10];
console.log(selectionSort(numbers));