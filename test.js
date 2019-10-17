const bunyan = require('./index.js');

let logger = bunyan.createLogger({
  name: 'log',
});
logger.info('abc123');
logger.error('abc123');
