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
    console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = function(title) {    
    console.log(chalk.red.bold('Removing note'))
    console.log(chalk.blue(title))
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
