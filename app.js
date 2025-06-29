const express = require('express');
//npm install --save body-parser

const feedRoutes = require('./routes/feed');

const app = express();

app.use('/feed' , feedRoutes);

app.listen(8080);