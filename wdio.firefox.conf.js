// Let's load the default configs:
const defaults = require('./wdio.conf.js').config;

defaults.capabilities = [{
  // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  // grid with only 5 firefox instances available you can make sure that not more than
  // 5 instances get started at a time.
  maxInstances: 5,
  //
  browserName: 'firefox'
}];

// Send the merged config to wdio
exports.config = defaults;
