const { BrowserWindow } = require('electron')
const path = require('path')

const loadCss = require('./loadCss')

const { getLogger } = require('../utils')
const logger = getLogger('main.css')

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
  constructor ({
    file,
    devTools,
    onDidFinishLoad,
    onReadyToShow,
    ...windowSettings
  }) {
    logger.debug('creating StandardWindow ...')
    // calls new BrowserWindow with these props
    super({ ...defaultProps, ...windowSettings })

    this.loadFile(file)

    if (devTools) this.webContents.openDevTools()

    this.webContents.on('did-finish-load', () => {
      loadCss(this, path.join(__dirname, '/../shared.css'))
      if (onDidFinishLoad) onDidFinishLoad()
      if (this.onDidFinishLoad) this.onDidFinishLoad()
    })

    // gracefully show when ready to prevent flickering
    this.once('ready-to-show', () => {
      this.show()
      if (onReadyToShow) onReadyToShow()
      if (this.onReadyToShow) this.onReadyToShow()
    })

    logger.debug('...StandardWindow created')
  }
}

module.exports = StandardWindow
