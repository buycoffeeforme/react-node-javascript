function Stack() {
    let items = [];
    let top = -1; // Points to the top element

    // Push element onto the stack
    function push(element) {
        items.push(element);
        top++; // Increment top pointer
    }

    // Pop element from the stack
    function pop() {
        if (isEmpty()) {
            console.log("Stack Underflow");
            return null;
        }
        top--; // Decrement top pointer
        return items.pop();
    }

    // Peek top element of the stack
    function peek() {
        if (isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return items[top];
    }

    // Check if stack is empty
    function isEmpty() {
        return top === -1;
    }

    // Get stack size
    function size() {
        return top + 1;
    }

    // Display stack contents
    function display() {
        console.log("Stack:", items);
    }

    return { push, pop, peek, isEmpty, size, display };
}

// Example usage
const stack = Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Stack: [10, 20, 30]
console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
stack.display(); // Stack: [10, 20]
console.log(stack.size()); // 2
