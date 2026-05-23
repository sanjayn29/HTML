let arr = ["Sanjay",21,"Engineer"];
console.log(arr);

//accessing elements
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//modifying elements
arr[1] = 22;
console.log(arr);

//array methods
arr.push("Developer");
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.length);

for(let i =0;i < arr.length ; i++){
    console.log(arr[i]);
}

console.log(arr.toString());

let arr2 = ["Ragul",19,"Designer"];
let combinedArr = arr.concat(arr2);
console.log(combinedArr);

console.log(arr.reverse());