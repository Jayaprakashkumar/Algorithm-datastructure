class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarSearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {

        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        if (newNode.value < node.value) {

            if (!node.left) node.left = newNode
            else
                this.insertNode(node.left, newNode);
        } else {

            if (!node.right) node.right = newNode;
            else
                this.insertNode(node.right, newNode)

        }
    }

    delete(val) {

        this.root = this.deleteNode(this.root, val)
    }
    deleteNode(node, val) {

        if (!node) return null;

        if (val < node.value) {
            node.left = this.deleteNode(node.left, val);
            return node;
        } else if (val > node.value) {
            node.right = this.deleteNode(node.right, val);
            return node;
        } else {

            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }

            const temp = this.findMin(node.right);
            node.value = temp.value;

            node.right = this.deleteNode(node.right, temp.value);

        }

        return node;
    }

    findMin(node) {
        if (!node.left) return node;

        return this.findMin(node.left);
    }

    search(val) {

        if (!this.root) return null;
        let found = false;
        let current = this.root;
        while (current) {

            if (current.value === val) {
                found = true;
                break;
            }

            if (val < current.value) current = current.left;
            else if (val > current.value) current = current.right;
        }
        return found ? current.value : "no result found";
    }

    bfs() {
        let current = this.root;
        let queue = [current];
        let visited = []

        while (queue.length) {
            const node = queue.shift();

            visited.push(node.value)

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }

        }
        return visited;
    }

    dfsPreOrder() {
        const data = [];
        var traverse = (node) => {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        console.log(data)
    }

    dfsInorder() {
        const data = [];
        let traverse = (node) => {
            if (node) {
                traverse(node.left);
                data.push(node.value);
                traverse(node.right)
            }
        }
        traverse(this.root);
        console.log(data);
    }

    dfsPostOrder() {
        const data = [];
        let traverse = (node) => {

            if (node) {
                traverse(node.left);
                traverse(node.right);
                data.push(node.value);
            }
        }
        traverse(this.root);
        console.log(data);
    }

    findMaxHeight() {

        const height = (node) => {

            if (!node) return 0;

            let leftHeight = height(node.left);
            let rightHeight = height(node.right);

            let h = Math.max(leftHeight, rightHeight) + 1;

            return h;
        }

        console.log(height(this.root))

    }

    findParticularNode(val) {
        let height = -1;
        const findHeight = (node) => {
            if (!node) return 0;

            let leftHeight = findHeight(node.left);
            let rightHeight = findHeight(node.right);

            let ans = Math.max(leftHeight, rightHeight) + 1;
            if (node.value == val) {
                height = ans
            }

            return ans;
        }
        findHeight(this.root)
        console.log(height);
        return height;

    }

    findDepthOfNode(val){
        let queue = [this.root];
        let depth =0;

        while(queue.length){
            let current = queue.shift();


            if(current.value == val){
                break;
            }
            if(current.left) queue.push(current.left);
            if(current.right)queue.push(current.right);
            depth++;

        }
        console.log(depth);
    }
     findParticularNodeDepth( val) {

        let depth = -1;
        let findDepth = (node, level) => {
    
            if (node) {
                if (node.value == val) {
                    depth = level;
                }
    
                findDepth(node.left, level + 1);
                findDepth(node.right, level + 1);
            }
        }
    
        findDepth(this.root, 0)
        return depth;
    }


    printBinaryTree() {

        console.log(this.root);
    }


}

//             15
//        10          25
//     7     13    22     27
//  5    9      17

let bst = new binarSearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);
//console.log(bst.search(0));
//console.log(bst.bfs())
// bst.dfsPreOrder();
// bst.dfsInorder();
// bst.dfsPostOrder();
// bst.findMaxHeight();
// bst.findParticularNode(10);
// bst.findDepthOfNode(17);
// console.log(bst.getLevel(15));
console.log(bst.findParticularNodeDepth(17))

// bst.delete(10);
// bst.printBinaryTree();

