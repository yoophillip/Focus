const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./db/database.js')

app.use(express.json());
app.use(cookieParser());


app.use('/build', () => {
    // console.log('inside build');
    express.static(path.join(__dirname, '../build'));
  });








  

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });




app.listen(3000, () => {
    console.log('Listening on port 3000');
})