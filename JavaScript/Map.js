const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits); // Output: Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

// Get Map Values
console.log(fruits.get("apples")); // Output: 500
console.log(fruits.get("grapes")); // Output: undefined

console.log(fruits.size);

console.log(fruits.has("apples")); // Output:   true
console.log(fruits.has("grapes")); // Output: false

fruits.delete("apples");
console.log(fruits); // Output: Map(2) { 'bananas' => 300, 'oranges' => 200 }

fruits.clear();
console.log(fruits); // Output: Map(0) {}
