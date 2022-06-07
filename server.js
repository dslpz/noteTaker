const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./Develop/notes');

app.get('/notes', (req, res) => {
    res.json(db.notes);
  });

  app.get('/notes', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(results);
  });

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });