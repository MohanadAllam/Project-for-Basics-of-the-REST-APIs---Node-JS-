const express = require('express');
//npm install --save body-parser
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

//app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/JSON.

//We want to set these headers on any response that leaves our server
// The solution of CORS ERROR:
//CORS ERRORS: occur when using an API that doesnot set CORS Headers.
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers , Content-Type');
    next();
});

app.use('/feed' , feedRoutes);

app.listen(8080);