const express = require('express');
const app = express();
const path = require('path');
// eslint-disable-next-line new-cap
const router = express.Router();
const PORT = 3000;

// router.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// router.get('/auth', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/auth.html'));
// });

// router.get('/register', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/register.html'));
// });

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/dist'));

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// router.get('*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname + '/dist/404.html'));
// });

app.use('/', router);
app.listen(PORT);

console.log(`Running at Port ${PORT}`);
