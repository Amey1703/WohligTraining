class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.head = newNode
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    getHead(){
        return this.head.data;
    }

    dequeue(){

        if (this.size === 0) return null;
        const dequeuedNode = this.head;
        if (this.size === 1) {
            this.tail = null;
        }

        this.head = this.head.next;
        this.size--;
        return dequeuedNode.data;
    }
}

const myQueue = new Queue();

myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue.size);
console.log(myQueue.tail.data);
