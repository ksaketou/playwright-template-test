## Test Automation Project using Playwright & Typescript

This project contains an initial structure of a Test Automation project using Playwright, NodeJS and Typescript. It contains both UI and API tests and related action and validation methods.

Website used for UI testing: https://trytestingthis.netlify.app/

Website used for API testing: https://reqres.in

### Software Prerequisites

* Node.js (v20+)

### Setup Instructions

1. Open the project in VS Code or any other editor of your choice
2. Run `npm i` to install all the required dependencies
3. Run `npx playwright install` to download the browsers

### Configuring the execution

1.  Define the available environments 

    At the bottom of the `playwright.config.ts` file located in the root of the project you will find the configuration for three sample environments: test, dev and prod. You can modify the number of those environments, their names and also the related information (eg. urls). This is where you can also declaire environment specific variables like usernames.

2. Select an environment for the execution

    The `.env` file located at the root of the project contains the `TEST_ENV` option which is the environment selected for the execution. Based on the information declaired at the `playwright.config`, you can set this option accordingly.

3. Select a browser

    The option `BROWSER` in the `.env` file represents the browser selected for the execution. Available options are: chrome, chromium, firefox and webkit.

4. Set the number of parallel tests (if needed)

    The option `WORKERS` in the `.env` file contains the number of parallel tests to run during the execution. The default value is set to 1 for sequential execution.

### Executing Tests

* To execute the whole test project simply run: `npx playwright test`
* To execute only the tests containing a specific tag run: `npx playwright test --grep "@<tag>"`
* To execute only the tests using a certain prefix based on the test title run: `npx playwright --grep "<test_prefix>"`

    In the root of the project there is also the execution script `launch_tests.cmd` in order to facilitate the execution.
