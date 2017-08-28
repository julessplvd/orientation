const { readFile } = require('fs');

readFile(process.argv[2], (err, data
) => {
    if (err) console.log(err);
    process.stdout.write(String(data));
});
