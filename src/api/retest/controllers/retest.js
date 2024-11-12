'use strict';

/**
 * retest controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::retest.retest');
