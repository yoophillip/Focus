const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./db/database.js')








app.listen(3000, () => {
    console.log('Listening on port 3000');
})