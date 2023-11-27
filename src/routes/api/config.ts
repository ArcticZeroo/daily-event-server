import Router from '@koa/router';
import { Configuration } from '@prisma/client';

import {
	createConfiguration, retrieveConfigurationById 
} from '../../api/configurations.js';
import { executeConfigForToday } from '../../api/events.js';
import { validateConfigSettingsAndSetDefaults } from '../../models/config.js';
import { attachRouter } from '../../util/koa.js';

const validateAndGetConfigEntry = async (ctx: Router.RouterContext, requireViewKey: boolean = false): Promise<Configuration> => {
	const id = ctx.params.id;
	if (!id) {
		ctx.throw(400, 'Missing id');
	}

	const config = await retrieveConfigurationById(id);
	if (!config) {
		ctx.throw(404, 'Config not found');
	}

	if (requireViewKey) {
		const viewKey = ctx.query.viewKey;
		if (!viewKey || typeof viewKey !== 'string') {
			ctx.throw(400, 'Missing view key');
		}

		if (config.viewKey !== viewKey) {
			ctx.throw(403, 'Invalid view key');
		}
	}

	return config;
};

export const registerConfigRoutes = (parent: Router) => {
	const router = new Router({prefix: '/config'});

	router.post('/', async ctx => {
		const body = ctx.request.body;

		if (!body || typeof body !== 'object') {
			ctx.throw(400, 'Missing/invalid body');
			return;
		}

		if (!validateConfigSettingsAndSetDefaults(body)) {
			ctx.throw(400, 'Invalid body');
			return;
		}

		const createdConfig = await createConfiguration(body);

		ctx.body = {
			id:      createdConfig.id,
			viewKey: createdConfig.viewKey
		};
	});

	router.get('/:id', async ctx => {
		const configEntry = await validateAndGetConfigEntry(ctx, true /*requireViewKey*/);

		ctx.body = JSON.parse(configEntry.configJson);
	});

	router.get('/:id/today', async ctx => {
		const configEntry = await validateAndGetConfigEntry(ctx);
		const configSettings = JSON.parse(configEntry.configJson);
		ctx.body = await executeConfigForToday(configSettings);
	});

	attachRouter(parent, router);
};