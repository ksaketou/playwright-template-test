import { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config( {path: `${__dirname}/.env` });


// Config to hold extra properties
interface EnvConfig extends PlaywrightTestConfig {
  BASEURL: string;
  RESTURL: string;
  USERNAME: string;
  PASSWORD: string;
}

// get the browser type from the .env file. If none, set it to chrome
const browserType = process.env.BROWSER_TYPE || 'chrome';

const defaultConfig: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: "./tests",
  workers: parseInt(`${process.env.WORKERS}`),
  use: {
    launchOptions: {
      headless: false,
      args: ['--start-maximized'],
      slowMo: 100
    },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },
  reporter:[
  ['monocart-reporter', {  
    name: "Test Report",
    outputFile: './test-results/report/index.html',
  }]],
  projects: [
    {
      name: browserType.charAt(0).toUpperCase() + browserType.slice(1),
      use: {
        // necessary option to maximize the browser window
        viewport: null
      }    
    }
  ]
}

// set config for test environment
const testConfig: EnvConfig = {
  BASEURL: 'https://trytestingthis.netlify.app/',
  RESTURL: 'https://reqres.in',
  USERNAME: 'test',
  PASSWORD: 'test'
};

// set config for dev environment
const devConfig: EnvConfig = {
  BASEURL: 'https://dev.example.com',
  RESTURL: '',
  USERNAME: 'dev',
  PASSWORD: 'devpass'
};

// set config for prod environment
const prodConfig: EnvConfig = {
  BASEURL: 'https://prod.example.com',
  RESTURL: '',
  USERNAME: 'prod',
  PASSWORD: 'prodpass'
};

// get the environment type from the .env file. If none, set it to test
const environment = process.env.TEST_ENV || 'test';

// config object with default configuration and environment specific configuration
const config: EnvConfig = {
  ...defaultConfig,
  ...(environment === 'test' ? testConfig : environment === 'prod' ? prodConfig : devConfig)
};

console.log('Enviroment selected: '+ environment)

export default config

