import express from 'express';
const router = express.Router();

router.get('/mantenimiento', function(req, res) {
  res.send('Obtener todos los mantenimientos');
});



export{router};