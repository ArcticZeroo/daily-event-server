import Router from '@koa/router';

import { registerConfigRoutes } from './config.js';
import { attachRouter } from '../../util/koa.js';

export const registerApiRoutes = (parent: Router) => {
	const router = new Router({prefix: '/api'});

	registerConfigRoutes(router);

	attachRouter(parent, router);
};