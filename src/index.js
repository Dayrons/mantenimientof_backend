import express from 'express';
import chalk from 'chalk';

import {router} from './routes/route.js';

const app = express(); 

const PORT = 8000;

app.use('/api', router);

app.listen(PORT);

console.log(chalk.blue('Servidor corriendo en http://localhost:' + PORT));

