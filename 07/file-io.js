const { readFileSync } = require('fs');

console.log(readFileSync(process.argv[2]).toString());