import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.ts', 
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://saucedemo.com',
    chromeWebSecurity: false,
    env: {
      username: 'standard_user',
      password: 'secret_sauce',
      firstName: 'Mohammed',
      lastName: 'TEBIB',
      postalCode: '92000',
    }
  },
});
