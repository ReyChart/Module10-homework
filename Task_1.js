let input = prompt ('Please enter the value');
let number = +input;

if (typeof(number) === 'number' && !isNaN(number) && number !== 0) {
  if (number % 2 === 0) {
    console.log ('The number is even');
  } else {
    console.log ('The number is odd');
  }
} else {
  console.log ('Oops, it seems you made a mistake');
}