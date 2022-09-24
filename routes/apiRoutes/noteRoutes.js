const router = require('express').Router();

const { findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

// load database as json on load
router.get('/notes', (req, res) => {
    res.json(notes);
});

// display saved note based on a generated id. if id not found due to any error, display 404
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// take note being saved, validate input fields, then save to our db.json using this POST req
router.post('/notes', (req, res) => {
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

// delete by id
router.delete('/notes', (req, res) => {
    deleteNote(req.params.id, notes);
    if (deleteNote) {
        res.json(notes);
    } else {
        res.send(404);
    }
});

module.exports = router;