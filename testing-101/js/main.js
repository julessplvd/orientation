const sqlite3  = require('sqlite3');
const db = new sqlite3.Database('acme.sqlite', (check) => {
  console.log("Connection open?", check);
});
db.on('open', () => console.log("Db emitted open event"));

module.exports.getCustomer = (num) => {
  return new Promise ( (resolve, reject) => {
    db.get(`SELECT first_name, last_name FROM customers WHERE phone = "${num}"`, (err, customer) => {
      if (err) {
        console.log(err.toString())
        reject( err );
      }
      console.log('customer?', customer);
      resolve(customer);
    });
  })
};

