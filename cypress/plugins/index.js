/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const path = require('path')
const fs = require('fs-extra')

function getConfigurationByFile(file) {
  const pathToConfigurationFile = path.resolve('cypress/config', `${file}.json`)
  return fs.readJson(pathToConfigurationFile)
}

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const file = config.env.configFile || 'local'
  console.log(file)
  return getConfigurationByFile(file)
}
