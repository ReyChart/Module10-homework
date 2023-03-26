// Option №1

let str1 = "Hello";

str1 = str1.split("").reverse("").join("");
console.log(str1);

// Option №2

let str2 = "Hello";
let strRev = "";

for (let i = str2.length-1; i >= 0; i--) {
  strRev += str2[i];
}
console.log(strRev);