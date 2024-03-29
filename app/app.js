/*
*   concreteSound
*   Licensed under GNU-GPLv3 <http://www.gnu.org/licenses/gpl.html>
*   Feel free to contribute !
*     https://github.com/gui3/concreteSound
*     guillaume.silvent@hotmail.fr
*/

const { app, ipcMain } = require('electron')

const main = require('./main')

// macOs non UI
// app.on('will-finish-launching', core)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', main)

ipcMain.on('quitApp', function (event, data) {
  app.quit()
  // event.sender.send('actionReply', result)
})

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
