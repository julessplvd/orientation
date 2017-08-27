const { readFile, createReadStream, createWriteStream, appendFile, writeFile } = require('fs');

const { Transform, Writable } = require('stream');

const langStream = createReadStream('languages.json');

const makeUpperCase = Transform();
const writeStream = Writable();

makeUpperCase._transform = (buffer, _, callback) => {
    callback(null, buffer.toString().toUpperCase());
};

writeStream._write = (buffer, _, next) => {
    writeFile('languages_caps.json', buffer, (err) => {
        if (err) throw err;
        console.log('added uppercase languages')
    });
    next();
};

langStream
.pipe(makeUpperCase)
.pipe(writeStream);


