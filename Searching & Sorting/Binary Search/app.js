const binarySearch = (arr, data) => {
    let start = 0
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < data) {
            return start = mid + 1;
        } else if (arr[mid] > data) {
            return end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

const recursiveBinarySearch = (arr, start, end, ele) => {
    
    if ( end >= begin ) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] < ele) {
            return recursiveBinarySearch(arr, mid+1, end, ele);
        } else if (arr[mid] > ele) {
            return recursiveBinarySearch(arr, start, mid-1, ele);
        } else {
            return mid;
        }
    }
    return -1; 
};  

const numArray = [3, 5, 6, 12, 17, 25,28, 35, 41, 45, 61, 67, 80];

console.log(numArray);

const value = 6;

const position = binarySearch(numArray, value);


if (position >= 0) {
    console.log('Number ' + value + ' is found in the array at position ' + position + '.');
} else {
    console.log(value + ' is not in the array.');
}

console.log();

const positions = binarySearch(numArray, 0, numArray.length-1, value);


if (positions >= 0) {
    console.log('Number ' + value + ' is found in the array at position ' + positions + '.');
} else {
    console.log(value + ' is not in the array.');
}