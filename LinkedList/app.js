class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    addLast(data) {
        let node = new Node(data);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    addFirst(data) {
        let node = new Node(data);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.length++;
    }

    removeLast() {

        if (this.head !== this.tail) {
            let node = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;
            this.length--;
            return node;
        }
    }

    removeFirst() {
        if (this.head !== this.tail) {
            let node = this.head;
            this.head = this.head.next;
            this.head.previous = null;
            this.length--;
            return node;
        }
    }

    printList() {
        let current = this.head;
        let str = 'HEAD:--';
        while (current) {
            str += "[" + current.data + "]-->"
            current = current.next;
        }
        console.log(`${str}:TAIL`);
    }
}

function useLinkedList() {
    let list = new LinkedList();
    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.addFirst(50);
    list.removeLast();
    list.removeFirst();
    list.printList();
}

useLinkedList();