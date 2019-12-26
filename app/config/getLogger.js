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
require('./loadEnv')

intel.config({
  formatters: {
    simple: {
      format: '[%(date)s] %(name)s.%(levelname)s: %(message)s',
      colorize: true
    }
  },
  handlers: {
    terminal: {
      class: intel.handlers.Console,
      'formatter': 'simple',
      'level': intel.VERBOSE
    },
    'logfile': {
      'class': intel.handlers.File,
      'level': intel.WARN,
      'file': '/var/log/report.log',
      'formatter': 'details',
      'filters': ['db']
    }
  },
  loggers: {
    'patrol': {
      'handlers': ['terminal'],
      'level': 'INFO',
      'handleExceptions': true,
      'exitOnError': false,
      'propagate': false
    },
    'patrol.db': {
      'handlers': ['logfile'],
      'level': intel.ERROR
    },
    'patrol.node_modules.express': { // huh what? see below :)
      'handlers': ['logfile'],
      'level': 'WARN'
    }
  }
})

function getLogger ({ id, level }) {
  id = id || 'main'
  level = level || process.env.LOG_LEVEL

  const logger = intel.getLogger(id)

  logger.setLevel(
    logger[level.toUpperCase()]
  )

  logger.verbose('logger "' + id + '" ready, level ' + level)

  return logger
}

module.exports = getLogger
