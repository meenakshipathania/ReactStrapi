'use strict';

/**
 * nested-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nested-page.nested-page');
