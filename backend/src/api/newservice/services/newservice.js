'use strict';

/**
 * newservice service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newservice.newservice');
