'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('company.sqlite', (err) => console.log('Connected!'));

// db.run('DROP TABLE employees')
db.run(`DROP TABLE IF EXISTS employees`);

const createEmployeesTable = () => {
  db.run('CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)');
};
createEmployeesTable();

const populateEmployees = () => {
  const { employee } = require('./company.json');

  employee.forEach( (employee) => {
    db.run(`INSERT INTO employees VALUES(
      ${employee.id},
      "${employee.firstName}",
      "${employee.lastName}",
      "${employee.jobTitle}",
      "${employee.address}",
      "${employee.salary}")`
    )
  })
};
populateEmployees();

db.each('SELECT * FROM employees', (err, { id, firstName, lastName, jobTitle, address, salary}) => {
  if (err) {
    return console.log(err.toString());
  }
  // Write a statement to query the database and console.log() all employee records.  
  console.log(`${id} ${firstName} ${lastName} ${jobTitle} ${address} ${salary}`);
});

db.each('SELECT jobTitle FROM employees', (err, { jobTitle }) => {
  if (err) {
    return console.log(err.toString());
  }
  // Write a statement to query the database and console.log() each employees jobTitle.
  console.log(`${jobTitle}`);
});

db.each('SELECT firstName, lastName, address FROM employees', (err, {firstName, lastName, address}) => {
  if (err) {
    return console.log(err.toString());
  }
  // Write a statement to query the database and console.log() each employees firstName, lastName and address only.
  console.log(`${firstName} ${lastName} ${address}`);
});

db.each('SELECT firstName, jobTitle FROM employees WHERE jobTitle = "Baker"', (err, {firstName, jobTitle}) => {
  if (err) {
    return console.log(err.toString());
  }
  // Write a statement that returns all employees of a specified `jobTitle`.
  console.log(`${firstName} is a ${jobTitle}`);
});



