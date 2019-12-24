/*
* The main logger
*
* log levels :
* intel.TRACE // intel.trace() 6
* intel.VERBOSE // intel.verbose() 5
* intel.DEBUG // intel.debug() 4
* intel.INFO // intel.info()3
* intel.WARN // intel.warn()2
* intel.ERROR // intel.error() 1
* intel.CRITICAL // intel.critical() 0
*/

const intel = require('intel')

function getLogger (id, level) {
  const logger = intel.getLogger(id)

  logger.setLevel(
    logger[
      level ||
      process.env.LOG_LEVEL.toUpperCase()
    ]
  )

  logger.verbose(
    'logger ' + id + ' ready, level ' +
    process.env.LOG_LEVEL
  )

  return logger
}

module.exports = getLogger
