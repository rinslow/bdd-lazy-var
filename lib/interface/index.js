let Mocha;

try {
  Mocha = require('mocha'); // eslint-disable-line
} catch (e) {
  // eslint-disable-line
}

let ui;

if (typeof jest !== 'undefined') {
  ui = require('./jest'); // eslint-disable-line
} else if (global.jasmine) {
  ui = require('./jasmine');  // eslint-disable-line
} else if (Mocha) {
  ui = require('./mocha'); // eslint-disable-line
}

if (!ui) {
  throw new Error(`
    Unable to detect testing framework. Make sure that
      * jest, jasmine or mocha is installed
      * jspec is included after "jasmine" or "mocha"
  `);
}

module.exports = ui;
