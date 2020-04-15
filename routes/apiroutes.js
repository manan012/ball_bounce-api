const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/calculate', adminController.calculate);
router.get('/history', adminController.history);

module.exports = router;