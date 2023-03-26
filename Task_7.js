let arr = [0, null, undefined, 1, 2, 3, 4, 5, 6, "s", "k"];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
let otherCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i]  !== 0 && typeof(arr[i]) !== 'number') {
    otherCount++;
  } else if (arr[i] === 0) {
    zeroCount++;
  } else if (arr[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log(`Even elements: ${evenCount}`);
console.log(`Odd elements: ${oddCount}`);
console.log(`Zero elements: ${zeroCount}`);
console.log(`Other elements: ${otherCount}`);