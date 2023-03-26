// Option №1

let array1 = ["s", "s", "s", "s", "s"];
let result1 = true;

for (let i = 1; i < array1.length; i++) {
  if (array1[i] !== array1[0]) {
    result1 = false;
  }
}
if (result1) {
  console.log("Item in the array are the same");
} else {
  console.log("Item in the array are the not same ");
}

// Option №2

let array2 = [1, 2, 3, 4, 5];
let result2 = array2.every(function(item, index, array) {
  return item === array2[0];
});
if (result2) {
  console.log("Item in the array are the same");
} else {
  console.log("Item in the array are the not same");
}