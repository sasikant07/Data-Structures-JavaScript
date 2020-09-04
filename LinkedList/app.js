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

    insertAt(index, data) {
        
        // if index is out of range
        if (index < 0 || index > this.length) {
            return null;
        }

        // if first index 
        if (index === 0) {
            this.addFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;
        
        //set current to first
        current = this.head;

        let count = 0;

        while (count < index - 1) {
            previous = current;   // Node before index
            count++;
            current = current.next;   // Node after index 
        }

        node.next = current;
        previous.next = node;

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

    removeAt(index) {
         // if index is out of range
         if (index < 0 || index > this.length) {
            return null;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index - 1) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if (count == index - 1) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    reverse() {
        let current = this.head;
        let prevNode = null;
        let nextNode = null;

        while (current) {
            // store next node 
            nextNode = current.next;

            // change next node of the current node so it would link to previous node.
            current.next = prevNode;

            // move previous node and current node one step forward
            prevNode = current;
            current = nextNode;
        }

        // Reset head and tail
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }

    findMiddleNode() {              // O(1)
        let fast = this.head;
        let slow = this.head;

        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow.data;
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
    list.addFirst(35);
    list.addFirst(15);
    list.addFirst(25);
    list.insertAt(3, 22);
    list.removeLast();
    list.removeFirst();
    list.removeAt(3);
    list.reverse();
    list.printList();
    console.log(`Middle element : ${list.findMiddleNode()}`);
}

useLinkedList();