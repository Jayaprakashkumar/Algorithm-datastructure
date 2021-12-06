class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AvlTree {

    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    getBalanceFactor(node) {
        if (!node) return 0;

        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    leftRotation(node) {
        let newNode = node.right;
        let newNodeChild = newNode.left;

        newNode.left = node;
        node.right = newNodeChild;

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        newNode.height = Math.max(this.getHeight(newNode.left), this.getHeight(newNode.right)) + 1;

        return newNode;
    }

    rightRotation(node) {
        let newNode = node.left;
        let newNodeChild = newNode.right;

        newNode.right = node;
        node.left = newNodeChild;

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        newNode.height = Math.max(this.getHeight(newNode.left), this.getHeight(newNode.right)) + 1;

        return newNode;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.root = this.insertHelper(this.root, newNode);
        }
    }

    insertHelper(node, newNode) {

        if (!node) return newNode;

        if (newNode.value < node.value) {
            node.left = this.insertHelper(node.left, newNode);
        } else if (newNode.value > node.value) {
            node.right = this.insertHelper(node.right, newNode);
        } else {
            return null;
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        if (this.getBalanceFactor(node) > 1) {
            if (this.getBalanceFactor(node.left) >= 0) {
                return this.rightRotation(node);
            } else if (this.getBalanceFactor(node.left < 0)) {
                node.left = this.leftRotation(node.left);
                return this.rightRotation(node);
            }
        }

        else if (this.getBalanceFactor(node) < -1) {
            if (this.getBalanceFactor(node.right) <= 0) {
                return this.leftRotation(node)
            } else if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rightRotation(node.right);
                return this.leftRotation(node);
            }
        }

        return node;
    }

    delete(val) {
        if (!this.root) return null;

        this.root = this.deleteUtil(this.root, val);
    }

    deleteUtil(node, val) {
        if (!node) return null;

        if (val < node.value) node.left = this.deleteUtil(node.left);
        else if (val > node.value) node.right = this.deleteUtil(node.right);

        else {
            if(!node.right && !node.left){
                node = null;
                return node;
            }
            else if(node.left) return node.left;
            else if(node.right) return node.right;

            const temp = this.findMin(this.node.right);
            node.value = temp.value;
            node.right = this.deleteUtil(node.right, temp.value);
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        if (this.getBalanceFactor(node) > 1) {
            if (this.getBalanceFactor(node.left) >= 0) {
                return this.rightRotation(node)
            } else if (this.getBalanceFactor(node.left < 0)) {
                node.left = this.leftRotation(node.left);
                return this.rightRotation(node);
            }
        }

        else if (this.getBalanceFactor(node) < -1) {
            if (this.getBalanceFactor(node.right) <= 0) {
                return this.leftRotation(node)
            } else if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rightRotation(node.right);
                return this.leftRotation(node)
            }
        }
        return node;
    }


    findMin(node) {
        if (!node.left) return node;
        return this.findMin(node.left);
    }

    printPreOrder() {
        if (!this.root) {
            console.log(this.root)
            return null
        }
        let traverse = (node) => {
            if (node) {
                console.log(node.value, node.height);
                traverse(node.left);
                traverse(node.right);
            }
        }
        traverse(this.root)
    }

}

let avl = new AvlTree();
avl.insert(33);
avl.insert(9);
avl.insert(8);
avl.insert(5);
// avl.delete(33);
// avl.delete(8);
// avl.delete(5);

// avl.insert(6);
avl.printPreOrder();
