/*
* the logger
*/

const intel = require('intel')
// const weit = require('weit')

require('./logger.config')

function getLogger (id = 'main', level = 'trace') {
  const logger = intel.getLogger(id)

  return logger
}

module.exports = getLogger
