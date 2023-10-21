const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Rute untuk mengunggah foto
router.post('/upload-photo', movieController.uploadPhoto);

// Rute CRUD lainnya
// ...

module.exports = router;
