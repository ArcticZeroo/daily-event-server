import { Configuration } from '@prisma/client';

import { prismaClient } from './prisma.js';
import { IConfigSettings } from '../models/config.js';

export const retrieveConfigurationById = async (id: string): Promise<Configuration | null> => {
	return prismaClient.configuration.findUnique({ where: { id } });
};

export const createConfiguration = async (config: IConfigSettings): Promise<Configuration> => {
	return prismaClient.configuration.create({data: {configJson: JSON.stringify(config)}});
};