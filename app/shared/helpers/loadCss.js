// const { BrowserWindow } = require('electron')
// const path = require('path')
const fs = require('fs')

function loadCss (elWindow, cssPath) {
  fs.readFile(
    cssPath,
    'utf-8',
    (error, data) => {
      if (error) throw error
      const css = data.replace(/\s{2,10}/g, ' ').trim()
      elWindow.webContents.insertCSS(css)
      // console.log('loaded css ' + css)
    }
  )
}

module.exports = loadCss
