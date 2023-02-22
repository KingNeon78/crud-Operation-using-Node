const express = require('express');
const router = express.Router();
const {first,createRecord,updateRecord, deleteRecord } = require('./controler/index')

router.get('/',first );
router.post('/create',createRecord);
router.post('/update',updateRecord);
router.post('/delete',deleteRecord);
module.exports = router;
