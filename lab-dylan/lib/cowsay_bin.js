// Terminal Utility Attempt
const cowsay = require('./cowsay');
console.log(cowsay(process.argv.splice(2).join(' ')));
