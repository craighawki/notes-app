const chalk = require('chalk')
const fs = require('fs')

const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {  // if there are no duplicate notes  

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green.bold('New note added!'))
    } else {
        console.log(chalk.red.bold('Note title taken!'))
    }
}

const removeNote = function(title) { 
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title // keep the notes that do not match the title
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.bold('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.bold('No note found!'))
    }   
}

const saveNotes = function(notes) {     // save the notes to the file
    const dataJSON = JSON.stringify(notes) // convert to JSON
    fs.writeFileSync('notes.json', dataJSON) // write the file       

}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')  // read the file
        const dataJSON = dataBuffer.toString() // convert to string 
        return JSON.parse(dataJSON) // convert to JSON
    } catch (e) {
        return [] // if the file does not exist, return an empty array
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote    
}
