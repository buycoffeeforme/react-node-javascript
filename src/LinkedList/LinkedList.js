class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    isEmpty () {
        return this.size === 0;
    }
    getSize () {
        return this.size;
    }
    prepend(data) {
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }
    print() {
        this.current = this.head;
        while(this.current) {
            console.log(this.current);
            this.current = this.current.next;
        }
    }
}

const ll = new LinkedList();

ll.prepend(10)
ll.prepend(20)
ll.prepend(30)
ll.prepend(40)
ll.prepend(50)
ll.prepend(60)
console.log("Is LinkedList is Emapty :", ll.isEmpty());
console.log("Size of LinkedList :", ll.getSize());
console.log(ll.print());

