class Node{
    constructor(val){
        this.val =val;
        this.next =null;
    }
}
class Linkedlist{
    constructor(){
        this.head =null;
        this.tail=null
    }

    insertNode(val){
        if(!this.head) {
            this.head = new Node(val);
            this.tail = this.head;
        }
        else{
            let newNode = new Node(val);
           this.tail.next =newNode;
           this.tail = newNode;

        }
    }

    printLinkedList(){

        let current = this.head;

        while(current.next){
            console.log(current);
            current = current.next;
        }
    }

}

var removeNthFromEnd = function(head, n) {
    let p = head, node = head
    let i =0;
    while(i<n){
        p = p.next
        i++;
    }
    while(p && p.next ) {
        p = p.next
        node = node.next
    }
    
    if(!p)  head = head.next
    else node.next = node.next.next
    
    return head
};


let linked = new Linkedlist();
linked.insertNode(1);
linked.insertNode(2);
linked.insertNode(3);
linked.insertNode(4);
linked.insertNode(5);

console.log(linked.printLinkedList())