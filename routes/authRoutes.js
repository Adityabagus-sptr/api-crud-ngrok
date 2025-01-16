const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Pastikan authController.login ada dan diexport dengan benar
router.post('/login', authController.login);

module.exports = router;