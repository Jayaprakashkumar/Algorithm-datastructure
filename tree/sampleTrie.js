let ALPHABET_SIZE = 26;
 
// trie node
class TrieNode
{
    constructor()
    {
        this.isEndOfWord = false;
        this.children = new Array(ALPHABET_SIZE);
        for (let i = 0; i < ALPHABET_SIZE; i++)
            this.children[i] = null;
    }
}
 
let root;
 
function insert(key)
{
    let level;
        let length = key.length;
        let index;
       
        let pCrawl = root;
       
        for (level = 0; level < length; level++)
        {
            index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
            if (pCrawl.children[index] == null)
                pCrawl.children[index] = new TrieNode();
       
            pCrawl = pCrawl.children[index];
        }
       
        // mark last node as leaf
        pCrawl.isEndOfWord = true;
}
 
// Returns true if key presents in trie, else false
function search(key)
{
    let level;
        let length = key.length;
        let index;
        let pCrawl = root;
       
        for (level = 0; level < length; level++)
        {
            index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
       
            if (pCrawl.children[index] == null)
                return false;
       
            pCrawl = pCrawl.children[index];
        }
       
        return (pCrawl.isEndOfWord);
}
 
// Driver   
// Input keys (use only 'a' through 'z' and lower case)
let keys = ["the", "a", "there", "answer", "any",
                 "by", "bye", "their"];
 
let output = ["Not present in trie", "Present in trie"];
 
 
root = new TrieNode();

insert("the");
insert("a");
insert("there");

console.log(search("the"));