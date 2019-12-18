/*
*   !!! here is the MAIN PROCESS
*   !!! the actual entry point is app.js
*     (this choice because app.js deals with electron.app)
*/

// const path = require('path')

const StandardWindow = require('./shared/helpers/StandardWindow')
const splash = require('./splash/splash')

function main () {
  let splashScreen = splash()
  const keepSplashScreen = true // uncomment for debugging

  let mainWindow = new StandardWindow({
    devTools: true,
    file: 'app/main.html',
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    },
    onDidFinishLoad: _ => {
      if (!keepSplashScreen) splashScreen.close()
      splashScreen = null
    }
  })

  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

module.exports = main
