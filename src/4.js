const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse requests of content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// create a new route for the root directory
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start the server
const port = 3000;
http.createServer(app).listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
