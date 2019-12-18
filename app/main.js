const { app } = require('electron')
const path = require('path')

const StandardWindow = require('./shared/StandardWindow')
const loadCss = require('./shared/loadCss')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

function main () {
  let splashScreen = new StandardWindow({
    file: 'app/splash/splash.html',
    width: 400,
    height: 170,
    frame: false
  })

  splashScreen.show() // first things first

  loadCss(splashScreen, path.join(__dirname, 'splash', 'splash.css'))

  // Create the browser window.
  let mainWindow = new StandardWindow({
    file: 'app/main.html',
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    }
  }, () => { // onDidFinishLoad
    splashScreen.close()
    splashScreen = null
    console.log('splash closed')
  })

  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', main)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (main === null) main()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
