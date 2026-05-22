let name = "Sanjay N";
let name1 = 'N Sanjay';

console.log(name);
console.log(name1);

let sen = "my name is 'Sanjay'";
console.log(sen);

let len = sen.length;
console.log(len);

let x = new String("Sanjay N");
if (x === name) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

let sen1 = `My name is ${name}`;
console.log(sen1);

let char = name[0];
let char1 = name.charAt(0);
let char2 = name.at(0);
let char3 = name.charCodeAt(0);
console.log(char);
console.log(char1);
console.log(char2);
console.log(char3);

let part = name.slice(0, 6);
console.log(part);

let part2 = name.substr(0,6);
console.log(part2);

let part3 = name.substring(0,6);
console.log(part3);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

let sample = "     always trim your string     ";
console.log(sample.trim());

let pad1 = "A";
console.log(pad1.padStart(4,"S"));

let pad2 = "S";
console.log(pad2.padEnd(4,"A"));

console.log(name.repeat(3));

console.log(sample.replace("trim","remove"));

let text = "Hello world, welcome to the universe.";
console.log(text.endsWith("world", 11));