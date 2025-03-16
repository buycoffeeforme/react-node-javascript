// Function to curry any function
function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function (...next) {
          return curried(...args, ...next);
        };
      }
    };
  }
  
  // Example: curried add function
  function add(a, b, c) {
    return a + b + c;
  }
  
  // Creating a curried version of add
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); // Output: 6
  