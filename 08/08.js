const { readFile } = require('fs');

console.log(String(readFile(process.argv[2])));

readFile(process.argv[2], (err, data) => {
    if (err) console.log(err);
    process.stdout.write(String(data));
});
