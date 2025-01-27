const getNotes = require('./notes.js')
const mathUtils = require('./utils')

const note = getNotes('This is my fugging note!')
const add = mathUtils.add(3,4)
const subtract = mathUtils.subtract(40, 3)
const multiply = mathUtils.multiply(30,3)
const exponent = mathUtils.exponent(3,3)

console.log(note)
console.log(add)
console.log(subtract)
console.log(multiply)
console.log(exponent)

// const add = require('./utils.js')

// const sum = add(1,1)

// console.log(sum)

