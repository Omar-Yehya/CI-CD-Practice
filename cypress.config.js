const { defineConfig } = require("cypress");



module.exports = defineConfig({
viewportHeight: 1080,
viewportWidth: 1920,
reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
},

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      require('@cypress/grep/src/plugin')(config);
      return config;


    },
  },
});
