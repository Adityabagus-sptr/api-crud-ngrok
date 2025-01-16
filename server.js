const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3001; // Mengubah port default ke 3001

// Middleware
app.use(cors());
app.use(express.json()); // Mengganti bodyParser.json()

// Menggunakan router untuk auth
app.use('/auth', authRoutes);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});