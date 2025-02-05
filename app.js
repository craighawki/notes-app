const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true, // title is required
            type: 'string'
        }
    },// describe is the description of the command
    handler: function(argv) {
        console.log('Adding a new note!', argv.title)
    }
})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function() {
        console.log('Listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading note')
    }
})
// add, remove, read, list commands

yargs.parse()
// console.log(yargs.argv)



