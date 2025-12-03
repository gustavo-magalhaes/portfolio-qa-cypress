const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: true, // Adicione esta linha
    videosFolder: 'cypress/videos', // Adicione esta linha
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
