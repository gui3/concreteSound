/*
* the logger
*/

const intel = require('intel')

require('./loadConfig')()

intel.config({
  formatters: {
    simple: {
      format: '[%(levelname)s] %(message)s',
      colorize: true
    },
    details: {
      format: '[%(date)s] %(name)s.%(levelname)s: %(message)s',
      strip: true
    }
  },
  // filters: {
  //   db: 'main.db'
  // },
  handlers: {
    terminal: {
      class: intel.handlers.Console,
      formatter: 'simple',
      level: intel[process.env.LOG_LEVEL_T.toUpperCase()]
    },
    logfile: {
      class: intel.handlers.File,
      level: intel[process.env.LOG_LEVEL_F.toUpperCase()],
      file: './app/log/report.log',
      formatter: 'details'// ,
      // filters: ['db']
    }
  },
  loggers: {
    main: {
      handlers: ['terminal', 'logfile'],
      // level: intel[process.env.LOG_LEVEL_T.toUpperCase()],
      handleExceptions: true,
      exitOnError: false,
      propagate: false
    },
    'main.logfile': {
      handlers: ['logfile']// ,
      // level: intel[process.env.LOG_LEVEL_F.toUpperCase()]
    }
  }
})

function getLogger (id = 'main') {
  const logger = intel.getLogger(id)

  return logger
}

module.exports = getLogger
