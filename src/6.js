import express from 'express';
import path from 'path';
import { json } from 'body-parser';
const app = express();
app.use(json());
app.post('/api/data', (req, res) => {
const data = req.body;
res.send({ message: 'Data received' });
});
app.listen(3000, () => console.log('Server started on port 3000'));