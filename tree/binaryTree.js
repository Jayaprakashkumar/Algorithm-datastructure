class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

let root = null;


function findTreeHeight(node) {
    if (!node) return -1;

    let leftHeight = findTreeHeight(node.left);
    let rightHeight = findTreeHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1
}

function findTreeDepth(node) {
    let maxDepth = 0;

    let findDepth = (node, level) => {
        if (node == null) return 0;

        if (level > maxDepth) maxDepth = level;

        findDepth(node.left, level+1);
        findDepth(node.right, level+1);
    }
    
    findDepth(node, 0)

    return maxDepth;
}

function findParticularNodeHeight(node, val) {
    let height = -1;

    let findHeight = (node) => {
        if (!node) return -1;

        let leftHeight = findHeight(node.left);
        let rightHeight = findHeight(node.right);

        let maxHeight = Math.max(leftHeight, rightHeight) + 1;
        if (node.value === val) {
            height = maxHeight;
        }

        return maxHeight;
    }
    findHeight(node);

    return height;
}


function findParticularNodeDepth(root, val) {

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

    findDepth(root, 0)
    return depth;
}

function getLevelOfNode(node, val) {
    let nodelevel = -1;

    let findLevel = (node, level) => {
        if (!node) return -1;
        if (node.value == val) {
            nodelevel = level;
        }
        findLevel(node.left, level+1);
        findLevel(node.right, level+1);
    }
    findLevel(node, 1);
    return nodelevel;
}



//       1      0
//   2        3    1
// 4   5    6   7    2
//            8  10   3

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(8);
root.right.right.right = new Node(10);
console.log(findTreeHeight(root));
// console.log(findParticularNodeHeight(root, 4));
console.log(findParticularNodeDepth(root, 2));
console.log(findTreeDepth(root));
// console.log(getLevelOfNode(root, 8));