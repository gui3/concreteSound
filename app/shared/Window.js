const { BrowserWindow } = require('electron')
const path = require('path')

const loadCss = require('./loadCss')

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
    this.webContents.on('did-finish-load', function () {
      loadCss(this, path.join(__dirname, 'shared.css'))
    })

    this.webContents.openDevTools()

    // gracefully show when ready to prevent flickering
    this.once('ready-to-show', () => {
      this.show()
    })
  }
}

module.exports = Window
