const chalk = require('chalk')
const getNotes = require('./notes.js')

const note = getNotes('This is my fugging note!')
console.log(note)

console.log(chalk.blue('Blue Chalk'))
const redMsg = chalk.yellow('Nice!')
console.log(redMsg)

console.log(chalk.magenta.bold(process.argv[5]))
const rgbBrown = (chalk.rgb(97, 121, 21, 1).bold('Hello Craig!'))
console.log(rgbBrown)