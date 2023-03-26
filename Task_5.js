// Option №1

let arr1 = ["I", "l", "o", "v", "e"];
console.log(`Number of array elements: ${arr1.length}`);

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// Option №2

const arr2 = ["S", "k", "i", "l", "l", "F", "a", "c", "t", "o", "r", "y"];
console.log(`Number of array elements: ${arr2.length}`);

arr2.forEach(function(item, index, array) {
  console.log(`item: ${item}, index: ${index}`);
})