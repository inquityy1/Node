const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes('Your notes...');

console.log(msg);

console.log(validator.isURL('https/mead.io'));

// const {firstName, add} = require('./utils.js');
// const sum = add(4, -2);
// console.log(firstName);
// console.log(sum);