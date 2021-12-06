class node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class linkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        let newNode = new node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
}



let linkedLis =  new linkedList();
linkedLis.push(4);
linkedLis.push(2);
linkedLis.push(1);
linkedLis.push(3);

console.log(linkedLis);
