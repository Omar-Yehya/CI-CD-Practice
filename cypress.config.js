const { defineConfig } = require("cypress");



module.exports = defineConfig({
viewportHeight: 1080,
viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
      // implement node event listeners here
    },
  },
});
