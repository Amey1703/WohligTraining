class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const depthFirstvalues = (root) =>{
    if(root === null) return [];

    // result = []
    // const stack = [root];

    // while (stack.length >0){ 

    // const current = stack.pop()
    // result.push(current.data);
    // if(current.right) stack.push(current.right);
    // if(current.left) stack.push(current.left);
    // }
    // return result;
    const leftValues = depthFirstvalues(root.left);
    const rightValues = depthFirstvalues(root.right);
    return [root.data,...leftValues,...rightValues];
}

const breadthFirstvalues = (root) =>{
    const values = [];
    const queue = [root];

    while(queue.length > 0){
        const current = queue.shift();
        values.push(current.data);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return values;
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log('DFS: ',depthFirstvalues(a) )
console.log('BFS: ', breadthFirstvalues(a) )