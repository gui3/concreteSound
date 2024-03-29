/*
*   !!! here is the MAIN PROCESS
*   !!! the actual entry point is app.js
*     (this choice because app.js deals with electron.app)
*/

// const path = require('path')

const {
  getLogger,
  loadConfig
} = require('./shared/utils')
const logger = getLogger('main')
loadConfig()

const splash = require('./splash/splash')
const StandardWindow = require('./shared/helpers/StandardWindow')

function main () {
  logger.debug('Initialize main process ...')

  let splashScreen = splash()
  // spitting out the daemons

  let mainWindow = new StandardWindow({
    devTools: true,
    file: 'app/main.html',
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    },
    onDidFinishLoad: _ => {
      if (!process.env.KEEP_SPLASH) splashScreen.close()
      splashScreen = null
    }
  })

  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  logger.info('mainWindow ready !')
  logger.debug('...main process OK')
}

module.exports = main
