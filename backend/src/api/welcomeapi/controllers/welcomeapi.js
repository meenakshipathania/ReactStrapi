'use strict';

/**
 *  welcomeapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::welcomeapi.welcomeapi');
