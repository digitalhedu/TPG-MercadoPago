const express = require('express');
const router = express.Router();
const {process,feedback} = require('../controllers/checkout.controller');
router.post('/process',process)
router.get('/feedback',feedback)
module.exports = router