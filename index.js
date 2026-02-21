const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('KIVA SERVER IS RUNNING');
});

app.listen(5000, () => {
  console.log('KIVA SERVER STARTED ON PORT 5000');
});