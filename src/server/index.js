const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/public", express.static(path.join(__dirname, '../../public')));
app.use('/wepback', express.static(path.join(__dirname, '../../dist')));


app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '../../public/index.html')));

app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(errstatus || 500).send(err.message || 'Internal server error');
  next();
}); 

const port = process.env.PORT || 3000; 

app.listen(3000, () => console.log('Listening on 3000'));

module.exports = app;