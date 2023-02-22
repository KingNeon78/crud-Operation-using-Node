const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api');
app.use(bodyParser.json());
app.use('/usingscrud',api);
exports.server = app.listen(3000,()=>{
  console.log('hello world');
});