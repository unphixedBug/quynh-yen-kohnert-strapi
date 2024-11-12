'use strict';

/**
 * test-ultime service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-ultime.test-ultime');
