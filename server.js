// 📁 server.js (Punto de entrada HTTP)
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor ControlLabs corriendo en http://localhost:${PORT}`);
});