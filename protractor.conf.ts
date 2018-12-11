import {browser, Config} from 'protractor'

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },
    specs: [
        './e2e/specs/createdashboard.spec.js',
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // SELENIUM_PROMISE_MANAGER: false,
    noGlobals: true,
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().timeouts().implicitlyWait(15000);
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
    },
};
