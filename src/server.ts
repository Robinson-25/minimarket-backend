import app from './app';
import { env } from './config/env';
import { iniciarColaEnvios } from './modules/facturacion/cola-envios';

app.listen(env.PORT, () => {
  console.log(`API lista en http://localhost:${env.PORT}`);
  iniciarColaEnvios();
});
