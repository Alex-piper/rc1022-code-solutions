const express = require('express');
const app = express();

app.use((req, res) => {
  console.log(req);
  res.send('hola mundo');
});

app.listen(3000, console.log('app listening on port 3000'));
