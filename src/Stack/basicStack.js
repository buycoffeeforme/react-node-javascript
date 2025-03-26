function pop() {
  let popElement = stack.pop();
  var index = stack.length;
  console.log("\n"),
  console.log("----------------------------------------------------");
  console.log("STACK AFTER POP :", stack);
  console.log("POP ELEMENT:", { popElement: popElement, index: index });
  console.log("----------------------------------------------------");
}

function push(val) {
  stack.push(val);
  console.log("\n"),
  console.log("----------------------------------------------------");
  console.log("STACK AFTER PUSH :", stack);
  console.log("----------------------------------------------------");
}

function top() {
  return stack.length;
}

var stack = [];
console.log("\n"),
console.log("----------------------------------------------------");
console.log("STACK ELEMENTS:", stack);
console.log("----------------------------------------------------");
for (let i = 0; i < 5; i++) {
  push(Math.floor(Math.random() * 100));
}
while (stack.length > 0) {
  pop();
}
// let popele=pop();
// console.log("POP ELEMENT:", popele);
// let topele=top();
// console.log("TOP ELEMENT :", topele);
