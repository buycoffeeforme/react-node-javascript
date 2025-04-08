class Node {
    constructor (data) {
        this.data = data;
        this.next = null
    }
}

class insertLinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    insertFirst (data) {
        const newNode = new Node(data);
        if(this.isEmpty()) {
            console.log("Adding in Empty List:", this.print());
            this.head = newNode;
            this.size++;
        }else{
            console.log("Adding in Existing List:", this.print());
            newNode.next =this.head;
            this.head = newNode;
            this.size++;
        }
    }
    insertAtEnd (data) {
        const newNode = new Node(data);
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
        this.size++;
    }

    print() {
        let current = this .head;
        let output = "";
        while(current){
            output += current.data + "-->";
            current = current.next;
        }
        console.log(output+" NULL");
    }
}

const insertLL = new insertLinkedList();
insertLL.insertFirst(10);
insertLL.insertFirst(20);
insertLL.insertAtEnd(30);
console.log(insertLL.print());