const linearSearch = (arr, data) => {
    for (let i = 0; i < arr.length ; ++i) {
        if (arr[i] === data) {
            return i;
        }
    }
    return -1;
};

/* const printArray = arr => {
    let i;
    for (i = 0; i < arr.length; ++i) {
        console.log(arr[i] + ' ');
        if (i % 10 === 9) {
            console.log('\n');
        }
    }
    if (i % 10 !== 0) {
        console.log('\n');
    }
};
 */

const nums = [10, 6, 14, 24, 45, 78, 84, 33, 29, 11, 19, 50, 68];

//printArray(nums);
console.log(nums);

const num = 14;

const position = linearSearch(nums, num);
if (position > -1) {
    console.log('Number ' + num + ' is found in the array at position ' + position + '.');
} else {
    console.log(num + ' is not in the array.');
}
