const dsv = require('./webpack.dsv.config.js');
const hml = require('./webpack.hml.config.js');
const prd = require('./webpack.prd.config.js');

let config;

switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = dsv;
    break;
  case 'build:hml':
    config = hml;
    break;
  case 'build:prd':
    config = prd;
    break;
  default:
    config = dsv;
    break;
}

module.exports = config;
