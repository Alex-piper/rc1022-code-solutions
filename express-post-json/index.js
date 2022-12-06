const express = require('express');

const app = express();
const mWare = express.json();

let nextId = 1;
const grades = {};

app.use(mWare);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const assigned in grades) {
    gradesArray.push(grades[assigned]);
  }
  res.status(200).send(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const { name, course, grade } = req.body;
  const earnedScores = { name, course, grade, id: nextId };
  grades[nextId] = earnedScores;
  nextId++;
  res.status(201).send(earnedScores);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
