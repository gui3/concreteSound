const { BrowserWindow } = require('electron')

const loadSharedCss = require('./loadSharedCss')

// default window settings
const defaultProps = {
  width: 500,
  height: 800,
  show: false,

  // update for electron V5+
  webPreferences: {
    nodeIntegration: true
  }
}

class Window extends BrowserWindow {
  constructor ({ file, ...windowSettings }) {
    // calls new BrowserWindow with these props
    super({ ...defaultProps, ...windowSettings })

    this.loadFile(file)

    loadSharedCss()
      .then((css) => {
        console.log('---css :')
        console.log(css)
        this.webContents.insertCSS(css)
      })
      .catch(err => {
        throw err
      })

    this.webContents.openDevTools()

    // gracefully show when ready to prevent flickering
    this.once('ready-to-show', () => {
      this.show()
    })
  }
}

module.exports = Window
