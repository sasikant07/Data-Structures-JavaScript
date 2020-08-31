class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        console.log(`Pushed element : ${element}`);
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        console.log(`Poped element : ${item}`);
        return item;
    }

    getItemAtIndex(index) {
        return `${this.data[index]} found at index ${index}`;
    }

    insertAt(item, index) {
        for (let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i-1];
        }
        this.data[index] = item;
        this.length++;
        console.log(`${item} is inserted at index ${index}`);
        return this.data;
    }

    deleteAt(index) {
        const item = this.data[index];

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return `${item} is deleted`;
    }

    searchByItem(item) {
        for (let i = 0; i < this.length; i++) {
            if ( this.data[i] === item) {
                return `${item} found at index ${i}`;
            }
        }
    }

    reverse() {
        for (let i = this.length - 1; i >= 0; i--) {
            console.log(this.data[i]);
        }
    }

}
const array = new Array();

array.push(10);
array.push(20);
array.push(30);
array.push(40);
array.push(50);
array.pop();
array.insertAt(35, 3);
console.log(array.deleteAt(3));
array.insertAt(50, 4);

console.log('\nElements present in the array : ');
for(let value in array.data) {
    console.log(`index : ${this.length++} , value : ${array.data[value]}`);
}

console.log('');

console.log(array.searchByItem(40));
console.log(array.getItemAtIndex(1));

console.log('\nElements after reverse : ')
array.reverse();

//console.log(array);