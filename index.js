const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
res.send('¡Hola mundo! Pipeline CI/CD multi-entorno operando con éxito.');
});
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});
