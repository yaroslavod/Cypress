const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // url po ymol4aniu
    'baseUrl':'http://167.99.178.249:3000/',


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
