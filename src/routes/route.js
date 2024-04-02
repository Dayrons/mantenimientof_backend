import express from 'express';
import { pool } from '../config/databases.js';
const router = express.Router();

router.get('/mantenimiento', async (req, res)=> {

  const [result] = await pool.query('SELECT * FROM tipos_mantenimiento');
  res.json(result);

});



export{router};