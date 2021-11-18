const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./models.js')

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.post('/login', (req, res) => {
    const {username, password} = req.body
    const sqlQuery = `SELECT * FROM users WHERE username='${username}' and password='${password}'`;
    db.query(sqlQuery, (err, response) => {
      if (response.rows[0]) res.cookie('id', response.rows[0].id).json({ login: true });
      else res.status(400).json({ login: false });
    });
  });

app.post('/register', (req, res) => {
    const {username, password, id} = req.body
    const sqlQuery = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
    db.query(sqlQuery, (err, response) => {
        if(err) {
            return res.status(400).json({ login: false });
        }
        return res.cookie('id', req.body.username).json({ login: true });
    })
  })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

app.listen(PORT, () => {
    console.log('Listening on port 3000');
})