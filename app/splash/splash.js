/*
* the splashscreen
*/
const path = require('path')

const StandardWindow = require('../shared/helpers/StandardWindow')
const loadCss = require('../shared/helpers/loadCss')

function splash () {
  const splashScreen = new StandardWindow({
    file: 'app/splash/splash.html',
    width: 450,
    height: 200,
    frame: false,
    resizable: false,
    backgroundColor: '#fff'
  })

  splashScreen.show() // first things first

  splashScreen.onDidFinishLoad = function () {
    loadCss(this, path.join(__dirname, 'splash.css'))
  }

  return splashScreen
}

module.exports = splash
