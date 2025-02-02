const express = require('express');
const app = express();
// This line is crucial for parsing JSON requests
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body); 
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('No data received');
  }
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});