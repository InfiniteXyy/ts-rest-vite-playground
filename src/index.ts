import { createExpressEndpoints } from '@ts-rest/express';
import bodyParser from 'body-parser';
import express from 'express';
import { contract } from './contract';
import { router } from './router';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

createExpressEndpoints(contract, router, app);

if (import.meta.env.PROD) app.listen(3000);

export const viteNodeApp = app;
