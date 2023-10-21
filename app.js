const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Konfigurasi Multer untuk mengunggah foto
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Direktori penyimpanan foto
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Menghubungkan ke database MongoDB
mongoose.connect('mongodb://localhost/movies_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Menggunakan rute untuk movies
app.use('/movies', movieRoutes);

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
