const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coin');
const { isAuthenticated } = require('../middleware/auth');

router.get('/', isAuthenticated, coinController.getAllCoinPrices);

module.exports = router;
