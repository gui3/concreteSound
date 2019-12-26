/*
* the logger
*/

const intel = require('intel')
const weit = require('weit')

require('../preboot/loadConfig')

weit(
  _ => process.env.LOG_LEVEL_T && process.env.LOG_LEVEL_F
).then(_ => {
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
        level: intel[process.env.LOG_LEVEL_T]
      },
      logfile: {
        class: intel.handlers.File,
        level: intel[process.env.LOG_LEVEL_F],
        file: './app/log/report.log',
        formatter: 'details'// ,
        // filters: ['db']
      }
    },
    loggers: {
      main: {
        handlers: ['terminal'],
        // level: intel.INFO,
        handleExceptions: true,
        exitOnError: false,
        propagate: false
      },
      'main.errors': {
        handlers: ['logfile']// ,
        // level: intel.ERROR
      }
    }
  })
}).catch(err => {
  throw err
})
