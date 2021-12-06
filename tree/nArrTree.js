class Node {
    constructor(val) {
        this.value = val;
        this.children = [];
        this.parent = null;
    }
}
function Tree(data) {
    var node = new Node(data);
    this.root = node;
}

Tree.levelTravesal = () => {
    let current = this.root;
    let queue = [root];
    let result = [root.value];

    if (current) {
        result.push(current.value);
        for (let child of current.children) {
            queue.push(child);
        }
    }
    return result;

}


let tree = new Tree("one");

tree.root.children.push(new Node("three"));
tree.root.children[0].parent = tree;
tree.root.children.push(new Node("two"));
tree.root.children[1].parent = tree;
tree.root.children.push(new Node("four"));
tree.root.children[2].parent = tree;
tree.root.children[0].children.push(new Node("five"));
tree.root.children[0].children[0].parent = tree.root.children[0];
tree.root.children[0].children.push(new Node("six"));
tree.root.children[0].children[1].parent = tree.root.children[0];

console.log(tree.root);
console.log(tree.levelTravesal(tree.root));
