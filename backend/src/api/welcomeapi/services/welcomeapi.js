'use strict';

/**
 * welcomeapi service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcomeapi.welcomeapi');
