/*
* loads config globals
* !!! syncronous operation
* !!! before logger is instanciated
*/

const loadYAMLSync = require('../shared/helpers/loadYAMLSync')

const config = loadYAMLSync('../../config/config.yaml', false)

module.exports = config
