class Node {
    constructor(val) {
        this.isEndWord = false;
        this.children = new Array(26).fill(null);
        this.val = val
    }
}
class Trie {
    constructor() {
        this.root = new Node('');
    }
    insert(key) {

        let node = this.root;

        for (let i = 0; i < key.length; i++) {
            let index = key[i].charCodeAt() - 'a'.charCodeAt();
            if (node.children[index] === null) {
                node.children[index] = new Node(key[i]);
            }
            node = node.children[index]

        }
        node.isEndWord = true;
    }

    search(key) {

        let node = this.root;

        for (let i of key) {
            let index = i.charCodeAt() - 'a'.charCodeAt();
            if (node.children[index] == null) return false;

            node = node.children[index];

        }

        return node.isEndWord;
    }

    isEmpty(node) {
        return !node.children.some(i => i != null);
    }

    removeElement(key, depth) {

        function remove(root, key, depth) {
            // If tree is empty
            if (root == null)
                return null;

            // If last character of key is being processed
            if (depth == key.length) {

                // This node is no more end of word after
                // removal of given key
                if (root.isEndOfWord)
                    root.isEndOfWord = false;

                // If given is not prefix of any other word
                if (isEmpty(root)) {
                    root = null;
                }

                return root;
            }

            // If not last character, recur for the child
            // obtained using ASCII value
            let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
            root.children[index] =
                remove(root.children[index], key, depth + 1);

            // If root does not have any child (its only child got
            // deleted), and it is not end of another word.
            // if (isEmpty(root) && root.isEndOfWord == false) {
            //     root = null;
            // }

            return root;
        }
        remove(this.root, key, depth)

        function isEmpty(node) {
            for (let i = 0; i < 26; i++)
                if (node.children[i] != null)
                    return false;
            return true;
        }
    }


}

let t = new Trie();
t.insert("the");
t.insert("these");
console.log(t.search("a"))
console.log(t.removeElement("these", 0))
console.log(t.search("these"))
