/*
*   !!! here is the MAIN PROCESS
*   !!! the actual entry point is app.js
*     (this choice because app.js deals with electron.app)
*/

// const path = require('path')

const logger = require('./shared/logger/getLogger')()

const splash = require('./splash/splash')
const StandardWindow = require('./shared/helpers/StandardWindow')

function main () {
  logger.verbose('Initialize main process ...')

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

  logger.verbose('mainWindow ready')
}

module.exports = main
