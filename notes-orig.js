const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function() {
//     return 'Your notes...'
// }

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if(findNote){
        console.log(chalk.blue.inverse(findNote.title + ":") + " " + findNote.body)

    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.blue.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('There was no matching note to remove'))
    }

    
}

const noteRemove = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
}

// const saveNotes = function (notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
    }


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// const loadNotes = function () {
// try {
//     const dataBuffer = fs.readFileSync('notes.json')
//     const dataJSON = dataBuffer.toString()
//     return JSON.parse(dataJSON)
// } catch (e) {
//     return []
// }
    
// }
const loadNotes = () => {
try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
} catch (e) {
    return []
}
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}