const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
// parse inc sstring or data array
app.use(express.urlencoded({ extended: false }));
// parse inc JSON data
app.use(express.json());
// load static files
app.use(express.static('public'));

const { notes } = require('./db/db.json');

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
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
}

// take new note being saved through POST req, stringify it, then write it to our db.json 
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

// load database as json on load
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// display saved note based on a generated id. if id not found due to any error, display 404
app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// take note being saved, validate input fields, then save to our db.json using this POST req
app.post('/api/notes', (req, res) => {
    // set id based on random generator + next index of array
    req.body.id = Math.floor(Math.random() * 99) + notes.length.toString();
    // validate req.body, else send 400. if valid, add note to JSON and notes array through function
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);    
    }
});

// route poiting to /notes to display notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

// route pointing to root to display index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});