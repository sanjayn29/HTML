const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c"); 

console.log(letters); // Output: Set(3) { 'a', 'b', 'c' }

// Check if a value exists in the Set
console.log(letters.has("a")); // Output: true
console.log(letters.has("d")); // Output: false
console.log(letters.size);

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
console.log(C);

const D = A.intersection(B);
console.log(D);

conasole.log(A.difference(B));

