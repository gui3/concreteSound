/*
*   !!! here is the MAIN PROCESS
*   !!! the actual entry point is app.js
*     (this choice because app.js deals with electron.app)
*/

const path = require('path')

const StandardWindow = require('./shared/helpers/StandardWindow')
const loadCss = require('./shared/helpers/loadCss')

function main () {
  let splashScreen = new StandardWindow({
    file: 'app/splash/splash.html',
    width: 400,
    height: 170,
    frame: false,
    resizable: false
  })

  splashScreen.show() // first things first

  loadCss(splashScreen, path.join(__dirname, 'splash', 'splash.css'))

  // Create the browser window.
  let mainWindow = new StandardWindow({
    devTools: true,
    file: 'app/main.html',
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    },
    onDidFinishLoad: _ => {
      // splashScreen.close()
      splashScreen = null
      console.log('splash closed')
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
