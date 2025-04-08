class Queue {
    constructor(maxSize) {
        this.item = new Array(maxSize);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.maxSize = maxSize;
    }

    enqueue (element) {
        if(this.isFull()){
            console.log("Your Queue is FULL, We can not add element now.", element);
            return;
        }else{
            this.item[this.rear] = element;
            this.rear = (this.rear + 1) % this.maxSize; // Circular increment
            this.size++;
        }
    }

    dequeue() {
        console.log("DELETE ITEM");
        if(this.isEmpty()){
            console.log("Your Queue is EMPTY, We can DELETE element now");
            return;
        }else{
            this.item[this.front] = ""; // Optional: clear reference
            this.front = (this.front + 1) % this.maxSize; // Circular increment
            this.size--;
        }
        return this.front;
    }

    print () {
        let result = [];
        for (let i = 0; i < this.size; i++) {
            result.push(this.item[(this.front + i) % this.maxSize]);
        }
        return result;
    }

    isFull () {
        return this.size == this.maxSize;
    }

    isEmpty () {
        return this.size == 0;
    }

    sizeVal() {
        return this.item.length;
    }
}

let que = new Queue(3);

que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.enqueue(4);
console.log("Elements of Queue : ",que.print());
console.log("Size of Queue : ", que.sizeVal());
que.enqueue(5);
que.dequeue();
que.dequeue();
que.dequeue();
que.enqueue(6);
que.enqueue(7);
console.log("Elements of Queue : ",que.print());
console.log("Size of Queue : ", que.sizeVal());
que.dequeue();
que.dequeue();
que.dequeue();
que.dequeue();
console.log("Elements of Queue : ",que.print());
console.log("Size of Queue : ", que.sizeVal());