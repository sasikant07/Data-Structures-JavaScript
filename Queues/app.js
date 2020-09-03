class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    enqueue(element) {
        this.items.push(element);
        console.log(`${element} is added into the queue.`);
    }

    dequeue() {
        if (this.isEmpty()) {
            return `Underflow!`;
        }
        return `Removed element : ${this.items.shift()}`;
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue is empty!';
        }
        return `Front element in the queue is ${this.items[0]}`;
    }

    printQueue() {
        let data = '';
        for (let i = 0; i < this.items.length; i++) {
            data += this.items[i] + ' ';
        }
        return data;
    }

}

function useQueue() {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.enqueue(30);
    queue.enqueue(50);
    console.log(queue.front());
    console.log(queue.printQueue());
}

useQueue();