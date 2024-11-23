const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // 'public' es la carpeta con tu HTML

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor funcionando');
});
