/*
* global configuration variables
*
*/

const fs = require('fs')
const path = require('path')
const YAML = require('yaml')

function loadYAMLSync (file, logger = true) {
  function log (message) {
    if (logger) {
      require('../../config/logger/log')(message)
    } else {
      // Debugger (log.js) is not ready yet
      console.log(message)
    }
  }

  const filePath = path.join(__dirname, file)

  try {
    const data = fs.readFileSync(filePath, 'utf8')
    log('---file loaded')
    return YAML.parse(data) || {}
  } catch (err) {
    const message = `Error reading YAML file : ${filePath}\nError ${err.message}`
    log(message)
    err.message = message
    throw err
  }
}

module.exports = loadYAMLSync
