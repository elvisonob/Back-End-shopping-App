const express = require('express');
const items = require('../controllers/getItems-controller');

const router = express.Router();

router.get('/items', items.getAllItems);

module.exports = router;
