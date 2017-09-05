const sqlite3 = require('sqlite3');
const { createTables } = require('./table');

(function createDb() {
  new sqlite3.Database('acme.sqlite', createTables);
}());