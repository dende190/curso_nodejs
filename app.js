const express = require('express');
const app = express();

const {config} = require('./config/configuracion');
const userRoute = require('./routes/user');

const {logErrors, errorHandler} = require('./utils/middleware/errorHandlers');

app.use(express.json());

// Middlewares
// Routes
userRoute(app);
// Middleware de error
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log('Servidor escuchando en el puerto', config.port);
});
