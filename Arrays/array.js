class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }

}
const array = new Array();

array.push(10);
array.push(20);
array.push(30);
array.push(40);
array.push(50);

console.log('Print element in the array');

for(let value in array.data) {
    console.log(array.data[value] + ' ');
}