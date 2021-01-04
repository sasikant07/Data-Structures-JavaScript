class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    //head = () => this.head;

    length = () => this.length;

    addAtLast = (data) => {
        const node = new Node(data);
        if (this.head) {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
        this.length++;
    }

    addAtFirst = (data) => {
        this.head = new Node(data, this.head);
        this.length++;
    }

    addAtIndex = (index, data) => {
        if (index < 0 || index > this.length) {
            return null;
        }

        if (index === 0) {
            this.addAtFirst(data);
            this.length++;
            return;
        } else {

            const newNode = new Node(data);
            let current, previous;
            current = this.head;

            let count = 0;

            while (count < index - 1) {
                count++;
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode;
        }
        this.length++;
    }

    removeFirst = () => {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        this.length--;
    }

    removeLast = () => {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
        this.length--;
    }

    removeAt = (index) => {
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

    removeElement = (data) => {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.length--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    /* removeDuplicate = () => {

    }

    reverse = (head) => {
        let previous = null;
        let current = this.head;
        let temp = null;

        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        return previous;
    } */

    // Reverse linked list without recursion
    /* 
    reverse(head) {

        let prev = null;
        let curr = head;
        let next = curr.next;

        while(curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr 
            curr = next
        }
        this.head = prev;
        return this.head;

    }
    */

    /* deleteKthNode(int) {
        if (!this.head) {
            return;
        }
        let tmp = this.head;

        if (int === 0) {
            this.head = tmp.next;
            tmp = null;
            return;
        }

        let counter = 0;
        while (counter !== int - 1 && tmp) {
            if (!tmp) {
                return;
            }
            if (!tmp.next) {
                return;
            }
            counter++;
            tmp = tmp.next;
        }

        tmp.next = tmp.next.next;
    } */

    // Detect a cycle in Linked List
    /* detectLoop = (list) => {
        let slow = list.head;
        let fast = list.head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }
 */
    printList = () => {
        let current = this.head;
        let str = 'HEAD:--';
        while (current) {
            str += "[" + current.data + "]-->"
            current = current.next;
        }
        console.log(`${str}:NULL`);
    }
}

const useLinkedList = () => {
    let list = new LinkedList();

    list.addAtFirst(20);
    list.addAtFirst(10);
    list.addAtLast(30);
    list.addAtLast(40);
    list.addAtIndex(4, 35);
    list.removeAt(4);
    list.removeElement(40);
    list.removeFirst();
    list.removeLast();

    //list.reverse();
    list.printList();
}

useLinkedList();

