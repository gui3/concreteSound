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

class StandardWindow extends BrowserWindow {
  constructor ({ file, ...windowSettings }, onDidFinishLoad, onReadyToShow) {
    // calls new BrowserWindow with these props
    super({ ...defaultProps, ...windowSettings })

    this.loadFile(file)

    this.webContents.openDevTools()

    this.webContents.on('did-finish-load', () => {
      loadCss(this, path.join(__dirname, 'shared.css'))
      if (onDidFinishLoad) onDidFinishLoad()
    })

    // gracefully show when ready to prevent flickering
    this.once('ready-to-show', () => {
      this.show()
      if (onReadyToShow) onReadyToShow()
    })
  }
}

module.exports = StandardWindow
