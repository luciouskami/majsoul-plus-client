const fs = require('fs')
const path = require('path')
const CardList = require('./common/CardList')
const configs = require('../configs')
const enabledExecutes = JSON.parse(fs.readFileSync(configs.EXECUTES_CONFIG_PATH).toString('utf-8'))
const i18n = require('../i18nInstance')
const defaultOptions = {
  settingFilePath: configs.EXECUTES_CONFIG_PATH,
  checkedKeys: enabledExecutes.map(item => `${item.name || '未命名'}|${item.author || '无名氏'}`),
  rootDir: path.join(__dirname, '../', configs.EXECUTES_DIR),
  config: 'execute.json',
  renderTarget: 'executeInfos'
}

class Executes extends CardList {
  constructor (options) {
    super({ ...defaultOptions, ...options })
  }
  _getExportInfo () {
    return {
      extend: 'mspe',
      typeText: i18n.t.manager.fileTypeMSPE()
    }
  }
}
module.exports = Executes
