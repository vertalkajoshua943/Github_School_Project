const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/your-data', (req, res) => {
  const data = req.body;

  // Add your server-side logic here

  res.send({ message: 'Your data is processed and sent to the frontend.' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
