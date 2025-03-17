const chalk = require('chalk')  // chalk module
const fs = require('fs')    // file system module

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title) // find the note that has the same title   

    if (!duplicateNote) {  // if there are no duplicate notes  
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

const removeNote = (title) => { 
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title) // filter the notes that do not have the same title
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.bold('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.bold('No note found!'))
    }   
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('Your notes:'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('Reading note'))
    const note = notes.find((note) => note.title === title) // find the note that has the same title
    if (note) {
        console.log(chalk.magenta.bold(note.title))
        console.log(chalk.green.bold(note.body))
    } else {
        console.log(chalk.red.bold('Note not found'))
    }
}

const saveNotes = (notes) => {     // save the notes to the file
    const dataJSON = JSON.stringify(notes) // convert to JSON
    fs.writeFileSync('notes.json', dataJSON) // write the file       

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')  // read the file
        const dataJSON = dataBuffer.toString() // convert to string 
        return JSON.parse(dataJSON) // convert to JSON
    } catch (e) {
        return [] // if the file does not exist, return an empty array
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote   
}
