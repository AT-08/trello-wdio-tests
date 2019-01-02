// Let's load the default configs:
let defaults = require('./wdio.conf.js').config;
let environment = require('./environment.json');

//
// =================
// Service Providers
// =================
// WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
// should work too though). These services define specific user and key (or access key)
// values you need to put in here in order to connect to these services.
//
defaults.user = environment.saucelabs.user;
defaults.key = environment.saucelabs.key;

defaults.services = ['sauce', 'screenshots-cleanup'];

// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
defaults.capabilities = [{
  browserName: environment.saucelabs.browserName,
  platform: environment.saucelabs.platform,
  version: environment.saucelabs.version
}];

exports.config = defaults;
