const fruits = ["apple", "banana", "pear"];

for (const fruit of fruits) {
  console.log(fruit);
}

// const button = document.querySelector("button")

// button.onclick = function () {
//     let name = prompt("what is your name");
//     alert("Hello " + name + ", nice to see you");
// }

let myNumber = "500"; // oops, this is still a string
console.log(typeof myNumber);
myNumber = 500; // much better — now this is a number
console.log(typeof myNumber);

let myInt = 5;
let myFloat = 6.667;
console.log(typeof myInt);
console.log(typeof myFloat);

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent == "Start machine") {
//     btn.textContent = "Stop machine";
//     txt.textContent = "The machine is started.";
//   } else {
//     btn.textContent = "Start machine";
//     txt.textContent = "The machine is stopped.";
//   }
// }

// const button = document.querySelector("button");

// function greet(){
//     const name = "Murmansk";
//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = button.textContent + `${name}`;
// }

// button.addEventListener("click", greet);

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
const bigmouth = 'I\'ve got no right to take my place…';

console.log(goodQuotes1);
console.log(goodQuotes2);
console.log(bigmouth);


let browserType = "mozilla";
console.log(browserType.length);
console.log(browserType[browserType.length - 1]);
console.log(browserType.indexOf("mozilla"));
console.log(browserType.slice(0, 3));
console.log(browserType.slice(2));


let radData = "My NaMe Is MuD";
// console.log(radData.toLowerCase());
// console.log(radData.toUpperCase());


console.log(radData.replace("My ", "abc"))


myArray = ["BeiJing", "ShangHai"];
myLength = myArray.unshift("Edinburgh");
console.log(myArray);
console.log(myLength);


let cheese = "Cheddar";

if (cheese) {
  console.log("耶！这里有一些制作奶酪吐司的奶酪。");
} else {
  console.log("今天你的吐司上没有奶酪了。");
}