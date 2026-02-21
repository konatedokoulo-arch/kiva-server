const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('KIVA SERVER IS RUNNING');
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`KIVA SERVER STARTED ON PORT ${PORT}`);
});