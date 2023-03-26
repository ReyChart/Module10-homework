let x = 5;

switch (typeof(x)) {
  case 'number':
    console.log ('x — number');
    break;
  case 'string':
    console.log ('x — string');
    break;
  case 'boolean':
    console.log ('x — boolean');
    break;
  default:
    console.log ('type X is not defined');
}