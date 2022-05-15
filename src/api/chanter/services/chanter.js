'use strict';

/**
 * chanter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chanter.chanter');
