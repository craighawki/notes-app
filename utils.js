console.log('utils.js')

const name = 'Jessica'

const add = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const multiply = function (a, b) {
    return a * b
}

const exponent = function (a,b) {
    return a ** b
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    exponent: exponent
}

