#!/usr/bin/env node

let arg = process.argv[3];

let [,, ...args] = process.argv;

let numbers = args.map(Number);

let add = numbers.reduce(function(a, b) { return a + b});
console.log(add);






