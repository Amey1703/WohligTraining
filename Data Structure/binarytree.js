/**Conditions
 * only one root
 * max two children
 * only one path b/w root and any node
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   // Node

class BinaryTree {
    constructor() {
        this.root = null;
    }
}

const tree = new BinaryTree();
tree.root = new Node(1);


tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

// 1
// / \
// 2   3
// / \ / \
// 4  5 6  7