const express = require('express');
const app = express();

const { notes } = require('./Develop/notes');

app.get('/index.html', (req, res) => {
    res.json(notes);
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });