import Router from '@koa/router';
import { attachRouter } from '../../util/koa.js';
import { validateConfigSettingsAndSetDefaults } from '../../models/config.js';
import { createConfiguration, retrieveConfigurationById } from '../../api/configurations.js';

export const registerConfigRoutes = (parent: Router) => {
    const router = new Router({
        prefix: '/config'
    });

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
        const id = ctx.params.id;
        if (!id) {
            ctx.throw(400, 'Missing id');
            return;
        }

        const viewKey = ctx.query.viewKey;
        if (!viewKey || typeof viewKey !== 'string') {
            ctx.throw(400, 'Missing view key');
        }

        const config = await retrieveConfigurationById(id);
        if (!config) {
            ctx.throw(404, 'Config not found');
            return;
        }

        if (config.viewKey !== viewKey) {
            ctx.throw(403, 'Invalid view key');
            return;
        }

        ctx.body = JSON.parse(config.configJson);
    });

    attachRouter(parent, router);
};