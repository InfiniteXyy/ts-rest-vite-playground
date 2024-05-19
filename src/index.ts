import { createExpressEndpoints } from '@ts-rest/express';
import { generateOpenApi } from '@ts-rest/open-api';
import bodyParser from 'body-parser';
import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { contract } from './contract';
import { router } from './router';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(generateOpenApi(contract, { info: { title: 'Posts API', version: '1.0.0' } }))
);

createExpressEndpoints(contract, router, app);

if (import.meta.env.PROD) app.listen(3001);

export default app;
