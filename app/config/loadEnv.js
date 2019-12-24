
const path = require('path')

const configPath = path.resolve(process.cwd(), './app/.config')
require('dotenv').config({
  path: configPath
})
