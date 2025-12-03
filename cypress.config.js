const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: true,
    videosFolder: 'cypress/videos',
    videoCompression: 32, // Qualidade do vídeo (0-51, menor = melhor)
    videoUploadOnPasses: true, // Grava mesmo quando passa
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
