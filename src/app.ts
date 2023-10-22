import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import { registerRoutes } from './routes/register.js';

const app = new Koa();

app.use(json());
app.use(bodyParser());

registerRoutes(app);

export { app };