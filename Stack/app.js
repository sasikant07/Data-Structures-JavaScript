class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    push(element) {
        this.items.push(element);
        console.log(`Pushed element : ${element}`);
    }

    pop() {
        if (this.items.length == 0) {
            console.log('Stack Underflow!');
        }
        return `Poped element : ${this.items.pop()}`;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    printStack() {
        let str = '';
        for(let i = 0; i < this.items.length ; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }
}


const stack = new Stack();

console.log(stack.isEmpty());
stack.push(10);
stack.push('Twenty');
stack.push(30);
stack.push('Fourty');
stack.push('55');
console.log(stack.pop());
stack.push(50);

console.log(stack.isEmpty());

console.log(stack.peek());

console.log(stack.printStack());