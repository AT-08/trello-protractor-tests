import {browser, Config} from 'protractor'

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [
    './e2e/specs/**/*.spec.js'
  ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  noGlobals: true,
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  }
};
