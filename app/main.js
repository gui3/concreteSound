/*
*   !!! here is the MAIN PROCESS
*   !!! the actual entry point is app.js
*     (this choice because app.js deals with electron.app)
*/

// const path = require('path')

const preboot = require('./config/preboot')
const getLogger = require('./config/getLogger')
const getProcessId = require('./getProcessId')

const splash = require('./splash/splash')
const StandardWindow = require('./shared/helpers/StandardWindow')

function main () {
  preboot()
  const processId = getProcessId('main')
  const logger = getLogger(processId)

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
