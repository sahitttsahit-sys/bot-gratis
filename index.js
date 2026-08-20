const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint dasar agar UptimeRobot bisa melakukan ping
app.get('/', (req, res) => {
  res.send('Server bot aktif dan berjalan!');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
