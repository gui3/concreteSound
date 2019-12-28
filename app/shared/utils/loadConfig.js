
const path = require('path')

function loadConfig () {
  require('dotenv').config({
    path: path.resolve(process.cwd(), './app/.config')
  })
}

module.exports = loadConfig
