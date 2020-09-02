const ids = new Set();

// adding elements in the sets.
ids.add(1);
ids.add('two');
ids.add(3);
ids.add('four');
ids.add(4);
ids.add('four');  // duplicate value will no get stored

// iterating over the elements
for (const elements of ids) {
    console.log(elements);
}

// Retreiveibg elements
console.log(ids.has('four'));  // true

// deleteing elements
ids.delete(4);
console.log(ids);
