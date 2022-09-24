const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// take new note being saved through POST req, stringify it, then write it to our db.json 
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

// validate note title and text
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
};

module.exports = {
    findById,
    createNewNote,
    validateNote
}