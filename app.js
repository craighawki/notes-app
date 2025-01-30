const validator = require('validator')
const getNotes = require('./notes.js')

const note = getNotes('This is my fugging note!')
console.log(note)

console.log(validator.isURL('https://adobe.com'))

