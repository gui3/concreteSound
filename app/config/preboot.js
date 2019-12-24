
const path = require('path')

function preboot () {
  require('dotenv').config({
    path: path.resolve(process.cwd(), './app/.config')
  })
}

module.exports = preboot
