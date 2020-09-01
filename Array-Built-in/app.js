const array = [7, 2, 6, 7, 1, 8, 9, 4, 3];

console.log(array[5]); //=> 8

// Insert at end
array.push(5);
console.log(array);  // => [7, 2, 6, 7, 1, 8, 9, 4, 3, 5]

// Remove from last
array.pop();
console.log(array);   // => [7, 2, 6, 7, 1, 8, 9, 4, 3]

// Insert or update value at any index
array[3] = 5;
console.log(array);  // => [7, 2, 6, 5, 1, 8, 9, 4, 3]

// Insert at begining
array.unshift(0);
console.log(array);  // => [0, 7, 2, 6, 5, 1, 8, 9, 4, 3]

// Deleting from the begining
array.shift();
console.log(array); // => [7, 2, 6, 5, 1, 8, 9, 4, 3]

// On the position 4 delete 2 items
array.splice(4, 2);
console.log(array); // => [7, 2, 6, 5, 9, 4, 3]

// Insert elements in the middle
array.splice(1, 0, 99);
console.log(array); // => [7, 99, 2, 6, 5, 9, 4, 3]

// Delete 1 element at position 2
array.splice(2, 1);
console.log(array);  // => [7, 99, 6, 5, 9, 4, 3]

// Reverse the array
array.reverse();
console.log(array);  // => [3, 4, 9, 5, 6, 99, 7]