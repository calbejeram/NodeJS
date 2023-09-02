import { add, subtract, multiply, divide } from './simplenode.js';

// const compute = require('./simplenode.js');

var x = 10;
var y = 20;
console.log(`Sum : ${add(x ,y)}`);
console.log(`Difference : ${subtract(x ,y)}`);
console.log(`Product : ${multiply(x ,y)}`);
console.log(`Quotient : ${divide(x ,y)}`);