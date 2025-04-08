class Queue {
    constructor() {
        this.item = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue (element) {
        this.item[this.rear] = element;
        this.rear++;
        this.size++;
    }

    dequeue() {
        delete this.item[this.front];
        this.front++;
        this.size--;
        return this.front;
    }

    print () {
        return this.item;
    }

    isFull () {
        return this.front == this.rear;
    }

    isEmpty () {
        return this.size == 0;
    }

    sizeVal() {
        return this.size;
    }
}

let que = new Queue();

que.enqueue(1);
que.enqueue(2);
que.dequeue();
que.enqueue(3);
que.enqueue(4);
console.log("Size of Queue : ", que.sizeVal());
console.log("Elements of Queue : ",que.print());
que.enqueue(5);
que.dequeue();
que.dequeue();
que.dequeue();
que.enqueue(6);
que.enqueue(7);
console.log("Size of Queue : ", que.sizeVal());
console.log("Elements of Queue : ",que.print());
que.dequeue();
que.dequeue();
console.log("Size of Queue : ", que.sizeVal());
console.log("Elements of Queue : ",que.print());