const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

router.get('/start', (req, res) => {
  res.sendFile(__dirname + '/start.html');
});
router.get('/down', (req, res) => {
  res.sendFile(__dirname + '/countdown.html');
});

module.exports = router;
