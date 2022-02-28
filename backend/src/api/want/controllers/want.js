'use strict';

/**
 *  want controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::want.want');
