const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Crud')
  .then(() => console.log('Connected!')).catch((DataBaseErr)=> {
    console.log('DataBaseErr',DataBaseErr);
  });