import { defineConfig } from 'cypress'

const mainFolder = 'tests/e2e/cypress'

export default defineConfig({
  downloadsFolder: `${mainFolder}/downloads`,
  fixturesFolder: `${mainFolder}/fixtures`,
  screenshotsFolder: `${mainFolder}/screenshots`,
  videosFolder: `${mainFolder}/videos`,
  e2e: {
    specPattern: `${mainFolder}/e2e/**/*.cy.{js,jsx,ts,tsx}`,
    baseUrl: 'http://localhost:5000',
    supportFile: `${mainFolder}/support/e2e.ts`,
  }
})
