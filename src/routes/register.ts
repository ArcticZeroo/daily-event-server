import Router from '@koa/router';
import Koa from 'koa';

import { registerApiRoutes } from './api/routes.js';

export const registerRoutes = (app: Koa) => {
	const router = new Router();

	registerApiRoutes(router);

	app.use(router.routes())
		.use(router.allowedMethods());
};