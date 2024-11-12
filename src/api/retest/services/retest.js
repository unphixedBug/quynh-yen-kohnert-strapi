'use strict';

/**
 * retest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::retest.retest');
