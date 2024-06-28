class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val){
        if(this.size === 0){
            this.top = new Node(val);
        }else{
            var newNode = new Node(val);
            newNode.next = this.top;
            this.top =  newNode;
        }
        this.size++;
    }

    pop(){
        if (this.size === 0) return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.data;
    }

    getTop(){
        return this.top.data;
    }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop())

console.log(myStack.size);
console.log(myStack.getTop());