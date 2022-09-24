const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require('./db/db.json');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse inc sstring or data array
app.use(express.urlencoded({ extended: false }));
// parse inc JSON data
app.use(express.json());
// load static files
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});