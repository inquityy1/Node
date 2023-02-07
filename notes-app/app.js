// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {
    console.log('Removing note!');
};





// const msg = chalk.underline(getNotes('Your notes...'));
// console.log(msg);
// const greenMsg = chalk.red.inverse.bold('Error!');
// console.log(greenMsg);
// console.log(process.argv[2]);
// console.log(validator.isURL('https/mead.io'));
// const {firstName, add} = require('./utils.js');
// const sum = add(4, -2);
// console.log(firstName);
// console.log(sum);