class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //insert a item to list
    push(val) {
        let newList = new Node(val);

        if (!this.head) {
            this.head = newList;
            this.tail = this.head;
        } else {
            this.tail.next = newList;
            this.tail = newList;
        }

        this.length++;
        return this;

    }
    pop() {

        if (!this.head) return undefined;
        let current = this.head;
        let newNode = this.head;

        while (current.next) {
            newNode = current;
            current = current.next;
        }
        this.tail = newNode;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;

    }

    shift() {

        if (!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;
        return this.head;

    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;

        return this;
    }

    get(index) {
        let count = 0;
        let current = this.head;
        if (index < 0 || index >= this.length) return null;

        while(count !== index){
            current = current.next;
            count++;
        }

        return current.val;

    }
}

let list = new singlyLinkedList();
// console.log(list.push("hi"));
// console.log(list.push("how"));
// console.log(list.push("are"));
// console.log(list.unshift("jayaprakash"))
console.log(list.get(1))
// console.log(list.push("hi"));
// console.log(list.push("how"));
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
