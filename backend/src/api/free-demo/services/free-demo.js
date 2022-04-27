'use strict';

/**
 * free-demo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-demo.free-demo');
