const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Nebojsa.');

fs.appendFileSync('./notes.txt', ' This is new line.');