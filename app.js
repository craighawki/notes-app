const chalk = require('chalk')      // chalk module
const fs = require('fs')           // file system module    
const yargs = require('yargs')   // yargs module            
const notes = require('./notes.js')     

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
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },// describe is the description of the command
    handler (argv) {    // argv is the argument vector
        notes.addNote(argv.title, argv.body) // addNote is the function in notes.js
    }
})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler () {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler () {
        console.log(chalk.green.bold('Reading note'))
    }
})
// add, remove, read, list commands

yargs.parse()
// console.log(yargs.argv)



