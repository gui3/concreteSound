// const { BrowserWindow } = require('electron')
// const path = require('path')
const fs = require('fs')

const logger = require('../../config/getLogger')({
  id: 'main.css'
})

function loadCss (elWindow, cssPath) {
  fs.readFile(
    cssPath,
    'utf-8',
    (error, data) => {
      if (error) throw error
      const css = data.replace(/\s{2,10}/g, ' ').trim()
      elWindow.webContents.insertCSS(css)
      logger.info('loaded css :' + css.substring(0, 20) + '...')
    }
  )
}

module.exports = loadCss
