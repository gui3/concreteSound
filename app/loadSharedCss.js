// const { BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')

function loadSharedCss () {
  const css = new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, 'shared', 'shared.css'),
      'utf-8',
      function (error, data) {
        if (error) reject(error)
        console.log('data')
        console.log(data)
        resolve(data.replace(/\s{2,10}/g, ' ').trim())
      }
    )
  })
  return css
}

module.exports = loadSharedCss
