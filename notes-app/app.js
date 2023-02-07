// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = chalk.underline(getNotes('Your notes...'));
console.log(msg);

const greenMsg = chalk.green.inverse.bold('Success!');
console.log(greenMsg);

// console.log(validator.isURL('https/mead.io'));

// const {firstName, add} = require('./utils.js');
// const sum = add(4, -2);
// console.log(firstName);
// console.log(sum);