const express = require('express');
const app = express();
const data = require('./db.json');

// Middleware para parsear JSON
app.use(express.json());

// Ruta para obtener todos los usuarios
app.get('/users', (req, res) => {
  res.status(200).json(data.users);
});

// Ruta para obtener un usuario por ID
app.get('/users/:id', (req, res) => {
  const user = data.users.find(u => u.id === parseInt(req.params.id, 10));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Exportar la app
module.exports = app;

// Solo iniciar el servidor si el archivo se ejecuta directamente
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}
