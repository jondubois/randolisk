'use strict';

const BaseModule = require('lisk-framework/src/modules/base_module');

/* eslint-disable class-methods-use-this */

/**
 * Randolisk module specification
 *
 * @namespace Framework.Modules
 * @type {module.RandoliskModule}
 */
module.exports = class RandoliskModule extends BaseModule {
	static get alias() {
		return 'randolisk';
	}

	static get info() {
		return {
			author: 'Jonathan Gros-Dubois',
			version: '1.0.0',
			name: 'randolisk',
		};
	}

	static get migrations() {
		return [];
	}

	static get defaults() {
		return {};
	}

	get events() {
		return ['bootstrap'];
	}

	get actions() {
		return {};
	}

	async load(channel) {
		channel.publish('randolisk:bootstrap');
	}

	async unload() {
	}
};
