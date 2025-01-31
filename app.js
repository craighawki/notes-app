const chalk = require('chalk')
const getNotes = require('./notes.js')

const note = getNotes('This is my fugging note!')
console.log(note)

console.log(chalk.blue('Blue Chalk'))

console.log(chalk.bold.inverse.green('Blue Chalk'))
console.log(chalk.bold.strikethrough.italic.bgWhite.red('ERROR ERROR ERROR!!!!'))
console.log(chalk.inverse.dim.underline.magentaBright('Almost sprintime'))