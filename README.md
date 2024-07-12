# CGM - E2E Test Automation
This repository represents an End-to-End (E2E) test automation project for the Sauce Demo e-commerce website using **Cypress** and **TypeScript**. The test focus on adding a product to the cart and finalizing purchase.


## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)
- Cypress 13.13.0
- TypeScript 5.5.3


## Configuration

You can adjust the test data such as login credentials and checkout information by personalizing the following environment variables in the `cypress.config.ts` file:

- `env.username`
- `env.password`
- `env.firstName`
- `env.lastName`
- `env.postalCode`


## Install

1. **Clone the repository**:
```bash
   git clone https://github.com/tebmed/cgm-test-auto.git
   cd cgm-test-auto
```

2. **Install dependencies**:
```bash
  npm install
```


3. **Run tests in interactive mode**:
```bash
  npx cypress open
```


4. **Run Cypress tests in headless mode**:
```bash
  npx cypress run
```