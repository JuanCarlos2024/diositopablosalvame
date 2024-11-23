const express = require('express');
const app = express();
const path = require('path');

// Sirve archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Puerto proporcionado por Azure
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
